import { takeEvery, put, call } from "redux-saga/effects";
import {
   GET_MESSAGES,
   GET_ROOMS,
   LOGIN_USER,
   REQ_INFO_USER,
   REQ_MESSAGES,
   REQ_ROOMS,
   REQ_USER,
} from "../types";
import API from "../../api";

export function* sagaWatcher() {
   yield takeEvery(REQ_USER, sagaWorkerUser);
   yield takeEvery(REQ_MESSAGES, sagaWorkerMessage);
   yield takeEvery(REQ_ROOMS, sagaWorkerRooms);
   yield takeEvery(REQ_INFO_USER, sagaWorkerInfo);
}

//Get User
function fetchUser(action) {
   return API.login(action.data).then((res) => res);
}
function* sagaWorkerUser(action) {
   try {
      const payload = yield call(fetchUser, action);
      yield put({ type: LOGIN_USER, payload });
   } catch (e) {
      console.log(e);
   }
}

//Get user info for cookie
function fetchUserInfo(action) {
   return API.getUser({ userId: action.userId }).then((res) => res);
}
function* sagaWorkerInfo(action) {
   try {
      const payload = yield call(fetchUserInfo, action);
      yield put({ type: LOGIN_USER, payload });
   } catch (e) {
      console.log(e);
   }
}

//Get Rooms
function fetchRooms() {
   return API.getRooms().then((res) => res);
}
function* sagaWorkerRooms(action) {
   try {
      const payload = yield call(fetchRooms);
      yield put({ type: GET_ROOMS, payload });
   } catch (e) {
      console.log(e);
   }
}

//Get Message
function fetchMessage(action) {
   return API.roomGetMessages({ roomId: action.roomId }).then((res) => res);
}
function* sagaWorkerMessage(action) {
   try {
      const payload = yield call(fetchMessage, action);
      yield put({ type: GET_MESSAGES, payload });
   } catch (e) {
      console.log(e);
   }
}
