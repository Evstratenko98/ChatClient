import { call, put, takeLatest } from "redux-saga/effects";
import SERVICE_API from "../../api";
import { MESSAGES_ACTION_TYPES } from "../reducers/messages";

function* getMessages({ payload }) {
    try {
        const { data } = yield call(SERVICE_API.MessagesAPI.getMessages, payload);

        yield put({
            type: MESSAGES_ACTION_TYPES.GET.SUCCESS,
            payload: data,
        });
    } catch ({ response }) {
        yield put({
            type: MESSAGES_ACTION_TYPES.GET.ERROR,
            payload: response.data,
        });
    }
}

export function* MessagesSaga() {
    yield takeLatest(MESSAGES_ACTION_TYPES.GET.START, getMessages);
}
