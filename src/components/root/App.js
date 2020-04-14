import React, { Component } from "react";

import Navi from "../navi/Navi";
import Dashboard from "../root/Dashboard";
import { Container } from "reactstrap";
class App extends Component {
  render() {
    return (
      <Container>
        <Navi></Navi>
        <Dashboard></Dashboard>
      </Container>
    );
  }
}

export default App;
