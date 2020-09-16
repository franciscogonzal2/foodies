import React from 'react';
import './App.css';
import Home from './js/views/Home';
import Menu from './js/views/Menu';
import Contact from './js/views/Contact';
import { Route, Switch } from 'react-router-dom'
import { routeCodes } from '../src/js/application/routesConfig';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Switch>
				<Route exact path={routeCodes.HOMEPAGE} component={Home} />
        <Route exact path={routeCodes.MENU} component={Menu} />
        <Route exact path={routeCodes.CONTACT} component={Contact} />
			</Switch>
    </div>
  );
}

export default App;
