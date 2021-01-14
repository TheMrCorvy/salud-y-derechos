import React, { Fragment } from "react"

import { IconButton, Typography, Tooltip, Hidden, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"

import { Link } from "react-scroll"

import "../../assets/index.css"

const useStyles = makeStyles(() => ({
	mainTitle: {
		position: "absolute",
		top: "11%",
		right: 0,
		width: "100%",
		textAlign: "center",
	},
	subTitle: {
		position: "absolute",
		top: "17%",
		right: 0,
		width: "100%",
		textAlign: "center",
	},
	logoGrande: {
		width: "100%",
		borderRadius: 10,
	},
	header: {
		width: "100%",
		display: "flex",
		position: "relative",
	},
}))

const LandingHeader = () => {
	const classes = useStyles()

	return (
		<Fragment>
			<div className={classes.header}>
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<div className="floatingTitles">
							<Typography variant="h4" gutterBottom className={classes.mainTitle}>
								Protegemos tu derecho de acceso a la salud
							</Typography>
							<Typography
								variant="subtitle1"
								gutterBottom
								className={classes.subTitle}
							>
								Organización Mundial de la Salud:{" "}
								<Typography color="textSecondary" component="span">
									"(...) la salud es un derecho humano fundamental (...)"
								</Typography>
							</Typography>
						</div>
						<img
							src="https://corvalan-gonzalo-main.s3-sa-east-1.amazonaws.com/salud-y-derechos/LogoGrande.jpg"
							alt="algo"
							className={classes.logoGrande}
						/>
						<Hidden xsDown>
							<div className="arrowContainer">
								<Tooltip title="Bajar a la siguiente sección">
									<Link to="contact-section" smooth>
										<IconButton color="primary" className="floatingButton">
											<ArrowDownwardIcon fontSize="inherit" />
										</IconButton>
									</Link>
								</Tooltip>
							</div>
						</Hidden>
					</Grid>
					<Grid item xs={12} className="hiddenSubtitles">
						<Typography variant="h4" gutterBottom>
							Protegemos tu derecho de acceso a la salud
						</Typography>
						<Typography variant="subtitle1" gutterBottom>
							Organización Mundial de la Salud:{" "}
							<Typography color="textSecondary" component="p">
								"(...) la salud es un derecho humano fundamental (...)"
							</Typography>
						</Typography>
					</Grid>
				</Grid>
			</div>
		</Fragment>
	)
}

export default LandingHeader
