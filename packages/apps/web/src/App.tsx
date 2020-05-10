import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from './history'
import { DashboardPage } from '@domains/dashboard'
import { ChartPage } from '@domains/chart'
import { Nav, Anchor, Box } from '@shared/ui'
import { Grommet } from 'grommet'

function App() {
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
              <DashboardPage />
            </Route>
            <Route path='/chart' exact>
              <ChartPage />
            </Route>
          </Switch>
        </Box>
      </Router>
    </Grommet>
  )
}

export default App
