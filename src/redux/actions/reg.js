import { REG_ACTION_TYPES } from "../reducers/registration";

export const RegistrationAction = (payload) => ({
    type: REG_ACTION_TYPES.POST.START,
    payload,
});

export const ResetAction = () => ({
    type: REG_ACTION_TYPES.RESET_STATE,
});
