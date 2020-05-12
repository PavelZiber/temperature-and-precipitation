import { STATS_MODE, useStatsData, formatNumber, avg } from '@shared/logic'
import { MonthStatItem, Filter, StatsResponse } from '@shared/types'

const prepareResponse = (response: MonthStatItem[]) =>
  response?.map(({ gcm, monthVals, variable }: MonthStatItem) => {
    const months = monthVals.map((v) => formatNumber(v))
    const [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec] = months
    return { id: gcm, name: `${gcm} ${variable}`, jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec }
  })

const countAvg = (response: StatsResponse<MonthStatItem>[]): MonthStatItem[] => {
  const data = response?.reduce((acc: any, { data }: StatsResponse<MonthStatItem>) => [...acc, ...data], [])
  const key = 'gcm'
  const agregate = data?.reduce((rv: Record<string, MonthStatItem>, x: MonthStatItem) => {
    const current = rv[x[key]]?.monthVals || []
    const [janX, febX, marX, aprX, mayX, junX, julX, augX, sepX, octX, novX, decX] = x.monthVals
    const [
      jan = janX,
      feb = febX,
      mar = marX,
      apr = aprX,
      may = mayX,
      jun = junX,
      jul = junX,
      aug = augX,
      sep = sepX,
      oct = octX,
      nov = novX,
      dec = decX,
    ] = current
    rv[x[key]] = {
      ...x,
      monthVals: [
        avg(jan, janX),
        avg(feb, febX),
        avg(mar, marX),
        avg(apr, aprX),
        avg(may, mayX),
        avg(jun, junX),
        avg(jul, julX),
        avg(aug, augX),
        avg(sep, sepX),
        avg(oct, octX),
        avg(nov, novX),
        avg(dec, decX),
      ],
    }
    return rv
  }, {})
  return Object.values(agregate)
}

const prepareFilter = (filter: Filter) => ({ ...filter, avg: STATS_MODE.MONTHLY_AVERAGE })

export function prepareData(state: Filter) {
  const filter = prepareFilter(state)
  const result: StatsResponse<MonthStatItem>[] = useStatsData(filter)
  if (!result) {
    return undefined
  }
  const response = result?.length > 1 ? countAvg(result) : result[0].data
  return prepareResponse(response)
}
