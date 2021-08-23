import { REQ_USER, LOGOUT_USER, REQ_INFO_USER } from "../types";

export const reqUser = (data) => {
   return { type: REQ_USER, data };
};

export const logoutUser = () => {
   return { type: LOGOUT_USER };
};

export const getInfoUser = (userId) => {
   return {
      type: REQ_INFO_USER,
      userId,
   };
};
