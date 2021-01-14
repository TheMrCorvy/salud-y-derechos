import React, { Fragment, useEffect, useState } from "react"

import { Grid, Typography, Button } from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/core/styles"

import { trials as trialsJson } from "../../static-data/trials.json"

import TrialCard from "../cards/TrialCard"
import PartnerCard from "../cards/PartnerCard"
import SkeletonCard1 from "../cards/SkeletonCard1"
import SkeletonCard3 from "../cards/SkeletonCard3"

import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { goToSecondPage } from "../../redux/actions/navbarActions"

type Trial = {
	title: string
	short_summary: string
	complete_summary: string
}

type Props = {
	title: String
	showLink: Boolean
}

const useStyles = makeStyles(() =>
	createStyles({
		cardTitle: {
			textAlign: "center",
		},
		aboutContainer: {
			paddingTop: "5rem",
		},
		link: {
			textDecoration: "none",
		},
		button: {
			borderColor: "#25D366",
			color: "#25D366",
			marginTop: 50,
			marginBottom: 50,
			"&:hover": {
				borderColor: "#25D366",
			},
		},
	}),
)

const AboutSection = (props: Props) => {
	const classes = useStyles()

	const dispatch = useDispatch()

	const [trials, setTrials] = useState<Trial[]>([])
	const [partner, setPartner] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setTrials(trialsJson)
			setPartner(true)
		}, 6000)
	}, [])

	return (
		<Fragment>
			<Grid container justify="center" spacing={4} className={classes.aboutContainer}>
				<Grid item xs={12} className={classes.cardTitle}>
					<Typography variant="h4" gutterBottom>
						{props.title}
					</Typography>
				</Grid>

				{partner ? (
					<Grid item xs={12} sm={4}>
						<PartnerCard />
						{props.showLink && (
							<Link
								to="/conocenos"
								onClick={() => dispatch(goToSecondPage())}
								className={classes.link}
							>
								<Button
									variant="outlined"
									color="primary"
									className={classes.button}
									size="large"
								>
									formación profesional complementaria
								</Button>
							</Link>
						)}
					</Grid>
				) : (
					<Grid item xs={12} sm={6} xl={4}>
						<SkeletonCard1 />
					</Grid>
				)}

				{trials.length ? (
					<Grid item xs={12} sm={8}>
						<Grid container spacing={4}>
							{trials.map((trial: Trial, index: number) => (
								<TrialCard
									title={trial.title}
									short_summary={trial.short_summary}
									complete_summary={trial.complete_summary}
									key={index}
								/>
							))}
						</Grid>
					</Grid>
				) : (
					<Grid item xs={12} md={6} xl={4}>
						<SkeletonCard3 />
					</Grid>
				)}
			</Grid>
		</Fragment>
	)
}

export default AboutSection
