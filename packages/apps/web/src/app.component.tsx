import React from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { history } from './history'
import { Menubar, Layout } from '@shared/ui'
import { FilterContext } from '@shared/logic'
import { RouteLoading } from './route-loading.component'
import Loadable from 'react-loadable'

import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import './index.css'

const AsyncDashboard = Loadable({
  loader: () => import('@domains/dashboard'),
  loading: RouteLoading,
})

const AsyncChart = Loadable({
  loader: () => import('@domains/chart'),
  loading: RouteLoading,
})
const items = [
  {
    label: 'Table',
    icon: 'pi pi-fw pi-list',
    command: () => history.push('/'),
  },
  {
    label: 'Chart',
    icon: 'pi pi-fw pi-chart-bar',
    command: () => history.push('/chart'),
  },
]
export function App() {
  return (
    <Router history={history}>
      <Menubar model={items} />
      <Layout>
        <FilterContext>
          <Switch>
            <Route path='/' exact>
              <AsyncDashboard />
            </Route>
            <Route path='/chart' exact>
              <AsyncChart />
            </Route>
          </Switch>
        </FilterContext>
      </Layout>
    </Router>
  )
}
