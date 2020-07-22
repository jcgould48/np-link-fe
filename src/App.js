import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";
import MainRouter from "./MainRouter";
import checkTokenAuth from "./redux/lib/helpers/checkTokenAuth"
import CssBaseline from "@material-ui/core/CssBaseline"

import { Provider } from "react-redux";
import store from "./redux/store/store";

checkTokenAuth(store);
class App extends Component {
  render() {
    return (
      <CssBaseline>
      <Provider store={store}>
        <Router>
          <React.Suspense fallback={<Spinner />}>
            <MainRouter />
          </React.Suspense>
        </Router>
      </Provider>
      </CssBaseline>
    );
  }
}

export default App;
