import React, { Fragment, lazy } from "react"

import { useSelector } from "react-redux"
import { RootStore } from "../redux/store"

import { Hidden } from "@material-ui/core"

const LandingLg = lazy(() => import("./navbars/LandingLg"))
const LandingSm = lazy(() => import("./navbars/LandingSm"))
const GenericLg = lazy(() => import("./navbars/GenericLg"))
const GenericSm = lazy(() => import("./navbars/GenericSm"))

export default function AppNavbar() {
	const genericNavbar = useSelector((state: RootStore) => state.navbar.isGenericNavbar)

	if (genericNavbar) {
		return (
			<Fragment>
				<Hidden smDown>
					<GenericLg />
				</Hidden>

				<Hidden mdUp>
					<GenericSm />
				</Hidden>
			</Fragment>
		)
	} else {
		return (
			<Fragment>
				<Hidden smDown>
					<LandingLg />
				</Hidden>

				<Hidden mdUp>
					<LandingSm />
				</Hidden>
			</Fragment>
		)
	}
}
