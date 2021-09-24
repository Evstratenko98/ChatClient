import React, { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { GetUserAction, ResetAction } from "../../redux/actions/user";
import { Route } from "react-router";
import AuthLink from "./authLink";

const PrivateRoute = (props) => {
    const { token } = useAuth();
    const dispatch = useDispatch();

    useEffect(() => {
        if (token) dispatch(GetUserAction({ token }));

        return () => {
            dispatch(ResetAction());
        };
    }, []);

    if (token) return <Route {...props} />;

    return <AuthLink />;
};

export default PrivateRoute;
