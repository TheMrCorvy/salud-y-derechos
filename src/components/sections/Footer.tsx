import React, { Fragment } from "react"
import { Container, Grid, Typography, CardActionArea } from "@material-ui/core"

import { makeStyles } from "@material-ui/core/styles"

import { useDispatch } from "react-redux"
import { openFormModal } from "../../redux/actions/modalActions"

const useStyles = makeStyles(() => ({
	footerContainer: {
		paddingTop: "5rem",
		paddingBottom: "5rem",
		background: "#fff",
		marginTop: "7rem",
		marginBottom: "7rem",
		borderRadius: 10,
	},
	footerItem: {
		textAlign: "center",
		marginBottom: 20,
		display: "flex",
		justifyContent: "center",
	},
	footerEnd: {
		textAlign: "center",
		marginTop: 40,
	},
	actionArea: {
		paddingTop: 10,
		paddingLeft: 10,
		paddingRight: 10,
		borderRadius: 10,
		width: "auto",
	},
}))

const Footer = () => {
	const dispatch = useDispatch()

	const classes = useStyles()

	return (
		<Fragment>
			<Container className={classes.footerContainer}>
				<Grid container justify="center">
					<Grid item xs={12} className={classes.footerItem}>
						<Typography variant="h4" gutterBottom>
							Gracias por Visitarnos!
						</Typography>
					</Grid>
					<Grid item xs={12} className={classes.footerItem}>
						<CardActionArea
							onClick={() => dispatch(openFormModal())}
							className={classes.actionArea}
						>
							<Typography variant="h4" component="h5" gutterBottom color="primary">
								CLICK PARA CONTACTARNOS
							</Typography>
						</CardActionArea>
					</Grid>
					<Grid item xs={12} className={classes.footerItem}>
						<Typography variant="body2" gutterBottom>
							Esta página fue hecha por{" "}
							<Typography
								variant="body2"
								gutterBottom
								component="a"
								color="primary"
								href="http://corvalangonzalo.xyz"
								target="_blank"
							>
								Gonzalo Salvador Corvalán
							</Typography>
						</Typography>
					</Grid>
					<Grid item xs={12} className={classes.footerEnd}>
						<Typography variant="h6" component="h6" gutterBottom color="secondary">
							Salud y Derechos &copy; 2021 Todos los Derechos Reservados
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Fragment>
	)
}

export default Footer
