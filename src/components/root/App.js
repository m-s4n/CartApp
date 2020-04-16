import React, { Component } from "react";
import {Switch, Route} from 'react-router-dom';
import Navi from "../navi/Navi";
import Dashboard from "../root/Dashboard";
import { Container } from "reactstrap";
import Sepet from './Sepet';
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../shared/NotFound";

class App extends Component {
  render() {
    return (
      <Container>
        <Navi></Navi>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route exact path="/sepet" component={Sepet}></Route>
          <Route path="/saveproduct/:productId?" component={AddOrUpdateProduct}></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Container>
    );
  }
}

export default App;
