import React from "react"
import { createStyles, makeStyles } from "@material-ui/core/styles"
import { AppBar, CssBaseline, Toolbar, Fab, IconButton } from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import HomeIcon from "@material-ui/icons/Home"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"

import { Link } from "react-router-dom"

import { useDispatch } from "react-redux"
import { backToHome } from "../../redux/actions/navbarActions"
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

export default function GenericSm() {
	const classes = useStyles()

	const dispatch = useDispatch()

	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar position="fixed" color="primary" className={classes.appBar}>
				<Toolbar>
					<IconButton
						onClick={() =>
							window.scrollTo({
								top: 0,
								behavior: "smooth",
							})
						}
						edge="start"
						color="inherit"
						aria-label="open drawer"
					>
						<ExpandLessIcon />
					</IconButton>
					<Link
						to="/salud-y-derechos"
						style={{ color: "white" }}
						onClick={() => dispatch(backToHome())}
					>
						<Fab color="secondary" aria-label="add" className={classes.fabButton}>
							<HomeIcon />
						</Fab>
					</Link>
					<div className={classes.grow} />
					<IconButton edge="end" color="inherit" onClick={() => dispatch(openDrawer())}>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	)
}
