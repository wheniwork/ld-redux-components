import { combineReducers } from "redux";
import ldRedux from "ld-redux";

const myApp = combineReducers({
  LD: ldRedux.reducer()
});

export default myApp;
