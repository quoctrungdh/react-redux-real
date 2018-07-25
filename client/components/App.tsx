import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './Login';
import Header from './Header';

function Home() {
  return <div>Hi</div>
}

function NoMatch() {
  return <div>Opsss</div>
}

function Settings() {
  return <div>Settings</div>
}

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/settings' component={Settings} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  )
}

export default App;