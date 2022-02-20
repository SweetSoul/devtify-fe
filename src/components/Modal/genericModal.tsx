import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import useSettings from "../../hooks/useSettings";

interface IProps {
	modalType: string;
	children: React.ReactNode | React.ReactNode[];
	title?: string;
	footer?: React.ReactNode | React.ReactNode[];
}
export default function GenericModal(props: IProps) {
	const { settings, updateAppSettings } = useSettings();

	const toggleModal = () => {
		console.log("APP/MODAL/" + props.modalType.toUpperCase());
		updateAppSettings("APP/MODAL/" + props.modalType.toUpperCase());
	};

	return (
		<Modal isOpen={settings.modal[props.modalType]} toggle={() => toggleModal()}>
			{props.title && <ModalHeader toggle={() => toggleModal()}>{props.title}</ModalHeader>}
			<ModalBody>{props.children}</ModalBody>
			{props.footer && <ModalFooter>{props.footer}</ModalFooter>}
		</Modal>
	);
}
