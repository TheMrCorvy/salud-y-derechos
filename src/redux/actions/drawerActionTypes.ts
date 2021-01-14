export const OPEN_DRAWER = "OPEN_DRAWER"
export const CLOSE_DRAWER = "CLOSE_DRAWER"

export interface OpenDrawer {
	type: typeof OPEN_DRAWER
}
export interface CloseDrawer {
	type: typeof CLOSE_DRAWER
}

export type DrawerDispatchTypes = OpenDrawer | CloseDrawer
