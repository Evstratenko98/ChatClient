export const pipeHigherOrderReducers = (...higherOrderReducers) => (baseReducer) =>
  higherOrderReducers.reduce(
    (reducer, nextHigherOrderReducer) => nextHigherOrderReducer(reducer),
    baseReducer
  );
