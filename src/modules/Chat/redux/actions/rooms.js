import { ROOMS_ACTION_TYPES } from '../reducers/rooms';

export const GetRoomsAction = () => ({
  type: ROOMS_ACTION_TYPES.GET.START
});

export const ResetRoomsAction = () => ({
  type: ROOMS_ACTION_TYPES.RESET_STATE
});
