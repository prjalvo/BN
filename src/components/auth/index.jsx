import React, { Component } from 'react';
import { Switch, Route, BrowserRouter,useRouteMatch } from 'react-router-dom'
import Login from './login';
import Reset from './reset-password';
import Forgot from './forgot-password';


export default class rootRoutes extends Component {
  render() {
    return (
      <Users />
    );
  }
}


function Users()
{

  let match = useRouteMatch();
  return (
   <main>
   <div>
      <Switch>
        <Route exact path={[`${match.path}/login`, `${match.path}`]} component={Login} />        
        <Route path={`${match.path}/reset-password`} component={Reset} />       
        <Route path={`${match.path}/forgot-password`} component={Forgot} /> 
      </Switch> 
    </div>
    </main>
  )
} 
