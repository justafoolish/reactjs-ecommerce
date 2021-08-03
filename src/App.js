import React from "react";
import { Header } from "./component";
import { Home, Account, Cart } from "./pages";
import Container from "react-bootstrap/container";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Header />
      <Container fluid className="px-0">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Account">
            <Redirect to="/Account/Login" />
          </Route>
          <Route exact path="/Account/:page">
            <Account />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
        </Switch>
      </Container>
      <footer style={{ minHeight: "25vh", background: "#f8f9fa" }}></footer>
    </Router>
  );
}
