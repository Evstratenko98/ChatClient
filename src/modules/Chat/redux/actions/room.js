import { ROOM_ACTION_TYPES } from "../reducers/room";

export const GetRoomAction = (payload) => ({
    type: ROOM_ACTION_TYPES.GET.SUCCESS,
    payload,
});

export const ResetRoomAction = () => ({
    type: ROOM_ACTION_TYPES.RESET_STATE,
});
