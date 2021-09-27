import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from "./notFound/NotFound";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
