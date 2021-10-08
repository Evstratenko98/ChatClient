import HOR from '../../../../redux/HOR';
import { ActionTypes } from '../../../../redux/utils/actionCreator';

const { pipeHigherOrderReducers, withLoadable, withResetState } = HOR;
export const ROOMS_ACTION_TYPES = new ActionTypes('ROOMS').listAT().getActionTypes();

const initialState = {
  rooms: []
};

const stateHandler = (state, params) => ({ ...state, ...params });
const handleAction = {
  [ROOMS_ACTION_TYPES.GET.SUCCESS]: stateHandler
};

const reducer = (state = initialState, action) =>
  handleAction[action.type] ? handleAction[action.type](state, action.payload) : state;

export default pipeHigherOrderReducers(
  withResetState(ROOMS_ACTION_TYPES.RESET_STATE, initialState),
  withLoadable({
    isLoadingActionType: [ROOMS_ACTION_TYPES.GET.START],
    successActionType: [ROOMS_ACTION_TYPES.GET.SUCCESS],
    errorActionType: [ROOMS_ACTION_TYPES.GET.ERROR]
  })
)(reducer);
