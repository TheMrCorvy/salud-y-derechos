import React, { Fragment, useState, useEffect } from "react"
import {
	Container,
	Typography,
	Grid,
	Paper,
	Button,
	StepContent,
	StepLabel,
	Step,
	Stepper,
} from "@material-ui/core"
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles"

import { faq as faqJson } from "../../static-data/frequently_asked_questions.json"

type Faq = {
	answer: string
	question: string
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: "100%",
		},
		button: {
			marginTop: theme.spacing(1),
			marginRight: theme.spacing(1),
		},
		actionsContainer: {
			marginBottom: theme.spacing(2),
			paddingTop: "2rem",
		},
		resetContainer: {
			padding: theme.spacing(3),
			borderBottomLeftRadius: 8,
			borderBottomRightRadius: 8,
		},
		title: {
			paddingBottom: 20,
		},
		textContainer: {
			textAlign: "center",
		},
		sectionContainer: {
			backgroundColor: "#f5f5f5",
			marginTop: "5rem",
			paddingTop: 30,
			paddingBottom: 30,
			borderRadius: 10,
		},
		listBullet: {
			marginBottom: 10,
		},
		steps: {
			borderTopLeftRadius: 8,
			borderTopRightRadius: 8,
		},
	})
)

export default function FaqSection() {
	const classes = useStyles()

	const [activeStep, setActiveStep] = useState(0)

	const [faqs, setFaqs] = useState<Faq[]>([])

	useEffect(() => {
		setFaqs(faqJson)
	}, [])

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1)
	}

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}

	const handleReset = () => {
		setActiveStep(0)
	}

	return (
		<Fragment>
			<Container maxWidth="xl" className={classes.sectionContainer}>
				<Grid container justify="center">
					<Grid item xs={12} className={classes.textContainer}>
						<Typography variant="h4" gutterBottom className={classes.title}>
							Preguntas Frecuentes
						</Typography>
					</Grid>
					<Grid item xs={12} className={classes.steps}>
						<div className={classes.root}>
							<Stepper
								activeStep={activeStep}
								className={classes.steps}
								orientation="vertical"
							>
								{faqs.map((faq, index) => (
									<Step key={index}>
										<StepLabel>{faq.question}</StepLabel>
										<StepContent>
											<Typography>{faq.answer}</Typography>
											<div className={classes.actionsContainer}>
												<div>
													<Button
														disabled={activeStep === 0}
														onClick={handleBack}
														className={classes.button}
													>
														Atrás
													</Button>
													<Button
														variant="contained"
														color="primary"
														onClick={handleNext}
														className={classes.button}
													>
														{activeStep === faqs.length - 1
															? "Siguiente"
															: "Siguiente"}
													</Button>
												</div>
											</div>
										</StepContent>
									</Step>
								))}
							</Stepper>
							{activeStep === faqs.length && (
								<Paper square elevation={0} className={classes.resetContainer}>
									<Typography>
										All steps completed - you&apos;re finished
									</Typography>
									<Button onClick={handleReset} className={classes.button}>
										Volver al Principio
									</Button>
								</Paper>
							)}
						</div>
					</Grid>
				</Grid>
			</Container>
		</Fragment>
	)
}
