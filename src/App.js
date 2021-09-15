import React from 'react';
// import './App.css';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom'
import CryptoList from './components/CryptoList';
import Crypto from './components/Crypto'

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to={'/'}>Search</NavLink>
      </nav>
      <Switch>
        <Route path={'/'} exact component={CryptoList} />
        <Route path={'/Crypto/:id'} exact component={Crypto} />
        <Redirect to={'/'} />
      </Switch>

      </div>
  );
}

export default App;
