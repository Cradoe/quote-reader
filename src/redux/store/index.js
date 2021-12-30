import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { rootReducer } from "../reducers/";
import { persistStore } from 'redux-persist';

export const store = createStore(
  rootReducer,
  composeWithDevTools( applyMiddleware( thunkMiddleware ) )
);

export const persistor = persistStore( store );