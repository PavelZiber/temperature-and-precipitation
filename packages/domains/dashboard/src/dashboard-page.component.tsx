import React, { memo } from 'react'
import { Card, DataTable, Column } from '@shared/ui'
import { useFilterState, Filter as FilterType, STATS_MODE, useStatsData, MonthStatItem, formatNumber, avg } from '@shared/logic'
import { Filter } from '@shared/components'

const prepareResponse = (response: MonthStatItem[]) =>
  response?.map(({ gcm, monthVals, variable }) => {
    const months = monthVals.map((v) => formatNumber(v))
    const [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec] = months
    return { id: gcm, name: `${gcm} ${variable}`, jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec }
  })

const countAvg = (response) => {
  const data = response?.reduce((acc, { data }) => [...acc, ...data], [])
  const key = 'gcm'
  const agregate = data?.reduce((rv, x: MonthStatItem) => {
    const current = rv[x[key]]?.monthVals || []
    const [janX, febX, marX, aprX, mayX, junX, julX, augX, sepX, octX, novX, decX] = x.monthVals
    const [
      jan = 0,
      feb = 0,
      mar = 0,
      apr = 0,
      may = 0,
      jun = 0,
      jul = 0,
      aug = 0,
      sep = 0,
      oct = 0,
      nov = 0,
      dec = 0,
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

const prepareFilter = (filter: FilterType) => ({ ...filter, avg: STATS_MODE.MONTHLY_AVERAGE })

const prepareData = (state: FilterType) => {
  const filter = prepareFilter(state)
  const result = useStatsData(filter)
  if (!result) {
    return null
  }
  const response = result?.length > 1 ? countAvg(result) : result[0].data
  return prepareResponse(response)
}

const Page = () => {
  const { state } = useFilterState()
  const data = prepareData(state)

  return (
    <Card title='Monthly average'>
      <Filter />
      <DataTable value={data} responsive autoLayout>
        <Column field='name' header='Name' />
        <Column field='jan' header='January' />
        <Column field='feb' header='February' />
        <Column field='mar' header='March' />
        <Column field='apr' header='April' />
        <Column field='may' header='May' />
        <Column field='jun' header='June' />
        <Column field='jul' header='July' />
        <Column field='aug' header='August' />
        <Column field='sep' header='September' />
        <Column field='oct' header='October' />
        <Column field='nov' header='November' />
        <Column field='dec' header='December' />
      </DataTable>
    </Card>
  )
}

export const DashboardPage = memo(Page)
