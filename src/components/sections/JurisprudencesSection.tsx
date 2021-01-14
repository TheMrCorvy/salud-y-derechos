import React, { Fragment, useEffect, useState } from "react"

import { Grid, Typography, Hidden } from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/core/styles"

import { jurisprudences as jurisprudencesJson } from "../../static-data/jurisprudences.json"

import JurisprudenceCard from "../cards/JurisprudenceCard"
import PartnerCard from "../cards/PartnerCard"
import SkeletonCard1 from "../cards/SkeletonCard1"
import SkeletonCard4 from "../cards/SkeletonCard4"

type Jurisprudence = {
	title: string
	sub_title: string
	affected_parts: string
	court: string
	short_summary: string
	complete_summary: string
}

const useStyles = makeStyles(() =>
	createStyles({
		cardTitle: {
			textAlign: "center",
		},
		aboutContainer: {
			paddingTop: "5rem",
		},
		button: {
			marginTop: 50,
			marginBottom: 50,
			float: "right",
		},
		link: {
			textDecoration: "none",
		},
	}),
)

const JurisprudencesSection = () => {
	const classes = useStyles()

	const [jurisprudences, setTrials] = useState<Jurisprudence[]>([])
	const [partner, setPartner] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setTrials(jurisprudencesJson)
			setPartner(true)
		}, 6000)
	}, [])

	return (
		<Fragment>
			<Grid container justify="center" spacing={4} className={classes.aboutContainer}>
				<Grid item xs={12} className={classes.cardTitle}>
					<Typography variant="h4" gutterBottom>
						Jurisprudencias
					</Typography>
				</Grid>

				<Hidden mdUp>
					{partner ? (
						<Grid item xs={12} sm={8}>
							<PartnerCard />
						</Grid>
					) : (
						<Grid item xs={12} sm={6} xl={4}>
							<SkeletonCard1 />
						</Grid>
					)}
				</Hidden>

				{jurisprudences.length ? (
					<Grid item xs={12} sm={8}>
						<Grid container spacing={4}>
							{jurisprudences.map((jurisprudence: Jurisprudence, index: number) => (
								<JurisprudenceCard key={index} jurisprudence={jurisprudence} />
							))}
						</Grid>
					</Grid>
				) : (
					<Grid item xs={12} md={6} xl={4}>
						<SkeletonCard4 />
					</Grid>
				)}

				<Hidden smDown>
					{partner ? (
						<Grid item xs={12} sm={4}>
							<PartnerCard />
						</Grid>
					) : (
						<Grid item xs={12} sm={6} xl={4}>
							<SkeletonCard1 />
						</Grid>
					)}
				</Hidden>
			</Grid>
		</Fragment>
	)
}

export default JurisprudencesSection
