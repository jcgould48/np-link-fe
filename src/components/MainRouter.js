import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Toastify from "./components/Toastify/Toastify";

const Home = React.lazy(() => import("./components/Home/Home"));
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const Login = React.lazy(() => import("./components/Login/Login"));
const Signup = React.lazy(() => import("./components/Signup/Signup"));
const NotFound = React.lazy(() => import("./components/NotFound/NotFound"));

export default class MainRouter extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Toastify />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/sign-up" component={Signup} />
          <Route exact path="/login" component={Login} />

          <Route exact component={NotFound} />
        </Switch>
      </>
    );
  }
}
