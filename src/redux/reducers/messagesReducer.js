import { GET_MESSAGES, DELETE_MESSAGES } from "../types";

const initialState = {
   messages: {},
};

export const messagesReducers = (state = initialState, action) => {
   switch (action.type) {
      case GET_MESSAGES:
         return { ...state, messages: action.payload };
      case DELETE_MESSAGES:
         return { ...state, messages: {} };
      default:
         return state;
   }
};
