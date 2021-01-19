import TestActionTypes from "./test.types";
export const increaseValue = () => ({
  type: TestActionTypes.INCREASE_VALUE,
});

export const decreaseValue = () => ({
  type: TestActionTypes.DECREASE_VALUE,
});
