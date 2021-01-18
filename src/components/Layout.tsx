import React, { ReactElement } from "react"

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"

import { Container, Fab, CssBaseline } from "@material-ui/core"

import AppNavbar from "./AppNavbar"
import ScrollTop from "./ScrollTop"
import FormModalComponent from "./modals/FormModalComponent"
import InfoModalComponent from "./modals/InfoModalComponent"
import Footer from "./sections/Footer"

import Drawer from "../components/navbars/Drawer"

/**
 * Layout of the app
 * @alias Layout
 */
interface Props {
	/**
	 * the children components that will go inside the layout
	 */
	children: ReactElement
}

export default function Layout(props: Props) {
	return (
		<React.Fragment>
			<CssBaseline />

			<AppNavbar />

			<Container>
				<div id="back-to-top-anchor">{props.children}</div>
			</Container>

			<Footer />

			<ScrollTop {...props}>
				<Fab color="secondary" size="small" aria-label="Volver Arriba">
					<KeyboardArrowUpIcon />
				</Fab>
			</ScrollTop>

			<FormModalComponent />
			<InfoModalComponent />
			<Drawer />
		</React.Fragment>
	)
}
