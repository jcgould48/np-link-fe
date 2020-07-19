import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Toastify from "./components/Toastify/Toastify";
import 'formol/lib/default.css'


const Home = React.lazy(() => import("./components/Home/Home"));
const Navbar = React.lazy(() => import("./components/Navbar/Navbar"));
const Login = React.lazy(() => import("./components/Login/Login"));
const Signup = React.lazy(() => import("./components/Professional/Signup"));
const MainProfessional = React.lazy(() => import("./components/Professional/MainProfessional"));
const Signup2 = React.lazy(() => import("./components/Professional/Signup2"));
const UserForm = React.lazy(() => import("./components/AAA/UserForm"));
const OrgApplication = React.lazy(() => import("./components/Organization/OrgApplication"));
const OrganizationSelector = React.lazy(() => import("./components/Organization/OrganizationSelector/OrganizationSelector"));
const AuthOrganization = React.lazy(() => import("./components/Admin/AuthOrganization"));
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
          <Route exact path="/sign-up2" component={Signup2} />
          <Route exact path="/user-form" component={UserForm} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/auth-org" component={AuthOrganization} />
          <Route exact path="/organization-selector" component={OrganizationSelector} />
          <Route exact path="/org-application" component={OrgApplication} />
          <Route exact component={NotFound} />
        </Switch>
      </>
    );
  }
}

