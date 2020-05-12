import React, { useEffect, useState } from 'react'
import { Card, DataTable, Column, Spinner } from '@shared/ui'
import { useFilterState } from '@shared/logic'
import { Filter } from '@shared/components'
import { prepareData } from './logic'

const Page = () => {
  const { state } = useFilterState()
  const result: any = prepareData(state)
  const [updatedData, updateData] = useState(undefined)
  useEffect(() => {
    updateData(result)
  }, [state])
  const data = updatedData || result
  return (
    <Card title='Month average'>
      <Filter />
      {!data && <Spinner />}
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

export const DashboardPage = Page
