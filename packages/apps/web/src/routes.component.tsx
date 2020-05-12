import React, { FC } from 'react'
import Loadable from 'react-loadable'
import { Switch, Route } from 'react-router-dom'
import { RouteLoading } from './route-loading.component'

const AsyncDashboard = Loadable({
  loader: () => import('@domains/dashboard'),
  loading: RouteLoading,
})

const AsyncChart = Loadable({
  loader: () => import('@domains/chart'),
  loading: RouteLoading,
})

export const Routes: FC = () => (
  <Switch>
    <Route path='/' exact>
      <AsyncDashboard />
    </Route>
    <Route path='/chart' exact>
      <AsyncChart />
    </Route>
  </Switch>
)
