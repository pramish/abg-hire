import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/rootReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  RootReducer,
});

const configureStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default configureStore;
