import React, { Component } from 'react';
import { Switch, Route,useRouteMatch } from 'react-router-dom'
import List from './list';
import Create from './create';
import Edit from './edit';

export default class Location extends Component {
    render() {
        return (
        <Users />
        )
    }
}

function Users()
{

  let match = useRouteMatch();
  return (
    <div id="layoutSidenav_content">
        <main>
            <Switch>
                <Route path={[`${match.path}/list`]} component={List} />  
                <Route path={[`${match.path}/create`]} component={Create} />            
                <Route path={[`${match.path}/edit/:id`]} component={Edit} />         
            </Switch>
        </main>
    </div>
);  
} 