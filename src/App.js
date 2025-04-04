import React, { Component, Suspense } from 'react'
import { Switch,HashRouter, Route, Routes,BrowserRouter,Redirect } from 'react-router-dom'
import './scss/style.scss'

import rootRoutes from './components/admin/rootRoutes';
import Auth from './components/auth';
import NoMatch from './components/nomatch';

import { getCookie } from './function';

import { NotificationContainer } from "react-notifications";
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)


const forgot = React.lazy(() => import('./components/auth/forgot-password'))
const reset = React.lazy(() => import('./components/auth/reset-password'))


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <NotificationContainer />
        <Switch>
        <Route path='/auth' component={Auth} />
        <Route path='/forgot-password' component={forgot} />
        <Route path='/reset-password' component={reset} />       
          {getCookie('token') ? <Route path='/admin' component={rootRoutes} /> : <Redirect to={"/auth/login"} />}
          {getCookie('token') ? <Redirect to={"/admin"} /> : <Redirect to={"/auth/login"} />}
          <Route component={NoMatch} />          
        </Switch>        
      </BrowserRouter>
    )
  }
}

export default App
  