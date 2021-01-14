import React, { Fragment } from "react"

import {
	Card,
	CardActionArea,
	CardContent,
	Typography,
	Button,
	CardActions,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import { openInfoModal } from "../../redux/actions/modalActions"
import { useDispatch } from "react-redux"

type Service = {
	title: string
	sub_title: string
	summary?: string
	list: string[]
	description?: string
	regulatory_frame: string
}

type Props = {
	service: Service
}

const useStyles = makeStyles({
	cardAction: {
		display: "flex",
		justifyContent: "flex-start",
	},
	pos: {
		marginBottom: 12,
	},
})

export default function ServiceCard(props: Props) {
	const classes = useStyles()

	const dispatch = useDispatch()

	const handleClickOpen = (service: Service) => {
		dispatch(openInfoModal(service))
	}

	return (
		<Fragment>
			<Card>
				<CardActionArea onClick={() => handleClickOpen(props.service)}>
					<CardContent>
						<Typography gutterBottom variant="h6" component="h6">
							{props.service.title}
						</Typography>
						<Typography className={classes.pos}>{props.service.sub_title}</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{props.service.summary}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions className={classes.cardAction}>
					<Button onClick={() => handleClickOpen(props.service)} color="primary">
						Click aquí para ver información adicional
					</Button>
				</CardActions>
			</Card>
		</Fragment>
	)
}
