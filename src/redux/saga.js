import { all } from "redux-saga/effects";
import { UserSaga } from "./saga/user";
import { RegSaga } from "./saga/registration";
import { combineModules } from "../modules/combineModules";

export default function* rootSaga() {
    yield all([UserSaga(), RegSaga(), ...combineModules.getSagas()]);
}
