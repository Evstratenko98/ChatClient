import HOR from "../HOR";
import { ActionTypes } from "../utils/actionCreator";

const { pipeHigherOrderReducers, withLoadable, withResetState } = HOR;
export const USER_ACTION_TYPES = new ActionTypes("USER").listAT().addAT().getActionTypes();

const initialState = {
    _id: "",
    username: "",
    password: "",
    age: "",
    gender: "",
    role: "user",
};

const stateHandler = (state, params) => ({ ...state, ...params });
const handleAction = {
    [USER_ACTION_TYPES.GET.SUCCESS]: stateHandler,
};

const reducer = (state = initialState, action) =>
    handleAction[action.type] ? handleAction[action.type](state, action.payload) : state;

export default pipeHigherOrderReducers(
    withResetState(USER_ACTION_TYPES.RESET_STATE, initialState),
    withLoadable({
        isLoadingActionType: [USER_ACTION_TYPES.GET.START],
        successActionType: [USER_ACTION_TYPES.GET.SUCCESS],
        errorActionType: [USER_ACTION_TYPES.GET.ERROR],
    })
)(reducer);
