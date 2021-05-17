import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi"
import Dashboard from "./Dashboard";
import CartDetail from "../cart/CartDetail";
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <div>
      <Container>
        <Navi />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/cart" exact component={CartDetail} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
