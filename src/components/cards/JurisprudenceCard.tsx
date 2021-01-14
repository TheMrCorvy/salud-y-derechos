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
	jurisprudence: {
		title: string
		sub_title: string
		affected_parts: string
		court: string
		short_summary: string
		complete_summary: string
	}
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: "100%",
		},
		paragraph: {
			marginBottom: 20,
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

const JurisprudenceCard = (props: Props) => {
	const classes = useStyles()

	const [expanded, setExpanded] = useState(false)

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	return (
		<Grid item xs={12}>
			<Card className={classes.root}>
				<CardHeader title={props.jurisprudence.title} />

				<CardActionArea onClick={handleExpandClick}>
					<CardContent>
						<Typography variant="body2" color="textSecondary" component="p">
							{`${props.jurisprudence.short_summary} (...)`}
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
								{props.jurisprudence.title}
							</Typography>

							{props.jurisprudence.sub_title && (
								<Typography
									className={classes.paragraph}
									variant="subtitle1"
									gutterBottom
								>
									{props.jurisprudence.sub_title}
								</Typography>
							)}

							{props.jurisprudence.affected_parts && (
								<Typography
									className={classes.paragraph}
									variant="body2"
									gutterBottom
								>
									{props.jurisprudence.affected_parts}
								</Typography>
							)}

							{props.jurisprudence.court && (
								<Typography
									className={classes.paragraph}
									variant="button"
									display="block"
									gutterBottom
								>
									{props.jurisprudence.court}
								</Typography>
							)}

							<Typography className={classes.paragraph} variant="body2" paragraph>
								{props.jurisprudence.complete_summary}
							</Typography>
						</CardContent>
					</Collapse>
				</CardActionArea>
			</Card>
		</Grid>
	)
}

export default JurisprudenceCard
