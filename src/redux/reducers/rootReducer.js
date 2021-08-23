import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { roomsReducer } from "./roomsReducer";
import { messagesReducers } from "./messagesReducer";

export const rootReducer = combineReducers({
   user: userReducer,
   rooms: roomsReducer,
   messages: messagesReducers,
});
