import React, { memo } from 'react'
import { Card, DataTable, Column } from '@shared/ui'
import { useStatsApi, useFilterState, getStatsUrl, Filter as FilterType, STATS_MODE } from '@shared/logic'
import { Filter } from '@shared/components'
import { useDidUpdate } from 'react-hooks-lib'

const formatNumber = (number?: number) => number?.toFixed(2)

const prepareData = (response) =>
  response?.map(({ gcm, monthVals, variable }) => {
    const months = monthVals.map((v) => formatNumber(v))
    const [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec] = months
    return { id: gcm, name: `${gcm} ${variable}`, jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec }
  })

const prepareFilter = (filter: FilterType) => ({ ...filter, avg: STATS_MODE.MONTHLY_AVERAGE })

const Page = () => {
  const { state } = useFilterState()
  const filter = prepareFilter(state)
  const { data: response, setUrl } = useStatsApi(filter)
  const data = prepareData(response)

  useDidUpdate(() => setUrl(getStatsUrl(filter)), [state])

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
