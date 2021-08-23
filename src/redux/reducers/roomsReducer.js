import { GET_ROOMS } from "../types";

const initialState = {
   rooms: {},
};

export const roomsReducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_ROOMS:
         return { ...state, rooms: action.payload };
      default:
         return state;
   }
};
