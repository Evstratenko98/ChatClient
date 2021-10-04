import { all } from "redux-saga/effects";
import { UserSaga } from "./saga/user";
import { combineModules } from "../modules/combineModules";

export default function* rootSaga() {
    yield all([UserSaga(), ...combineModules.getSagas()]);
}
