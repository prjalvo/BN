import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Home from './home';
import User from './view/user';
import Entradas from './view/logs';
import { AppSidebar, AppFooter, AppHeader } from '../index';

export default function Users() {
  let match = useRouteMatch();

  return (
    <main>
      <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1 px-3">
            <Switch>
              <Route exact path={[`${match.path}/home`, `${match.path}`]} component={Home} />
              <Route path={`${match.path}/user`} component={User} />
              <Route path={`${match.path}/logs`} component={Entradas} />
            </Switch>
          </div>
          <AppFooter />
        </div>
      </div>
    </main>
  );
}


