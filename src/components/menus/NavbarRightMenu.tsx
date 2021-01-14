import React, { Fragment, useRef, useState, useEffect } from "react"
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
	Link,
} from "@material-ui/core"

import ShareIcon from "@material-ui/icons/Share"
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import WhatsAppIcon from "@material-ui/icons/WhatsApp"
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown"

import { lightBlue, indigo } from "@material-ui/core/colors"

const useStyles = makeStyles(() => ({
	icon: {
		marginRight: 15,
	},
	twitter: {
		opacity: "0.8",
		"&:hover": {
			color: lightBlue[500],
			opacity: 1,
		},
	},
	facebook: {
		opacity: "0.8",
		"&:hover": {
			color: indigo[500],
			opacity: 1,
		},
	},
	whatsapp: {
		opacity: "0.8",
		"&:hover": {
			color: "#25D366",
			opacity: 1,
		},
	},
}))

export default function NavbarRightMenu() {
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
				aria-controls={open ? "share-menu" : undefined}
				aria-haspopup="true"
				onClick={handleToggle}
				startIcon={<ShareIcon />}
				endIcon={<KeyboardArrowDownIcon />}
				color="inherit"
			>
				compartir
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
								<MenuList autoFocusItem={open} id="share-menu">
									<MenuItem
										className={classes.facebook}
										onClick={handleClose}
										style={{
											paddingTop: 15,
											paddingBottom: 15,
										}}
									>
										<FacebookIcon className={classes.icon} />
										<Link
											color="inherit"
											href={
												"https://www.facebook.com/sharer/sharer.php?u=" +
												"https://themrcorvy.github.io/salud-y-derechos"
											}
											target="_blank"
											rel="noreferrer"
											className={classes.facebook}
										>
											Facebook
										</Link>
									</MenuItem>
									<Divider />
									<MenuItem
										className={classes.twitter}
										onClick={handleClose}
										style={{
											paddingTop: 15,
											paddingBottom: 15,
										}}
									>
										<TwitterIcon className={classes.icon} />
										<Link
											color="inherit"
											href={
												"https://twitter.com/intent/tweet?text=Página%20web%20de%20Salud%20y%20derechos%20&amp;url=" +
												"https://themrcorvy.github.io/salud-y-derechos"
											}
											target="_blank"
											rel="noreferrer"
											className={classes.twitter}
										>
											Twitter
										</Link>
									</MenuItem>
									<Divider />
									<MenuItem
										className={classes.whatsapp}
										onClick={handleClose}
										style={{
											paddingTop: 15,
											paddingBottom: 15,
										}}
									>
										<WhatsAppIcon className={classes.icon} />
										<Link
											color="inherit"
											href={
												"https://api.whatsapp.com/send?text=Página%20web%20de%20Salud%20y%20Derechos%20&amp;" +
												"https://themrcorvy.github.io/salud-y-derechos"
											}
											target="_blank"
											rel="noreferrer"
											className={classes.whatsapp}
										>
											WhatsApp
										</Link>
									</MenuItem>
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</Fragment>
	)
}
