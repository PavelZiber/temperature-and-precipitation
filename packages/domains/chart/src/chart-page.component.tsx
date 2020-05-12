import React, { useState, useEffect } from 'react'
import { Card, Chart, Spinner } from '@shared/ui'
import { useFilterState } from '@shared/logic'
import { Filter } from '@shared/components'
import { prepareData } from './logic'

const Page = () => {
  const { state } = useFilterState()
  const result = prepareData(state)
  const [updatedData, updateData] = useState(undefined)
  useEffect(() => {
    updateData(result)
  }, [state])
  const data = updatedData || result
  return (
    <Card title='Year average'>
      <Filter />
      {!data && <Spinner />}
      <Chart type='horizontalBar' data={data} />
    </Card>
  )
}

export const ChartPage = Page
