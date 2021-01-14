import { DrawerDispatchTypes, OPEN_DRAWER, CLOSE_DRAWER } from "../actions/drawerActionTypes"

interface InitialStateI {
	open: boolean
}

const initialState: InitialStateI = {
	open: false,
}

const drawerReducer = (
	state: InitialStateI = initialState,
	action: DrawerDispatchTypes,
): InitialStateI => {
	switch (action.type) {
		case OPEN_DRAWER:
			return {
				open: true,
			}
		case CLOSE_DRAWER:
			return {
				open: false,
			}
		default:
			return { ...state }
	}
}

export default drawerReducer
