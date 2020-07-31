import React from 'react'
import './App.css'
import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { NavComponent, HeaderComponent, HomeComponent, NotFoundComponent } from './components/index'

const history = createBrowserHistory()

const App: React.FC = (): JSX.Element => {
  return (
    <Router history={history}>
      <div>
        <NavComponent />
      </div>
      <div>
        <HeaderComponent />
      </div>
      <div>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="*" component={NotFoundComponent} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
