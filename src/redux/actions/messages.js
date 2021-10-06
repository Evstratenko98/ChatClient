import { MESSAGES_ACTION_TYPES } from "../reducers/messages";

export const GetMessagesAction = (payload) => ({
    type: MESSAGES_ACTION_TYPES.GET.START,
    payload,
});

export const AddMessagesAction = (payload) => ({
    type: MESSAGES_ACTION_TYPES.POST.SUCCESS,
    payload,
});

export const ResetMessagesAction = () => ({
    type: MESSAGES_ACTION_TYPES.RESET_STATE,
});
