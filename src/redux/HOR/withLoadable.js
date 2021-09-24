export const isLoadingReducer = (state) => ({
  ...state,
  error: null,
  fieldsErrors: null,
  isLoading: true,
  success: null
});

export const successReducer = (state, action) => ({
  ...state,
  error: null,
  fieldsErrors: null,
  isLoading: false,
  success: action.payload && action.payload.success
});

export const errorReducer = (state, action) => ({
  ...state,
  error: action.payload.detail,
  fieldsErrors: action.payload.detail,
  isLoading: false,
  success: null
});

export const INITIAL_LOADABLE_STATE = {
  error: null,
  fieldsErrors: null,
  isLoading: false,
  success: null
};

export const resetReducer = (state) => ({
  ...state,
  ...INITIAL_LOADABLE_STATE
});

export const noopReducer = (state) => state;

export const withLoadable = (actionTypes) => {
  const actionReducerMap = {};

  actionTypes.isLoadingActionType.forEach((item) => {
    actionReducerMap[item] = isLoadingReducer;
  });

  actionTypes.successActionType.forEach((item) => {
    actionReducerMap[item] = successReducer;
  });

  actionTypes.errorActionType.forEach((item) => {
    actionReducerMap[item] = errorReducer;
  });

  return (baseReducer) => (state, action) => {
    const reducerFunction = actionReducerMap[action.type] || noopReducer;

    const newState = reducerFunction(state, action);

    return baseReducer(newState, action);
  };
};
