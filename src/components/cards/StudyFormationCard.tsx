import React, { Fragment } from "react"

import { makeStyles } from "@material-ui/core/styles"
import { Card, CardContent, Typography } from "@material-ui/core"

type Study = {
	course_name: String
	course_official_title: String
	topic: String
	year_s: String
}

type Props = {
	study: Study
}

const useStyles = makeStyles({
	root: {
		width: "100%",
	},
	pos: {
		marginBottom: 12,
	},
	title: {
		marginBottom: 25,
		fontSize: "1rem",
		lineHeight: "1.4",
	},
	paragraph: {
		marginTop: 20,
	},
})

const StudyFormationCard = (props: Props) => {
	const classes = useStyles()

	return (
		<Fragment>
			<Card className={classes.root}>
				<CardContent>
					<Typography variant="h6" gutterBottom className={classes.title}>
						{props.study.course_name}
					</Typography>
					{props.study.course_official_title && (
						<Fragment>
							<Typography variant="body2" component="p">
								Nombre de la Titulación:{" "}
							</Typography>
							<Typography
								component="span"
								color="textSecondary"
								className={classes.paragraph}
							>
								{props.study.course_official_title}
							</Typography>
						</Fragment>
					)}
					{props.study.topic && (
						<Fragment>
							<Typography variant="body2" component="p" className={classes.paragraph}>
								Disciplina académica:{" "}
								<Typography
									component="span"
									className={classes.pos}
									color="textSecondary"
								>
									{props.study.topic}
								</Typography>
							</Typography>
						</Fragment>
					)}
					{props.study.year_s && (
						<Fragment>
							<Typography variant="body2" component="p" className={classes.paragraph}>
								Fechas de estudios o fecha de graduación prevista:{" "}
							</Typography>
							<Typography component="span" color="textSecondary">
								{props.study.year_s}
							</Typography>
						</Fragment>
					)}
				</CardContent>
			</Card>
		</Fragment>
	)
}

export default StudyFormationCard
