import React from "react";
import ReactDOM from "react-dom";

// Redux
import {createStore} from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

// App
import App from "./components/App";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
