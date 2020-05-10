import React, { memo } from 'react'
import { Card, DataTable, Column } from '@shared/ui'
import { useStatsApi } from '@shared/logic'

const formatNumber = (number?: number) => number?.toFixed(2)

const prepareData = (response) =>
  response?.map(({ gcm, monthVals, variable }) => {
    const months = monthVals.map((v) => formatNumber(v))
    const [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec] = months
    return { id: gcm, name: `${gcm} ${variable}`, jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec }
  })

const Page = () => {
  const { data: response } = useStatsApi({ avg: 'mavg' })
  const data = prepareData(response)

  return (
    <Card title='Monthly average'>
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
