import React, { Fragment, useEffect, useState } from "react"

import {
	ListItem,
	ListItemIcon,
	ListItemText,
	SwipeableDrawer,
	Divider,
	List,
} from "@material-ui/core"

import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import WhatsAppIcon from "@material-ui/icons/WhatsApp"
import ContactMailIcon from "@material-ui/icons/ContactMail"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

import { useSelector, useDispatch } from "react-redux"
import { RootStore } from "../../redux/store"
import { closeDrawer, openDrawer } from "../../redux/actions/drawerActions"
import { openFormModal } from "../../redux/actions/modalActions"

let deferredPrompt: any

export default function SwipeableTemporaryDrawer() {
	const dispatch = useDispatch()

	const open = useSelector((state: RootStore) => state.drawer.open)

	const [installable, setInstallable] = useState(false)

	useEffect(() => {
		window.addEventListener("beforeinstallprompt", (e: Event) => {
			// Prevent the mini-infobar from appearing on mobile
			e.preventDefault()
			// Stash the event so it can be triggered later.
			deferredPrompt = e
			// Update UI notify the user they can install the PWA
			setInstallable(true)
		})

		window.addEventListener("appinstalled", () => {
			// Log install to analytics
			console.log("INSTALL: Success")
		})
	}, [])

	const handleInstallClick = () => {
		// Hide the app provided install promotion
		setInstallable(false)
		// Show the install prompt
		deferredPrompt.prompt()
		// Wait for the user to respond to the prompt
		deferredPrompt.userChoice.then((choiceResult: any) => {
			if (choiceResult.outcome === "accepted") {
				console.log("User accepted the install prompt")
			} else {
				console.log("User dismissed the install prompt")
			}
		})
	}

	const contact = () => {
		dispatch(closeDrawer())
		dispatch(openFormModal())
	}

	return (
		<SwipeableDrawer
			anchor="right"
			open={open}
			onClose={() => dispatch(closeDrawer())}
			onOpen={() => dispatch(openDrawer())}
		>
			<div role="presentation">
				<List>
					<ListItem button onClick={contact}>
						<ListItemIcon>
							<ContactMailIcon />
						</ListItemIcon>
						<ListItemText primary="Contacto" />
					</ListItem>
					<Divider />
					<ListItem
						button
						component="a"
						href="https://ar.linkedin.com/in/juan-pablo-corvalan"
						target="_blank"
					>
						<ListItemIcon>
							<LinkedInIcon />
						</ListItemIcon>
						<ListItemText primary="Encuéntranos en Linkedin" />
					</ListItem>
					<Divider />
					<ListItem
						button
						component="a"
						href={
							"https://www.facebook.com/sharer/sharer.php?u=" +
							"https://themrcorvy.github.io/salud-y-derechos"
						}
						target="_blank"
					>
						<ListItemIcon>
							<FacebookIcon />
						</ListItemIcon>
						<ListItemText primary="Compartir en Facebook" />
					</ListItem>
					<Divider />
					<ListItem
						button
						component="a"
						href={
							"https://twitter.com/intent/tweet?text=Página%20web%20de%20Salud%20y%20derechos%20&amp;url=" +
							"https://themrcorvy.github.io/salud-y-derechos"
						}
						target="_blank"
					>
						<ListItemIcon>
							<TwitterIcon />
						</ListItemIcon>
						<ListItemText primary="Compartir en Twitter" />
					</ListItem>
					<Divider />
					<ListItem
						button
						component="a"
						href={
							"https://api.whatsapp.com/send?text=Página%20web%20de%20Salud%20y%20Derechos%20&amp;" +
							"https://themrcorvy.github.io/salud-y-derechos"
						}
						target="_blank"
					>
						<ListItemIcon>
							<WhatsAppIcon />
						</ListItemIcon>
						<ListItemText primary="Compartir en Whatsapp" />
					</ListItem>
					<Divider />
					{installable && (
						<Fragment>
							<ListItem button onClick={handleInstallClick}>
								<ListItemIcon>
									<WhatsAppIcon />
								</ListItemIcon>
								<ListItemText primary="Instalar App" />
							</ListItem>
							<Divider />
						</Fragment>
					)}
				</List>
			</div>
		</SwipeableDrawer>
	)
}
