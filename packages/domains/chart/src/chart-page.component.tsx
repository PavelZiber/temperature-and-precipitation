import React from 'react'
import { Card, Chart } from '@shared/ui'
import { useFilterState, STATS_MODE, Filter as FilterType, YearStatItem, useStatsData, avg, formatNumber } from '@shared/logic'
import { Filter } from '@shared/components'

const prepareResponse = (response) => {
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

const countAvg = (response) => {
  const data = response?.reduce((acc, { data }) => [...acc, ...data], [])
  const key = 'gcm'
  const agregate = data?.reduce((rv, x: YearStatItem) => {
    const current = rv[x[key]]?.monthVals || []
    const [xAnnual] = x.annualData
    const [annual = 0] = current

    rv[x[key]] = {
      ...x,
      annualData: [avg(xAnnual, annual)],
    }
    return rv
  }, {})
  return Object.values(agregate)
}
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
  if (!data) {
    return null
  }
  return (
    <Card title='Yearly average'>
      <Filter />
      <Chart type='horizontalBar' data={data} />
    </Card>
  )
}

export const ChartPage = Page
