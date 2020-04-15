import React, { Component } from "react";
import {Switch, Route} from 'react-router-dom';
import Navi from "../navi/Navi";
import Dashboard from "../root/Dashboard";
import { Container } from "reactstrap";
import Sepet from './Sepet';

class App extends Component {
  render() {
    return (
      <Container>
        <Navi></Navi>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/sepet" component={Sepet}></Route>
        </Switch>
      </Container>
    );
  }
}

export default App;
