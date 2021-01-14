import { Dispatch } from "redux"
import { NavbarDispatchTypes, IS_GENERIC_NAVBAR, NOT_GENERIC_NAVBAR } from "./navbarActionTypes"

export const goToSecondPage = () => (dispatch: Dispatch<NavbarDispatchTypes>) => {
	dispatch({
		type: IS_GENERIC_NAVBAR,
	})
}

export const backToHome = () => (dispatch: Dispatch<NavbarDispatchTypes>) => {
	dispatch({
		type: NOT_GENERIC_NAVBAR,
	})
}
