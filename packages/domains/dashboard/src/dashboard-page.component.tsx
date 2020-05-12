import React from 'react'
import { Card, DataTable, Column, Spinner } from '@shared/ui'
import { useFilterState, STATS_TYPES_MAP } from '@shared/logic'
import { Filter } from '@shared/components'
import { prepareData } from './logic'

const Page = () => {
  const { state } = useFilterState()
  const result = prepareData(state)
  return (
    <Card title='Month average'>
      <Filter />
      {!result && <Spinner />}
      <DataTable value={result} header={<h4>{STATS_TYPES_MAP[state.type]}</h4>} responsive autoLayout>
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

export const DashboardPage = Page
