import { combineReducers } from "redux";
import { combineModules } from "../modules/combineModules";
import UserReducer from "./reducers/user";
import RegReducer from "./reducers/registration";

const appReducer = combineReducers({
    user: UserReducer,
    reg: RegReducer,
    ...combineModules.getReducers(),
});

export default appReducer;
