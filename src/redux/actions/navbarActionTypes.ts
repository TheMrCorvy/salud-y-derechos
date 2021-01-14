export const IS_GENERIC_NAVBAR = "IS_GENERIC_NAVBAR"
export const NOT_GENERIC_NAVBAR = "NOT_GENERIC_NAVBAR"

export interface IsGenericNavbarI {
	type: typeof IS_GENERIC_NAVBAR
}
export interface NotGenericNavbarI {
	type: typeof NOT_GENERIC_NAVBAR
}

export type NavbarDispatchTypes = IsGenericNavbarI | NotGenericNavbarI
