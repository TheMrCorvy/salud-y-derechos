import { Fragment, useState, useEffect } from "react"
import { Container, Grid, Typography } from "@material-ui/core"
import PartnerCard from "../components/cards/PartnerCard"

import { makeStyles, createStyles } from "@material-ui/core/styles"

import SkeletonCard1 from "../components/cards/SkeletonCard1"
import SkeletonCard4 from "../components/cards/SkeletonCard4"

import { studies as studiesJson } from "../static-data/studies.json"
import StudyFormationCard from "../components/cards/StudyFormationCard"

import AboutSection from "../components/sections/AboutSection"

type Study = {
	course_name: String
	course_official_title: String
	topic: String
	year_s: String
}

const useStyles = makeStyles(() =>
	createStyles({
		container: {
			paddingTop: "7rem",
		},
		title: {
			textAlign: "center",
		},
		pos: {
			marginBottom: 12,
		},
	})
)

function AboutPage(): JSX.Element {
	const [partner, setPartner] = useState(false)
	const [studies, setStudies] = useState<Study[]>([])

	useEffect(() => {
		window.scrollTo(0, 0)
		setTimeout(() => {
			setPartner(true)
			setStudies(studiesJson)
		}, 2000)
	}, [])

	const classes = useStyles()
	return (
		<Fragment>
			<Container maxWidth="xl" className={classes.container}>
				<Grid container spacing={4} justify="space-around">
					<Grid item xs={12} className={classes.title}>
						<Typography variant="h4" gutterBottom>
							Formación Profesional Complementaria
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						{partner ? <PartnerCard /> : <SkeletonCard1 />}
					</Grid>
					<Grid item xs={12} sm={6} md={8}>
						<Grid container spacing={1}>
							{studies.length ? (
								studies.map((study, index) => (
									<Grid item xs={12} md={6} key={index}>
										<StudyFormationCard study={study} />
									</Grid>
								))
							) : (
								<Fragment>
									<Grid item xs={12} md={6}>
										<SkeletonCard4 />
									</Grid>
									<Grid item xs={12} md={6}>
										<SkeletonCard4 />
									</Grid>
								</Fragment>
							)}
						</Grid>
					</Grid>
					<Grid item xs={12}>
						<AboutSection showLink={false} title="Amparos y otros Logros" />
					</Grid>
				</Grid>
			</Container>
		</Fragment>
	)
}

export default AboutPage
