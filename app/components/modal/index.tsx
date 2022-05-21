import React from "react";
import ReactModal from "react-modal";
import { type IModal } from "~/interfaces/components/modal";
import Button from "../button";
import * as Styles from "./styles";

const Modal = ({ setShow, show, title, children }: IModal): JSX.Element => {
	const handleClose = () => {
		setShow(false);
	};

	const configModal: {
		[key: string]: React.CSSProperties;
	} = {
		overlay: {
			display: "flex",
			alignContent: "center",
			justifyContent: "center",
			zIndex: 999,
			backgroundColor: "#000000CC",
			margin: 0,
		},
		content: {
			top: "50%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",
			padding: 0,
		},
	};

	return (
		<ReactModal isOpen={show} onRequestClose={handleClose} style={configModal}>
			<Styles.Header>
				<h2>{title}</h2>
			</Styles.Header>
			<hr />

			<Styles.Body>{children}</Styles.Body>

			<Styles.Footer>
				<Button action={handleClose} ghost reverseColor>
					Concluir
				</Button>
			</Styles.Footer>
		</ReactModal>
	);
};

export default Modal;
