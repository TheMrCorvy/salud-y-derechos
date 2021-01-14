import React, { Fragment, useState } from "react"
import {
	DialogTitle,
	DialogContent,
	DialogActions,
	Dialog,
	TextField,
	Button,
	Grid,
	Switch,
	FormControlLabel,
	Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

import { useSelector, useDispatch } from "react-redux"
import { RootStore } from "../../redux/store"
import { closeFormModal } from "../../redux/actions/modalActions"

import { useForm } from "react-hook-form"

interface FormInputI {
	name: String
	email: String
	phoneNumber: String
	message: String
}

const useStyles = makeStyles(() => ({
	grid: {
		display: "flex",
		justifyContent: "space-around",
	},
	dialogContent: {
		overflowY: "hidden",
	},
	dialogActions: {
		justifyContent: "space-between",
		paddingRight: 25,
		paddingLeft: 25,
		paddingBottom: 15,
	},
	alertDanger: {
		textAlign: "center",
	},
	alertSuccess: {
		textAlign: "center",
		color: "#25D366",
	},
}))

export default function FormModalComponent() {
	const classes = useStyles()

	const [sending, setSending] = useState("")

	const dispatch = useDispatch()

	const handleClose = () => {
		dispatch(closeFormModal())
	}

	const formModalState = useSelector((state: RootStore) => state.modal.formModalOpen)

	const [state, setState] = React.useState({
		checkbox: false,
	})

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setState({ ...state, [event.target.name]: event.target.checked })
	}

	const { register, handleSubmit, errors } = useForm<FormInputI>()

	const onSubmit = (data: FormInputI, e: any) => {
		e.target.reset()
		sendEmail(data)
	}

	const mandatoryMessage = (message: string): string => {
		return `El campo ${message} es obligatorio.`
	}

	const sendEmail = async (email: FormInputI) => {
		setSending("loading")
		await fetch("https://api.emailjs.com/api/v1.0/email/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				service_id: "service_7e47vhb",
				template_id: "template_xx5a4bc",
				user_id: "user_mMNITIgF6TFcu7x2W2gCo",
				template_params: {
					name: email.name,
					email: email.email,
					phoneNumber: email.phoneNumber,
					message: email.message,
				},
			}),
		})
			.then((res) => res.text())
			.then((data) => {
				console.log(data)
				if (data === "ok") {
					setSending("success")
				} else {
					setSending("error")
				}
			})
			.catch((error) => {
				setSending("error")
				console.log(error)
			})
	}

	return (
		<Fragment>
			<Dialog
				open={formModalState}
				onClose={handleClose}
				maxWidth="lg"
				fullWidth={true}
				scroll="body"
				aria-labelledby="form-dialog-title"
			>
				<DialogTitle id="form-dialog-title">
					Complete este formulario para enviar su consulta
				</DialogTitle>
				<form onSubmit={handleSubmit(onSubmit)} id="form-email">
					<DialogContent className={classes.dialogContent}>
						<Grid container spacing={4} className={classes.grid}>
							<Grid item xs={12} sm={6} lg={4} xl={3}>
								<TextField
									id="name"
									label="¿Cuál es su Nombre?"
									variant="outlined"
									name="name"
									fullWidth
									error={errors?.name ? true : false}
									helperText={(errors.name as any)?.message}
									inputRef={register({
										required: {
											value: true,
											message: mandatoryMessage("Nombre"),
										},
										maxLength: {
											value: 50,
											message: "No puede haber más de 50 caractéres",
										},
										minLength: {
											value: 5,
											message: "Debe haber un mínimo de 5 caractéres",
										},
									})}
								/>
							</Grid>
							<Grid item xs={12} sm={6} lg={4} xl={3}>
								<TextField
									id="email"
									label="Un email de contacto"
									variant="outlined"
									name="email"
									type="email"
									error={errors?.email ? true : false}
									helperText={(errors.email as any)?.message}
									fullWidth
									inputRef={register({
										required: {
											value: true,
											message: mandatoryMessage("Email"),
										},
										maxLength: {
											value: 50,
											message: "No puede haber más de 50 carácteres",
										},
										minLength: {
											value: 5,
											message: "Dehe haber un mínimo de 5 carácteres",
										},
									})}
								/>
							</Grid>
							<Grid item xs={12} sm={6} lg={4} xl={3}>
								<TextField
									id="phoneNumber"
									label="Su número de teléfono"
									variant="outlined"
									name="phoneNumber"
									error={errors?.phoneNumber ? true : false}
									helperText={(errors.phoneNumber as any)?.message}
									fullWidth
									inputRef={register({
										required: {
											value: true,
											message: mandatoryMessage("Número de Teléfono"),
										},
										maxLength: {
											value: 16,
											message: "El número no puede tener más de 16 dígitos",
										},
										minLength: {
											value: 8,
											message: "El número debe tener un mínimo de 8 dígitos",
										},
									})}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									id="message"
									label="Detalle aquí su consulta"
									variant="outlined"
									name="message"
									error={errors?.message ? true : false}
									helperText={(errors.message as any)?.message}
									multiline
									rows={4}
									rowsMax={8}
									fullWidth
									inputRef={register({
										required: {
											value: true,
											message: mandatoryMessage("Consulta"),
										},
										maxLength: {
											value: 190,
											message: "No puede haber más de 190 caractéres",
										},
										minLength: {
											value: 10,
											message: "Debe haber un mínimo de 10 caractéres",
										},
									})}
								/>
							</Grid>
							<Grid item xs={12}>
								<FormControlLabel
									control={
										<Switch
											checked={state.checkbox}
											onChange={handleChange}
											name="checkbox"
											color="primary"
											required
										/>
									}
									label="Ya he revisado la documentación básica."
								/>
							</Grid>
							<Grid item xs={12}>
								{sending === "error" && (
									<Typography
										variant="overline"
										display="block"
										gutterBottom
										color="secondary"
										className={classes.alertDanger}
									>
										Vaya! parece que hubo un error, por favor intenta de nuevo
										en unos momentos.
									</Typography>
								)}
								{sending === "success" && (
									<Typography
										variant="overline"
										display="block"
										gutterBottom
										className={classes.alertSuccess}
									>
										Éxito! Su consulta fue enviada sin problemas
									</Typography>
								)}
								{sending === "loading" && (
									<Typography
										variant="overline"
										display="block"
										gutterBottom
										color="primary"
										className={classes.alertDanger}
									>
										Cargando... Por favor espere
									</Typography>
								)}
							</Grid>
						</Grid>
					</DialogContent>
					<DialogActions className={classes.dialogActions}>
						<Button variant="outlined" onClick={handleClose} color="secondary">
							volver
						</Button>
						<Button variant="outlined" color="primary" type="submit">
							enviar
						</Button>
					</DialogActions>
				</form>
			</Dialog>
		</Fragment>
	)
}
