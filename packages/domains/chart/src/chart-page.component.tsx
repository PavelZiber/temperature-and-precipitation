import React from 'react'
import { Card, Chart } from '@shared/ui'
import { useStatsApi } from '@shared/logic'

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
      labels: [],
      datasets: [
        {
          label: `${variable} from ${fromYear} to ${toYear}`,
          backgroundColor: '#42A5F5',
          data: [],
        },
      ],
    },
  )
}

const Page = () => {
  const { data: response, loading } = useStatsApi({ avg: 'annualavg' })
  if (loading) {
    return null
  }
  const data = prepareData(response)
  return (
    <Card title='Yearly average'>
      <Chart type='bar' data={data} />
    </Card>
  )
}

export const ChartPage = Page
