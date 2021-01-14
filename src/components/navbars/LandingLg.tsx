import React, { Fragment } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Toolbar, Button, IconButton, Tooltip } from "@material-ui/core"

import NavbarLeftMenu from "../menus/NavbarLeftMenu"
import NavbarRightMenu from "../menus/NavbarRightMenu"

import ContactMailIcon from "@material-ui/icons/ContactMail"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import { useDispatch } from "react-redux"
import { openFormModal } from "../../redux/actions/modalActions"

const useStyles = makeStyles(() => ({
	navbarLeftSide: {
		flexGrow: 1,
	},
	rightMiddleButton: {
		marginLeft: 30,
		marginRight: 20,
	},
	appbar: {
		paddingRight: 40,
		paddingLeft: 40,
	},
}))

export default function LandingLg() {
	const dispatch = useDispatch()

	const classes = useStyles()

	const handleClick = () => {
		dispatch(openFormModal())
	}

	return (
		<Fragment>
			<AppBar position="fixed" color="secondary" className={classes.appbar}>
				<Toolbar>
					<div className={classes.navbarLeftSide}>
						<NavbarLeftMenu>
							<div>¿desea Recorrer el sitio? Click Aquí</div>
						</NavbarLeftMenu>
					</div>
					<NavbarRightMenu />
					<Button
						aria-controls="inherit"
						aria-haspopup="false"
						startIcon={<ContactMailIcon />}
						color="inherit"
						className={classes.rightMiddleButton}
						onClick={handleClick}
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
