import React, { Fragment } from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import CssBaseline from "@material-ui/core/CssBaseline"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import Fab from "@material-ui/core/Fab"
import MenuIcon from "@material-ui/icons/Menu"
import HomeIcon from "@material-ui/icons/Home"
import MoreIcon from "@material-ui/icons/MoreVert"

import NavbarLeftMenu from "../menus/NavbarLeftMenu"

import { useDispatch } from "react-redux"
import { openDrawer } from "../../redux/actions/drawerActions"

const useStyles = makeStyles(() =>
	createStyles({
		appBar: {
			top: "auto",
			bottom: 0,
		},
		grow: {
			flexGrow: 1,
		},
		fabButton: {
			position: "absolute",
			zIndex: 1,
			top: -30,
			left: 0,
			right: 0,
			margin: "0 auto",
		},
	}),
)

export default function LandingSm() {
	const classes = useStyles()

	const dispatch = useDispatch()

	return (
		<Fragment>
			<CssBaseline />
			<AppBar position="fixed" color="primary" className={classes.appBar}>
				<Toolbar>
					<NavbarLeftMenu>
						<MoreIcon />
					</NavbarLeftMenu>
					<Fab
						color="secondary"
						aria-label="add"
						className={classes.fabButton}
						onClick={() =>
							window.scrollTo({
								top: 0,
								behavior: "smooth",
							})
						}
					>
						<HomeIcon />
					</Fab>
					<div className={classes.grow} />
					<IconButton onClick={() => dispatch(openDrawer())} edge="end" color="inherit">
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</Fragment>
	)
}
