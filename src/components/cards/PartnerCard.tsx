import React, { useState } from "react"

import {
	Typography,
	Card,
	CardContent,
	CardActions,
	CardHeader,
	Collapse,
	CardMedia,
	CardActionArea,
} from "@material-ui/core"

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import clsx from "clsx"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: "100%",
		},
		media: {
			height: 0,
			paddingTop: "90%",
		},
		expand: {
			transform: "rotate(0deg)",
			marginLeft: "auto",
			transition: theme.transitions.create("transform", {
				duration: theme.transitions.duration.shortest,
			}),
		},
		expandOpen: {
			transform: "rotate(180deg)",
		},
	}),
)

const TrialCard = () => {
	const classes = useStyles()

	const [expanded, setExpanded] = useState(false)

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	return (
		<Card className={classes.root}>
			<CardHeader title="Dr. Juan Pablo Corvalán - Titular del Estudio" />
			<CardMedia
				className={classes.media}
				image="https://corvalan-gonzalo-main.s3-sa-east-1.amazonaws.com/salud-y-derechos/socio-1.jpg"
				title="Dr. Juan Pablo Corvalán"
			/>
			<CardActionArea onClick={handleExpandClick}>
				<CardContent>
					<Typography variant="body2" color="textSecondary" component="p">
						Profesional con amplia trayectoria en abogacía especializado en Amparos de
						Derecho de Salud, cobertura de enfermedades poco frecuentes, Derechos de las
						Personas con Discapacidad, Derechos de (...)
					</Typography>
				</CardContent>

				<CardActions disableSpacing>
					<div
						className={clsx(classes.expand, {
							[classes.expandOpen]: expanded,
						})}
					>
						<ExpandMoreIcon color="primary" />
					</div>
				</CardActions>

				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<CardContent>
						<Typography variant="h6" gutterBottom style={{ marginBottom: 25 }}>
							Dr. Juan Pblo Corvalán - Titular del Estudio
						</Typography>

						<Typography paragraph>
							Profesional con amplia trayectoria en abogacía especializado en Amparos
							de Derecho de Salud, cobertura de enfermedades poco frecuentes, Derechos
							de las Personas con Discapacidad, Derechos de las Personas Mayores,
							juicios por prestaciones médicas en general.
						</Typography>
						<Typography paragraph>
							Miembro del Instituto de Derechos de las Personas con Discapacidad del
							Colegio de Abogados de San Martín.
						</Typography>
					</CardContent>
				</Collapse>
			</CardActionArea>
		</Card>
	)
}

export default TrialCard
