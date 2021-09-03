import React from 'react';
// import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom'
import routes from './router/router.js'

function App() {
  return (
    <div className="App">
      <Switch>
        {
          routes.map(route => {
            return (
              <Route
                key = { route.path }
                path = { route.path }
                component = { route.component } />
            )
          })
        }
        <Redirect exact from = '/' to = {routes[0].path} />
        <Redirect to = '/404'></Redirect>
      </Switch>
    </div>
  );
}

export default App;
