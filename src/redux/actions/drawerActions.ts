import { Dispatch } from "redux"
import { DrawerDispatchTypes, OPEN_DRAWER, CLOSE_DRAWER } from "./drawerActionTypes"

export const openDrawer = () => (dispatch: Dispatch<DrawerDispatchTypes>) => {
	dispatch({
		type: OPEN_DRAWER,
	})
}

export const closeDrawer = () => (dispatch: Dispatch<DrawerDispatchTypes>) => {
	dispatch({
		type: CLOSE_DRAWER,
	})
}
