import { FC } from "react"

import { Typography, Card, Grid } from "@material-ui/core"
import { makeStyles, createStyles } from "@material-ui/core/styles"
import laws from "../../static-data/laws.json"

const useStyles = makeStyles(() =>
	createStyles({
		container: {
			paddingTop: "5rem",
		},
		title: {
			textAlign: "center",
		},
		card: {
			borderRadius: 15,
			padding: "1rem",
			textAlign: "center",
		},
	})
)

const LawsSection: FC = () => {
	const classes = useStyles()

	return (
		<>
			<Grid container justify="space-around" spacing={3} className={classes.container}>
				<Grid item xs={12}>
					<Typography variant="h4" gutterBottom className={classes.title}>
						Leyes Complementarias en Salud
					</Typography>
				</Grid>
				{laws.laws.map((law: string, index: number) => (
					<Grid item xs={12} sm={6} md={4} key={index}>
						<Card elevation={0} className={classes.card}>
							<Typography color="primary" variant="h6">
								{law}
							</Typography>
						</Card>
					</Grid>
				))}
			</Grid>
		</>
	)
}

export default LawsSection
