import React, { useState } from "react"

import {
	Grid,
	Typography,
	Card,
	CardContent,
	CardActions,
	CardHeader,
	Collapse,
	CardActionArea,
} from "@material-ui/core"

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import clsx from "clsx"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

type Props = {
	title: string
	short_summary: string
	complete_summary: string
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: "100%",
		},

		expand: {
			transform: "rotate(0deg)",
			marginLeft: "auto",
			transition: theme.transitions.create("transform", {
				duration: theme.transitions.duration.shortest,
			}),
		},
		expandOpen: {
			transform: "rotate(180deg)",
		},
	}),
)

const TrialCard = (props: Props) => {
	const classes = useStyles()

	const [expanded, setExpanded] = useState(false)

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	return (
		<Grid item xs={12} md={6}>
			<Card className={classes.root}>
				<CardHeader title={props.title} />

				<CardActionArea onClick={handleExpandClick}>
					<CardContent>
						<Typography variant="body2" color="textSecondary" component="p">
							{`"${props.short_summary} (...)`}
						</Typography>
					</CardContent>
					<CardActions disableSpacing>
						<div
							className={clsx(classes.expand, {
								[classes.expandOpen]: expanded,
							})}
						>
							<ExpandMoreIcon color="primary" />
						</div>
					</CardActions>

					<Collapse in={expanded} timeout="auto" unmountOnExit>
						<CardContent>
							<Typography variant="h6" gutterBottom style={{ marginBottom: 25 }}>
								{props.title}
							</Typography>

							<Typography paragraph>"{props.complete_summary}"</Typography>
						</CardContent>
					</Collapse>
				</CardActionArea>
			</Card>
		</Grid>
	)
}

export default TrialCard
