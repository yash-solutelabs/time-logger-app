import React, { Component } from 'react'
import { Container, Header, Divider } from 'semantic-ui-react'

import Dashboard from '../components/dashboard'

class App extends Component {
  render() {
    return (
      <Container>
        <Divider hidden />
        <Header as="h1" dividing textAlign="center">Time-Logger App</Header>
        <Dashboard />
      </Container>
    );
  }
}

export default App;
