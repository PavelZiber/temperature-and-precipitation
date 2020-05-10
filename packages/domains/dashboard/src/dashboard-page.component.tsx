import React from 'react'
import { Card, DataTable, Column } from '@shared/ui'

const data = [
  {
    id: 1,
    name: 'Eric',
    jan: 1.222,
    feb: 1.222,
    mar: 1.222,
    apr: 1.222,
    may: 1.222,
    jun: 1.222,
    jul: 1.222,
    aug: 1.222,
    sep: 1.222,
    oct: 1.222,
    nov: 1.222,
    dec: 1.222,
  },
  {
    id: 2,
    name: 'Chris',
    jan: 1.222,
    feb: 1.222,
    mar: 1.222,
    apr: 1.222,
    may: 1.222,
    jun: 1.222,
    jul: 1.222,
    aug: 1.222,
    sep: 1.222,
    oct: 1.222,
    nov: 1.222,
    dec: 1.222,
  },
  {
    id: 3,
    name: 'Alan',
    jan: 1.222,
    feb: 1.222,
    mar: 1.222,
    apr: 1.222,
    may: 1.222,
    jun: 1.222,
    jul: 1.222,
    aug: 1.222,
    sep: 1.222,
    oct: 1.222,
    nov: 1.222,
    dec: 1.222,
  },
]

const Page = () => {
  return (
    <Card title='Monthly average' className='page'>
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
