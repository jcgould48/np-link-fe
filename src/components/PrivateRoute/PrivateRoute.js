import React from "react";
import { Route, Redirect } from "react-router-dom";
import { checkIfTokenTrueOrFalse } from "./checkIfTokenTrueOrFalse";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkIfTokenTrueOrFalse() ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
//import PropTypes from "prop-types";
// PrivateRoute.propTypes = {
//   authUser: PropTypes.object.isRequired,
// };

export default PrivateRoute;
