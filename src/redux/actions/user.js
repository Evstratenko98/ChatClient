import { USER_ACTION_TYPES } from "../reducers/user";

export const GetUserAction = (payload) => ({
    type: USER_ACTION_TYPES.GET.START,
    payload,
});

export const ResetAction = () => ({
    type: USER_ACTION_TYPES.RESET_STATE,
});
