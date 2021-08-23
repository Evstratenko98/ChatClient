import { DELETE_MESSAGES, REQ_MESSAGES } from "../types";

export const reqMessage = (roomId) => {
   return { type: REQ_MESSAGES, roomId };
};

export const deleteMessage = () => {
   return { type: DELETE_MESSAGES };
};
