import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import testReducer from "./test/test.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  test: testReducer,
});
