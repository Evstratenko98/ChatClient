import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Authorization from "../../pages/Authorization";
import Registration from "../../pages/Registration";
import NoPage from "../../pages/NoPage";
import PrivateRoute from "../router/PrivateRoute";
import { combineModules, routes } from "../../modules/combineModules";
import { useAuthorize } from "../../hooks/useAuth";
import Access from "../../pages/Access";

const Layout = () => {
    const allowedModules = useAuthorize(routes);

    return (
        <Router>
            <Switch>
                {allowedModules?.map((route) => (
                    <PrivateRoute
                        exact
                        key={route.path}
                        path={route.path}
                        render={() => <Access module={combineModules.activeModule(route.name)} />}
                    />
                ))}
                <Route exact path="/auth" component={Authorization} />
                <Route exact path="/reg" component={Registration} />
                <Route exact path="*" component={NoPage} />
            </Switch>
        </Router>
    );
};

export default Layout;
