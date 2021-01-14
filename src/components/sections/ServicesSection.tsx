import React, { Fragment, useEffect, useState } from "react"
import { Grid, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import { services as jsonServices } from "../../static-data/servicesInfo.json"

import SkeletonCard2 from "../cards/SkeletonCard2"
import ServiceCard from "../cards/ServiceCard"

type Service = {
	title: string
	sub_title: string
	summary?: string
	list: string[]
	description?: string
	regulatory_frame: string
}

const useStyles = makeStyles({
	cardTitle: {
		textAlign: "center",
	},
	startSection: {
		paddingTop: 50,
	},
})

const ServicesSection = () => {
	const [services, setServices] = useState<Service[]>([])

	const classes = useStyles()

	useEffect(() => {
		setTimeout(() => {
			setServices(jsonServices)
		}, 4000)
	}, [])

	return (
		<Fragment>
			<Grid container spacing={4} justify="center" className={classes.startSection}>
				<Grid item xs={12} className={classes.cardTitle}>
					<Typography variant="h4" gutterBottom>
						Nustros Servicios
					</Typography>
				</Grid>
				{services.length ? (
					services.map((service, index) => (
						<Grid item xs={12} md={6} xl={4} key={index}>
							<ServiceCard service={service} />
						</Grid>
					))
				) : (
					<Grid item xs={12} md={6} xl={4}>
						<SkeletonCard2 />
					</Grid>
				)}
			</Grid>
		</Fragment>
	)
}

export default ServicesSection
