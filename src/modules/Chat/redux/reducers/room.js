import { ActionTypes } from '../../../../redux/utils/actionCreator';

export const ROOM_ACTION_TYPES = new ActionTypes('ROOM').listAT().getActionTypes();

const initialState = {};

const stateHandler = (state, params) => ({ ...state, ...params });
const handleAction = {
  [ROOM_ACTION_TYPES.GET.SUCCESS]: stateHandler,
  [ROOM_ACTION_TYPES.RESET_STATE]: () => initialState
};

const reducer = (state = initialState, action) =>
  handleAction[action.type] ? handleAction[action.type](state, action.payload) : state;

export default reducer;
