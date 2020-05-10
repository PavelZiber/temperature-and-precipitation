import React from 'react'
import { withRouter } from 'react-router'

const Page = () => {
  return (
    <div>
      <h1>Dashboard test</h1>
    </div>
  )
}

export const Dashboard = withRouter(Page)
