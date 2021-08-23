import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const PrivateRoute = (props) => {
   const { token } = useAuth();
   if (token) return <Route {...props} />;

   return <Redirect to="/auth" />;
};

export default PrivateRoute;
