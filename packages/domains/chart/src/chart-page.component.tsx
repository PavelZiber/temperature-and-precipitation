import React from 'react'
import { Card, Chart } from '@shared/ui'
const data = {
  labels: ['bccr_bcm2_0', 'cccma_cgcm3_1', 'cnrm_cm3'],
  datasets: [
    {
      label: 'Average temp. from 1920-1939',
      backgroundColor: '#42A5F5',
      data: [10.522619628892, 8.353677368158, 10.329861450195999],
    },
  ],
}
const Page = () => {
  return (
    <Card title='Yearly average' className='page'>
      <Chart type='bar' data={data} />
    </Card>
  )
}

export const ChartPage = Page
