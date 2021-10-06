import { call, put, takeLatest } from "redux-saga/effects";
import SERVICE_API from "../../api";
import { USER_ACTION_TYPES } from "../reducers/user";
import { types } from "../../constants/ACTION_TYPES";

function* getUser({ payload }) {
    try {
        const { data } =
            payload.type === types.registration
                ? yield call(SERVICE_API.UserAPI.registration, payload)
                : yield call(SERVICE_API.UserAPI.getUser, payload);

        yield put({
            type: USER_ACTION_TYPES.GET.SUCCESS,
            payload: data,
        });
    } catch ({ response }) {
        yield put({
            type: USER_ACTION_TYPES.GET.ERROR,
            payload: response.data,
        });
    }
}

export function* UserSaga() {
    yield takeLatest(USER_ACTION_TYPES.GET.START, getUser);
}
