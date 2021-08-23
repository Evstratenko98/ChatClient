import { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Authorization from "./pages/Autorization/Authorization";
import Registration from "./pages/Registration/Registration";
import Home from "./pages/Home/Home";

import { useDispatch } from "react-redux";
import { useAuth } from "./hooks/useAuth";
import { getInfoUser } from "./redux/actions/userActions";

import PrivateRoute from "./components/router/privateRouter";

function App() {
   const { token } = useAuth();
   const dispatch = useDispatch();

   useEffect(() => {
      if (token) dispatch(getInfoUser(token));
   }, [token]);

   return (
      <BrowserRouter>
         <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute path="/home" component={Home} />
            <Route path="/auth" component={Authorization} />
            <Route path="/reg" component={Registration} />
         </Switch>
      </BrowserRouter>
   );
}

export default App;
