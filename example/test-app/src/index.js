import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ldRedux from "ld-redux";
import myApp from "./rootReducer";
import registerServiceWorker from "./registerServiceWorker";
import { ldrComponentConfig } from "ld-redux-components";

const store = createStore(
  myApp,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ldRedux.init({
  clientSideId: "YOUR_CLIENT_SIDE_ID", //SET THIS TO SEE THE EXAMPLE
  store,
  flags: { "test-flag-id": true } //SET THIS TO A REAL FLAG ID TO SEE AN EXAMPLE
});

ldrComponentConfig.init({
  reduxKey: "LD" //This value will be the key in your redux store where you flags are
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
