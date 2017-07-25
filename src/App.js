import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import { Container, Segment } from 'semantic-ui-react';

const App = () => (
  <Segment basic>
    <Container>
        <Switch>
          <Route path="/home" component={Home} />
          <Route component={NoMatch} />
        </Switch>
    </Container>
  </Segment>
)

export default App;

