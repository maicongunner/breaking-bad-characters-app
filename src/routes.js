import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CharacterDetails from './pages/CharacterDetails';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/character-details/:id" component={CharacterDetails} />
    </Switch>
  );
}
