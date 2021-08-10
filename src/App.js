import React from "react";
import { Header, Footer } from "./components";
import { Home, Account, Cart, Products, Product, About, Contact } from "./pages";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
export default function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/Account">
            <Redirect to="/Account/Login" />
          </Route>

          <Route exact path="/Account/:page" component={Account} />

          <Route path="/Cart" component={Cart} />

          <Route path="/Product/:id" component={Product} />
          <Route path="/Products" component={Products} />

          <Route path="/About" component={About} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}
