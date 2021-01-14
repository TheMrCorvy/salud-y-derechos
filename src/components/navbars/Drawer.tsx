import React from "react"

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

export default function SwipeableTemporaryDrawer() {
	const dispatch = useDispatch()

	const open = useSelector((state: RootStore) => state.drawer.open)

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
				</List>
			</div>
		</SwipeableDrawer>
	)
}
