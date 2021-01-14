import { Dispatch } from "redux"
import {
	ModalDispatchTypes,
	OPEN_INFO_MODAL,
	OPEN_FORM_MODAL,
	CLOSE_INFO_MODAL,
	CLOSE_FORM_MODAL,
	Service,
} from "./modalActionTypes"

export const openInfoModal = (service: Service) => (dispatch: Dispatch<ModalDispatchTypes>) => {
	dispatch({
		type: OPEN_INFO_MODAL,
		payload: {
			open: true,
			service: service,
		},
	})
}

export const openFormModal = () => (dispatch: Dispatch<ModalDispatchTypes>) => {
	dispatch({
		type: OPEN_FORM_MODAL,
		payload: true,
	})
}

export const closeInfoModal = (service?: Service) => (dispatch: Dispatch<ModalDispatchTypes>) => {
	dispatch({
		type: CLOSE_INFO_MODAL,
		payload: {
			open: false,
			service: service,
		},
	})
}

export const closeFormModal = () => (dispatch: Dispatch<ModalDispatchTypes>) => {
	dispatch({
		type: CLOSE_FORM_MODAL,
		payload: false,
	})
}
