import React, { Fragment, ReactElement } from "react"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import { Zoom } from "@material-ui/core"

interface Props {
	children: ReactElement
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			position: "fixed",
			bottom: theme.spacing(2),
			right: theme.spacing(2),
		},
	}),
)

/**
 *
 * @param {Props} props The props needed for the scroll top are the children component that will go inside of the button
 * @returns {ReactElement}
 */
export default function ScrollTop(props: Props) {
	const { children } = props

	const classes = useStyles()

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 100,
	})

	const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}

	return (
		<Fragment>
			<Zoom in={trigger}>
				<div onClick={handleClick} role="presentation" className={classes.root}>
					{children}
				</div>
			</Zoom>
		</Fragment>
	)
}
