import React from 'react'
import 'primereact/resources/themes/nova-light/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { DashboardPage } from '@domains/dashboard'
import { ChartPage } from '@domains/chart'

function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/chart'>Chart</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path='/' exact>
              <DashboardPage />
            </Route>
            <Route path='/chart' exact>
              <ChartPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
