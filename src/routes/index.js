import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import SignUp from "../pages/auth";
import Home from "../pages/home/Home";
import Product from "../pages/product/Product";
import Services from "../pages/services/Services";

function RouteTravel() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/services" component={Services} />

        <Route path="/product" component={Product} />

        <Route path="/sign-in" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default RouteTravel;
