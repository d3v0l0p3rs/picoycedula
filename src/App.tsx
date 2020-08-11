import React from 'react'
import './App.css'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { HomeComponent } from './components/index'
import { privacyPoliciesComponent } from './components/index'

const history = createBrowserHistory()

const App: React.FC = (): JSX.Element => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route
            exact
            path="/privacy-policies"
            component={privacyPoliciesComponent}
          />
          <Route exact path="*" component={HomeComponent} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
