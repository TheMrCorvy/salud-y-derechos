import React from "react"
import { makeStyles } from "@material-ui/core/styles"

import { Grid, Typography, Button, CardContent, CardActions, Card } from "@material-ui/core"

import { useDispatch } from "react-redux"
import { openFormModal } from "../../redux/actions/modalActions"

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	contactContainer: {
		paddingTop: 50,
	},
	contactTitle: {
		marginBottom: 20,
		marginTop: 10,
		textAlign: "center",
	},
	liBullet: {
		paddingBottom: 20,
	},
	formButton: {
		paddingTop: 0,
		paddingBottom: 20,
		display: "flex",
		justifyContent: "center",
		textAlign: "center",
		flexDirection: "row",
	},
})

export default function ContactSection() {
	const dispatch = useDispatch()

	const classes = useStyles()

	const handleClick = () => {
		dispatch(openFormModal())
	}

	return (
		<Grid
			container
			spacing={2}
			className={classes.contactContainer}
			justify="center"
			id="contact-section"
		>
			<Grid item xs={12} md={6}>
				<Card className={classes.root} variant="outlined">
					<CardContent style={{ paddingBottom: 0 }}>
						<Typography variant="h5" component="h2" className={classes.contactTitle}>
							¿Cómo Contactar?
						</Typography>
						<ul>
							{/* <li className={classes.liBullet}>
								<Typography variant="body2" component="p">
									Mediante número de teléfono (oficina):{" "}
									<Typography
										className={classes.pos}
										color="textSecondary"
										component="span"
									>
										3220-2678
									</Typography>
								</Typography>
							</li> */}
							<li className={classes.liBullet}>
								<Typography variant="body2" component="p">
									A través de WhatsApp:{" "}
									<Typography
										className={classes.pos}
										color="textSecondary"
										component="span"
									>
										(011) 5142-2577
									</Typography>
								</Typography>
							</li>
							<li className={classes.liBullet}>
								<Typography variant="body2" component="p">
									Éstos son los horarios de atención para WhatsApp:{" "}
									<Typography
										className={classes.pos}
										color="textSecondary"
										component="span"
									>
										Desde las 14:30hs hasta las 18hs
									</Typography>
								</Typography>
							</li>
							<li className={classes.liBullet}>
								<Typography variant="body2" component="p">
									Mediante Email a:{" "}
									<Typography
										className={classes.pos}
										color="primary"
										component="u"
									>
										saludyderechos@gmail.com
									</Typography>
								</Typography>
							</li>
						</ul>
					</CardContent>
					<CardActions className={classes.formButton}>
						<Button onClick={handleClick} color="primary">
							completando este formulario
						</Button>
					</CardActions>
				</Card>
			</Grid>
		</Grid>
	)
}
