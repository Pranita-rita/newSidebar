import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard/Dashboard";
import { Profile } from "../pages/Profile";
import { Settings } from "../pages/Settings";
import { Tables } from "../pages/Tables";


const Routes = () => {

  return (
    <Fragment>
      <BrowserRouter>
        <Route exact path="/" render={() => <Dashboard/> } />
        <Route path="/customer-search" component={Tables} />
        <Route path="/analysis" component={Profile} />
        <Route path="/settings" component={Settings} />

      </BrowserRouter>
    </Fragment>
  );
};

export default Routes;
