import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Typography,
} from "@material-ui/core"
import { useSelector, useDispatch } from "react-redux"
import { RootStore } from "../../redux/store"
import { closeInfoModal } from "../../redux/actions/modalActions"

export default function InfoModalComponent() {
	const infoModalState = useSelector((state: RootStore) => state.modal.infoModalOpen.open)
	const service = useSelector((state: RootStore) => state.modal.infoModalOpen.service)

	const dispatch = useDispatch()

	const handleClose = () => {
		dispatch(closeInfoModal())
	}

	return (
		<div>
			<Dialog
				open={infoModalState}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
				scroll="paper"
				maxWidth="md"
			>
				<DialogTitle id="alert-dialog-title">{service?.title}</DialogTitle>
				<DialogContent>
					<ol id="alert-dialog-description">
						{service?.list.map((item: string, index: number) => (
							<li key={index} style={{ marginBottom: 20 }}>
								<Typography variant="body1" color="initial" gutterBottom>
									{item}
								</Typography>
							</li>
						))}
					</ol>
					<Typography variant="subtitle1" gutterBottom>
						{service?.description}
					</Typography>
					<Typography variant="h5" gutterBottom style={{ marginTop: 40 }}>
						Marco Normativo
					</Typography>
					{service && (
						<Typography
							variant="body2"
							gutterBottom
							dangerouslySetInnerHTML={{ __html: service.regulatory_frame }}
						></Typography>
					)}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary" autoFocus>
						Volver al Sitio
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}
