import {
	NavbarDispatchTypes,
	IS_GENERIC_NAVBAR,
	NOT_GENERIC_NAVBAR,
} from "../actions/navbarActionTypes"

interface InitialStateI {
	isGenericNavbar: boolean
}

const initialState: InitialStateI = {
	isGenericNavbar: false,
}

const navbarReducer = (
	state: InitialStateI = initialState,
	action: NavbarDispatchTypes,
): InitialStateI => {
	switch (action.type) {
		case IS_GENERIC_NAVBAR:
			return {
				isGenericNavbar: true,
			}
		case NOT_GENERIC_NAVBAR:
			return {
				isGenericNavbar: false,
			}
		default:
			return { ...state }
	}
}

export default navbarReducer
