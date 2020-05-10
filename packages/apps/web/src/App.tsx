import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Dashboard } from '@domains/dashboard'

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
            </ul>
          </nav>
          <Switch>
            <Route path='/'>
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
