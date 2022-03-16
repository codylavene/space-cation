import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import AddPlaceForm from "./AddPlaceForm";
const AddPlaceModal = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<>
			<button
				className="add-spot-show-modal"
				onClick={() => setShowModal(true)}
			>
				Add a Spot?
			</button>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<AddPlaceForm setShowModal={setShowModal} />
				</Modal>
			)}
		</>
	);
};

export default AddPlaceModal;
