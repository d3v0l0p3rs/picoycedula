import React from 'react'
import './App.css'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { HomeComponent } from './components/index'

const history = createBrowserHistory()

const App: React.FC = (): JSX.Element => {
  return (
    <React.StrictMode>
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="*" component={HomeComponent} />
          </Switch>
        </div>
      </Router>
    </React.StrictMode>
  )
}

export default App
