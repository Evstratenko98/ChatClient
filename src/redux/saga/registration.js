import { call, put, takeLatest } from "redux-saga/effects";
import SERVICE_API from "../../api";
import { REG_ACTION_TYPES } from "../reducers/registration";

function* getUser({ payload }) {
    try {
        const { data } = yield call(SERVICE_API.UserAPI.registration, payload);

        yield put({
            type: REG_ACTION_TYPES.POST.SUCCESS,
            payload: data,
        });
    } catch ({ response }) {
        yield put({
            type: REG_ACTION_TYPES.POST.ERROR,
            payload: response.data,
        });
    }
}

export function* RegSaga() {
    yield takeLatest(REG_ACTION_TYPES.POST.START, getUser);
}
