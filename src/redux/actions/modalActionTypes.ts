export const OPEN_INFO_MODAL = "OPEN_INFO_MODAL"
export const OPEN_FORM_MODAL = "OPEN_FORM_MODAL"
export const CLOSE_INFO_MODAL = "CLOSE_INFO_MODAL"
export const CLOSE_FORM_MODAL = "CLOSE_FORM_MODAL"

export type Service = {
	title: string
	sub_title: string
	summary?: string
	list: string[]
	description?: string
	regulatory_frame: string
}

export interface OpenInfoModalI {
	type: typeof OPEN_INFO_MODAL
	payload: {
		open: boolean
		service: Service
	}
}

export interface OpenFormModalI {
	type: typeof OPEN_FORM_MODAL
	payload: boolean
}

export interface CloseInfoModalI {
	type: typeof CLOSE_INFO_MODAL
	payload: {
		open: boolean
		service?: Service
	}
}

export interface CloseFormModalI {
	type: typeof CLOSE_FORM_MODAL
	payload: boolean
}

export type ModalDispatchTypes = OpenInfoModalI | OpenFormModalI | CloseInfoModalI | CloseFormModalI
