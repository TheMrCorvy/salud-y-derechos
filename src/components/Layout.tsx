import React, { ReactElement } from "react"

import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"

import { Container, Fab, CssBaseline } from "@material-ui/core"

import AppNavbar from "./AppNavbar"
import ScrollTop from "./ScrollTop"
import FormModalComponent from "./modals/FormModalComponent"
import InfoModalComponent from "./modals/InfoModalComponent"
import Footer from "./sections/Footer"

import Drawer from "../components/navbars/Drawer"

interface Props {
	children: ReactElement
}
/**
 * In the Layout component is where the navbar, the footer, and the "backToTop" function are
 *
 * The AppNavbar component will bi decided dynamically based on the size of the screen, and the page that the user is visiting, that's why it is on it's own component
 * @param {Props} props for this component the props received are basically the children components
 * @returns {ReactElement}
 */
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
