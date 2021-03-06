import React, { Fragment } from "react"

import { Typography, Card, CardContent } from "@material-ui/core"

import Skeleton from "react-loading-skeleton"

const SkeletonCard4 = () => (
	<Fragment>
		<Card>
			<CardContent>
				<Typography gutterBottom variant="h6" component="h6">
					<Skeleton
						height={50}
						style={{
							paddingLeft: "auto",
							paddingRight: "auto",
						}}
					/>
				</Typography>
				<Typography style={{ marginBottom: 12 }}>
					<Skeleton height={20} />
					<Skeleton height={20} width={100} />
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					<Skeleton height={20} />
				</Typography>
			</CardContent>
		</Card>
	</Fragment>
)

export default SkeletonCard4
