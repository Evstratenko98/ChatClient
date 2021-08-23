import { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Authorization from "./pages/Autorization/Authorization";
import Registration from "./pages/Registration/Registration";
import Home from "./pages/Home/Home";

import { useDispatch } from "react-redux";
import { useAuth } from "./hooks/useAuth";
import { getInfoUser } from "./redux/actions/userActions";

function App() {
   const { token } = useAuth();
   const dispatch = useDispatch();

   useEffect(() => {
      if (token) dispatch(getInfoUser(token));
   }, [token]);

   return (
      <BrowserRouter>
         <Switch>
            <Route exact path="/">
               {token ? <Redirect to="/home" /> : <Redirect to="/auth" />}
            </Route>
            <Route path="/home">
               <Home />
            </Route>
            <Route path="/auth">
               <Authorization />
            </Route>
            <Route path="/reg">
               <Registration />
            </Route>
         </Switch>
      </BrowserRouter>
   );
}

export default App;
