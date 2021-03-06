import React from 'react';
import {
  Switch, Route, NavLink, Redirect,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUndo } from '@fortawesome/free-solid-svg-icons';
import Crypto from './components/Crypto';
import CryptoList from './components/CryptoList';

function App() {
  const element = <FontAwesomeIcon icon={faBars} />;
  const element2 = <FontAwesomeIcon icon={faUndo} />;
  return (
    <div className="App">
      <nav>
        <NavLink to="/">{element}</NavLink>
        <h4>The Crypto Lookup</h4>
        <NavLink to="/">{element2}</NavLink>
      </nav>
      <Switch>
        <Route path="/" exact component={CryptoList} />
        <Route path="/Crypto/:id" exact component={Crypto} />
        <Redirect to="/" />
      </Switch>

    </div>
  );
}

export default App;
