import HOR from "../HOR";
import { ActionTypes } from "../utils/actionCreator";

const { pipeHigherOrderReducers, withLoadable, withResetState } = HOR;
export const MESSAGES_ACTION_TYPES = new ActionTypes("MESSAGES").listAT().addAT().getActionTypes();

const initialState = {
    messages: [],
};

const stateHandler = (state, params) => ({
    ...state,
    ...params,
});
const handleAction = {
    [MESSAGES_ACTION_TYPES.GET.SUCCESS]: stateHandler,
    [MESSAGES_ACTION_TYPES.POST.SUCCESS]: (state, params) => ({
        ...state,
        messages: [...state.messages, params],
    }),
};

const reducer = (state = initialState, action) =>
    handleAction[action.type] ? handleAction[action.type](state, action.payload) : state;

export default pipeHigherOrderReducers(
    withResetState(MESSAGES_ACTION_TYPES.RESET_STATE, initialState),
    withLoadable({
        isLoadingActionType: [MESSAGES_ACTION_TYPES.GET.START],
        successActionType: [MESSAGES_ACTION_TYPES.GET.SUCCESS],
        errorActionType: [MESSAGES_ACTION_TYPES.GET.ERROR],
    })
)(reducer);
