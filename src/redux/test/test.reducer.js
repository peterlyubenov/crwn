import TestActionTypes from "./test.types";

const INITIAL_STATE = {
  testValue: 69,
  increment: 3,
  min: 0,
  max: 420,
};

const applyIncrement = (value, increment, min, max) => {
  value += increment;

  if (value < min) return min;
  if (value > max) return max;

  return value;
};

const testReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TestActionTypes.INCREASE_VALUE:
      const value = applyIncrement(
        state.testValue,
        state.increment,
        state.min,
        state.max
      );

      return { ...state, testValue: value };
    case TestActionTypes.DECREASE_VALUE:
      return {
        ...state,
        testValue: applyIncrement(
          state.testValue,
          -state.increment,
          state.min,
          state.max
        ),
      };
    default:
      return state;
  }
};

export default testReducer;
