import { combineReducers } from "redux";
import { combineModules } from "../modules/combineModules";
import UserReducer from "./reducers/user";

const appReducer = combineReducers({
    user: UserReducer,
    ...combineModules.getReducers(),
});

export default appReducer;
