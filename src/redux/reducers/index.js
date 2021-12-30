import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import { quoteReducer } from "./quote";
import { audioReducer } from "./audio";

const quotePersistConfig = {
  key: 'quotes',
  storage
};

const audioPersistConfig = {
  key: 'audio',
  storage
};


export const rootReducer = combineReducers( {
  quote: persistReducer( quotePersistConfig, quoteReducer ),
  audio: persistReducer( audioPersistConfig, audioReducer ),
} );
