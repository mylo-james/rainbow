import React from 'react';
import { Route, NavLink } from 'react-router-dom';

import Yellow from './yellow';
import Orange from './orange';

const Red = () => (
  <div>
    <h2 className="red">Red</h2>
    <NavLink exact to="/red">
      Red Only
    </NavLink>
    <NavLink to="/red/yellow">Add Yellow</NavLink>
    <NavLink to="/red/orange">Add Orange</NavLink>

    <Route path="/red/yellow" component={Yellow} />
    <Route path="/red/orange" component={Orange} />
  </div>
);

export default Red;
