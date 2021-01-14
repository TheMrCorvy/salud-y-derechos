import React, { Fragment, useRef, useState, useEffect, ReactElement } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
	Button,
	MenuItem,
	Popper,
	Grow,
	Paper,
	ClickAwayListener,
	MenuList,
	Divider,
} from "@material-ui/core"

import { Link } from "react-scroll"

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"

const useStyles = makeStyles(() => ({
	menuItem: {
		paddingTop: 15,
		paddingBottom: 15,
	},
}))

interface Props {
	children: ReactElement
}

const NavbarLeftMenu = (props: Props) => {
	const classes = useStyles()

	const anchorRef = useRef<HTMLButtonElement>(null)

	const [open, setOpen] = useState(false)

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen)
	}

	const handleClose = (event: React.MouseEvent<EventTarget>) => {
		if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
			return
		}

		setOpen(false)
	}

	const prevOpen = useRef(open)

	useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current!.focus()
		}

		prevOpen.current = open
	}, [open])

	return (
		<Fragment>
			<Button
				ref={anchorRef}
				aria-controls={open ? "navbar-sections-menu" : undefined}
				aria-haspopup="true"
				onClick={handleToggle}
				endIcon={<KeyboardArrowDownIcon />}
				color="inherit"
			>
				{props.children}
			</Button>

			<Popper
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				transition
				disablePortal
			>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin:
								placement === "bottom" ? "center top" : "center bottom",
						}}
					>
						<Paper>
							<ClickAwayListener onClickAway={handleClose}>
								<MenuList autoFocusItem={open} id="navbar-sections-menu">
									<Link to="contact-section" smooth>
										<MenuItem
											className={classes.menuItem}
											onClick={handleClose}
										>
											Info. de Contacto
										</MenuItem>
									</Link>
									<Divider />
									<Link to="services" smooth>
										<MenuItem
											className={classes.menuItem}
											onClick={handleClose}
										>
											Nuestros Servicios
										</MenuItem>
									</Link>
									<Divider />
									<Link to="documentation" smooth>
										<MenuItem
											className={classes.menuItem}
											onClick={handleClose}
										>
											Documentación Básica
										</MenuItem>
									</Link>
									<Divider />
									<Link to="about-us" smooth>
										<MenuItem
											className={classes.menuItem}
											onClick={handleClose}
										>
											Conócenos
										</MenuItem>
									</Link>
									<Divider />
									<Link to="jurisprudences" smooth>
										<MenuItem
											className={classes.menuItem}
											onClick={handleClose}
										>
											Jurisprudencias
										</MenuItem>
									</Link>
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</Fragment>
	)
}
export default NavbarLeftMenu
