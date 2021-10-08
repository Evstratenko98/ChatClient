import { call, put, takeLatest } from 'redux-saga/effects';
import SERVICE_API from '../../../../api';
import { ROOMS_ACTION_TYPES } from '../reducers/rooms';

function* getRooms() {
  try {
    const { data } = yield call(SERVICE_API.RoomsAPI.getRooms);

    yield put({
      type: ROOMS_ACTION_TYPES.GET.SUCCESS,
      payload: data
    });
  } catch ({ response }) {
    yield put({
      type: ROOMS_ACTION_TYPES.GET.ERROR,
      payload: response.data
    });
  }
}

export function* RoomsSaga() {
  yield takeLatest(ROOMS_ACTION_TYPES.GET.START, getRooms);
}
