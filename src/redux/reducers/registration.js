import HOR from "../HOR";
import { ActionTypes } from "../utils/actionCreator";

const { pipeHigherOrderReducers, withLoadable, withResetState } = HOR;
export const REG_ACTION_TYPES = new ActionTypes("REG").addAT().getActionTypes();

const initialState = {};

const stateHandler = (state, params) => ({ ...state, ...params });
const handleAction = {
    [REG_ACTION_TYPES.POST.SUCCESS]: stateHandler,
};

const reducer = (state = initialState, action) =>
    handleAction[action.type] ? handleAction[action.type](state, action.payload) : state;

export default pipeHigherOrderReducers(
    withResetState(REG_ACTION_TYPES.RESET_STATE, initialState),
    withLoadable({
        isLoadingActionType: [REG_ACTION_TYPES.POST.START],
        successActionType: [REG_ACTION_TYPES.POST.SUCCESS],
        errorActionType: [REG_ACTION_TYPES.POST.ERROR],
    })
)(reducer);
