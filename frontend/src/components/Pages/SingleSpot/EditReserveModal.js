import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import EditReserveCard from "./EditReserveCard";

function EditReserveModal({ spot, dates, booking }) {
	const [showModal, setShowModal] = useState(false);
	// const [showLoginModal, setShowLoginModal] = useState(false);

	return (
		<>
			<span onClick={() => setShowModal(true)}>
				<i className="fas fa-edit"></i> Edit
			</span>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<EditReserveCard
						spot={spot}
						dates={dates}
						booking={booking}
						setShowModal={setShowModal}
					/>
				</Modal>
			)}
		</>
	);
}

export default EditReserveModal;
