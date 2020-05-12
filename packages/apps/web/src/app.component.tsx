import React from 'react'
import { Router } from 'react-router-dom'
import { Menubar, Layout } from '@shared/ui'
import { FilterContext } from '@shared/logic'

import { history } from './history'
import { Routes } from './routes.component'
import { items } from './menu'

import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import '@shared/ui/src/main.css'

export function App() {
  return (
    <Router history={history}>
      <Menubar model={items} />
      <Layout>
        <FilterContext>
          <Routes />
        </FilterContext>
      </Layout>
    </Router>
  )
}
