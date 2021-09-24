import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Authorization from "../../pages/Authorization";
import Registration from "../../pages/Registration";
import NoPage from "../../pages/NoPage";
import PrivateRoute from "../router/PrivateRoute";
import { combineModules, routes } from "../../modules/combineModules";
import Authorize from "../authorize";

const Layout = () => (
    <Router>
        <Switch>
            {routes.map((route) => (
                <PrivateRoute
                    exact
                    key={route.path}
                    path={route.path}
                    render={() => <Authorize module={combineModules.activeModule(route.name)} />}
                />
            ))}
            <Route exact path="/auth" component={Authorization} />
            <Route exact path="/reg" component={Registration} />
            <Route exact path="*" component={NoPage} />
        </Switch>
    </Router>
);

export default Layout;
