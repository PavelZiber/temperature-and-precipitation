import { STATS_MODE, useStatsData, avg, formatNumber, STATS_TYPES_MAP } from '@shared/logic'
import { Filter, YearStatItem, StatsResponse, StatsData } from '@shared/types'

type DataSet = { label: string; backgroundColor: string; data?: never[] }

type GraphConfig = {
  labels: string[]
  datasets: DataSet[]
  response: boolean
}
const prepareResponse = (response: YearStatItem[], filter: Filter) => {
  return response?.reduce(
    (acc: any, { gcm, annualData }: YearStatItem) => {
      const number = formatNumber(annualData[0])
      acc.labels = [...acc.labels, gcm]
      acc.datasets[0].data = [...acc.datasets[0].data, number]
      return acc
    },
    {
      responsive: true,
      labels: [],
      datasets: [
        {
          label: STATS_TYPES_MAP[filter.type],
          backgroundColor: '#c8c8c8',
          data: [],
        },
      ],
    },
  )
}

const prepareFilter = (filter: Filter) => ({ ...filter, avg: STATS_MODE.YEARLY_AVERAGE })

const countAvg = (response: StatsResponse<YearStatItem>[]): YearStatItem[] => {
  const data = response?.reduce((acc: any, { data }: StatsResponse<YearStatItem>) => [...acc, ...data], [])
  const key = 'gcm'
  const agregate = data?.reduce((rv: Record<string, YearStatItem>, x: YearStatItem) => {
    const current = rv[x[key]]?.annualData || []
    const [xAnnual] = x.annualData
    const [annual = xAnnual] = current

    rv[x[key]] = {
      ...x,
      annualData: [avg(xAnnual, annual)],
    }
    return rv
  }, {})
  return Object.values(agregate)
}

export const prepareData = (state: Filter) => {
  const filter = prepareFilter(state)
  const { loading, data }: StatsData = useStatsData(filter)
  if (!data || loading) {
    return undefined
  }
  // @ts-ignore
  const response = data.length > 1 ? countAvg(data) : data[0].data
  return prepareResponse(response, filter)
}
