import {
	ModalDispatchTypes,
	CLOSE_FORM_MODAL,
	CLOSE_INFO_MODAL,
	OPEN_FORM_MODAL,
	OPEN_INFO_MODAL,
	Service,
} from "../actions/modalActionTypes"

interface InitialStateI {
	infoModalOpen: {
		open: boolean
		service?: Service
	}
	formModalOpen: boolean
}

const initialState: InitialStateI = {
	infoModalOpen: {
		open: false,
		service: {
			title: "",
			sub_title: "",
			summary: "",
			list: [""],
			description: "",
			regulatory_frame: "",
		},
	},
	formModalOpen: false,
}

const modalReducer = (
	state: InitialStateI = initialState,
	action: ModalDispatchTypes,
): InitialStateI => {
	switch (action.type) {
		case CLOSE_FORM_MODAL:
			return {
				...state,
				formModalOpen: false,
			}
		case CLOSE_INFO_MODAL:
			return {
				...state,
				infoModalOpen: {
					open: false,
					service: action.payload.service,
				},
			}
		case OPEN_FORM_MODAL:
			return {
				...state,
				formModalOpen: true,
			}
		case OPEN_INFO_MODAL:
			return {
				...state,
				infoModalOpen: {
					open: true,
					service: action.payload.service,
				},
			}

		default:
			return { ...state }
	}
}

export default modalReducer
