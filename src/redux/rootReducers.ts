import { combineReducers } from "redux"
import drawerReducer from "./reducers/drawerReducer"
import modalReducer from "./reducers/modalReducer"
import navbarReducer from "./reducers/navbarReducer"

const RootReducers = combineReducers({
	modal: modalReducer,
	drawer: drawerReducer,
	navbar: navbarReducer,
})

export default RootReducers
