import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from './history'
import { Nav, Anchor, Box } from '@shared/ui'
import { Grommet } from 'grommet'
import { RouteLoading } from './route-loading.component'
import Loadable from 'react-loadable'

const AsyncDashboard = Loadable({
  loader: () => import('@domains/dashboard'),
  loading: RouteLoading,
})

const AsyncChart = Loadable({
  loader: () => import('@domains/chart'),
  loading: RouteLoading,
})

export function App() {
  return (
    <Grommet plain>
      <Router history={history}>
        <Nav direction='row' background='accent-3' pad='medium' justify='center'>
          <Anchor onClick={() => history.push('/')}>Home</Anchor>
          <Anchor onClick={() => history.push('/chart')}>Chart</Anchor>
        </Nav>
        <Box direction='row' pad='large' fill>
          <Switch>
            <Route path='/' exact>
              <AsyncDashboard />
            </Route>
            <Route path='/chart' exact>
              <AsyncChart />
            </Route>
          </Switch>
        </Box>
      </Router>
    </Grommet>
  )
}
