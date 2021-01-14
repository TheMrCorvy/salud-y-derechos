import React, { Fragment } from "react"
import { Container, Typography, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
	title: {
		paddingBottom: 20,
	},
	textContainer: {
		textAlign: "center",
	},
	sectionContainer: {
		backgroundColor: "#f5f5f5",
		marginTop: "5rem",
		paddingTop: 30,
		paddingBottom: 30,
		borderRadius: 10,
	},
	listBullet: {
		marginBottom: 10,
	},
})

export default function DocumentationSection() {
	const classes = useStyles()

	return (
		<Fragment>
			<Container maxWidth="xl" className={classes.sectionContainer}>
				<Grid container justify="center">
					<Grid item xs={12} className={classes.textContainer}>
						<Typography variant="h4" gutterBottom className={classes.title}>
							La documentación básica para iniciar un amparo
						</Typography>
					</Grid>
					<Grid item xs={12} sm={6}>
						<ul>
							<li className={classes.listBullet}>
								Fotocopia del D.N.I del titular de la prestación.
							</li>
							<li className={classes.listBullet}>
								Carné de afiliación a obra social o prepaga.
							</li>
							<li className={classes.listBullet}>
								Orden médica que indique el tratamiento/prestación a solicitar.
							</li>
							<li className={classes.listBullet}>Diagnostico Médico.</li>
							<li className={classes.listBullet}>Historia Clínica.</li>
							<li className={classes.listBullet}>
								Certificado de discapacidad, en caso de tenerlo.
							</li>
							<li className={classes.listBullet}>Poder especial Judicial.</li>
						</ul>
					</Grid>
				</Grid>
			</Container>
		</Fragment>
	)
}
