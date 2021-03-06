import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux";
import { Provider } from "react-redux"; //Component that will wrap the root component, passs Store to that provider so it can be used in the app
import rootReducer from "./reducers/rootReducer";

require("dotenv").config();
window.scrollTo(0, 1);
//const store = createStore(rootReducer);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
