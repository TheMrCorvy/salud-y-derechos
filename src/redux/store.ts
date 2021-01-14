import { applyMiddleware, createStore } from "redux"
import RootReducers from "./rootReducers"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

const store = createStore(RootReducers, composeWithDevTools(applyMiddleware(thunk)))

export type RootStore = ReturnType<typeof RootReducers>

export default store
