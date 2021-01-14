import React, { Fragment } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, Button, IconButton, Tooltip } from "@material-ui/core"

import NavbarRightMenu from "../menus/NavbarRightMenu"

import ContactMailIcon from "@material-ui/icons/ContactMail"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

import { Link } from "react-router-dom"

import { useDispatch } from "react-redux"
import { openFormModal } from "../../redux/actions/modalActions"
import { backToHome } from "../../redux/actions/navbarActions"

const useStyles = makeStyles(() => ({
	leftSideNavbar: {
		flexGrow: 1,
		textDecoration: "none",
	},
	rightMiddleButton: {
		marginLeft: 30,
		marginRight: 20,
	},
	appbar: {
		paddingRight: 40,
		paddingLeft: 40,
	},
	button: {
		color: "white",
		textDecoration: "none",
	},
}))

export default function LandingLg() {
	const dispatch = useDispatch()

	const classes = useStyles()

	return (
		<Fragment>
			<AppBar position="fixed" color="secondary">
				<Toolbar>
					<Link
						to="/salud-y-derechos"
						className={classes.leftSideNavbar}
						onClick={() => dispatch(backToHome())}
					>
						<Button color="inherit" className={classes.button}>
							Volver a la Página Principal
						</Button>
					</Link>
					<NavbarRightMenu />
					<Button
						aria-controls="inherit"
						aria-haspopup="false"
						startIcon={<ContactMailIcon />}
						color="inherit"
						className={classes.rightMiddleButton}
						onClick={() => dispatch(openFormModal())}
					>
						Contacto
					</Button>
					<Tooltip title="Encuéntranos en Linkedin" placement="bottom">
						<IconButton
							color="inherit"
							component="a"
							href="https://ar.linkedin.com/in/juan-pablo-corvalan"
							target="_blank"
						>
							<LinkedInIcon />
						</IconButton>
					</Tooltip>
				</Toolbar>
			</AppBar>
		</Fragment>
	)
}
