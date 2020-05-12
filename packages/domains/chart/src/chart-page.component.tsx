import React from 'react'
import { Card, Chart, Spinner } from '@shared/ui'
import { useFilterState } from '@shared/logic'
import { Filter } from '@shared/components'
import { prepareData } from './logic'

const Page = () => {
  const { state } = useFilterState()
  const result = prepareData(state)
  return (
    <Card title='Year average'>
      <Filter />
      {!result && <Spinner />}
      <Chart type='horizontalBar' data={result} />
    </Card>
  )
}

export const ChartPage = Page
