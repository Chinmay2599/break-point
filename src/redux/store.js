import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import userReducer from "./user/userReducer";
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)

export default store