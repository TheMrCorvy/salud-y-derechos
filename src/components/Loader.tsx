import React, { Fragment } from "react"

import { Container, Grid } from "@material-ui/core"

import { makeStyles, Theme } from "@material-ui/core/styles"

import Skeleton from "react-loading-skeleton"

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(3, 2),
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		textAlign: "center",
	},
}))

export default function Loader() {
	const classes = useStyles()

	return (
		<Fragment>
			<Container>
				<Grid container justify="center">
					<Grid item xs={12} className={classes.root}>
						<h3>Cargando...</h3>
						<Skeleton />
					</Grid>
				</Grid>
			</Container>
		</Fragment>
	)
}
