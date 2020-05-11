import React from 'react'
import { Card, Chart } from '@shared/ui'
import { useStatsApi, useFilterState, STATS_MODE, getStatsUrl, Filter as FilterType } from '@shared/logic'
import { Filter } from '@shared/components'
import { useDidUpdate } from 'react-hooks-lib'

const formatNumber = (number?: number) => number?.toFixed(2)

const prepareData = (response) => {
  const { variable, fromYear, toYear } = response[0]
  return response?.reduce(
    (acc, { gcm, annualData }) => {
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
          label: `${variable} from ${fromYear} to ${toYear}`,
          backgroundColor: '#c8c8c8',
          data: [],
        },
      ],
    },
  )
}

const prepareFilter = (filter: FilterType) => ({ ...filter, avg: STATS_MODE.YEARLY_AVERAGE })

const Page = () => {
  const { state } = useFilterState()
  const filter = prepareFilter(state)
  const { data: response, loading, setUrl } = useStatsApi(filter)

  useDidUpdate(() => setUrl(getStatsUrl(filter)), [state])
  if (loading) {
    return null
  }
  const data = prepareData(response)
  return (
    <Card title='Yearly average'>
      <Filter />
      <Chart type='horizontalBar' data={data} />
    </Card>
  )
}

export const ChartPage = Page
