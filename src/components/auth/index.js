import React, { Component } from 'react';
import { Switch, Route, BrowserRouter,useRouteMatch } from 'react-router-dom'
import Login from './login';
import Reset from './reset-password';
import Forgot from './forgot-password';


// import Login from './login';
// import Register from './register';

export default function main() {  
    return (
    	<main>
     
       <Users />
     
  		</main>
    );
  
}  


function Users()
{

  let match = useRouteMatch();
  return (
    <main>
      <BrowserRouter>  
      <Switch>
      <Route exact path={[`${match.path}/login`, `${match.path}`]} component={Login}/>
      <Route exact path={[`${match.path}/reset-password`, `${match.path}`]} component={Reset}/>       
       <Route exact path={[`${match.path}/forgot-password`, `${match.path}`]} component={Forgot}/> 
      </Switch>
      </BrowserRouter>
  </main>
  )
} 