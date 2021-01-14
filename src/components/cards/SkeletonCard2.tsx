import React, { Fragment } from "react"

import { Typography, Card, CardContent, CardActions } from "@material-ui/core"

import Skeleton from "react-loading-skeleton"

const SkeletonCard2 = () => (
	<Fragment>
		<Card>
			<CardContent>
				<Typography gutterBottom variant="h6" component="h6">
					<Skeleton height={30} />
				</Typography>
				<Typography style={{ marginBottom: 12 }}>
					<Skeleton height={20} />
					<Skeleton height={20} width={100} />
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					<Skeleton height={110} />
				</Typography>
			</CardContent>
			<CardActions style={{ display: "flex", justifyContent: "flex-start" }}>
				<Skeleton width={120} height={20} />
			</CardActions>
		</Card>
	</Fragment>
)

export default SkeletonCard2
