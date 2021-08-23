import { LOGIN_USER, LOGOUT_USER } from "../types";

const initialState = {
   user: {},
};

export const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case LOGIN_USER:
         return { ...state, user: action.payload };
      case LOGOUT_USER:
         return { ...state, user: {} };
      default:
         return state;
   }
};
