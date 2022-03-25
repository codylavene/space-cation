import React, { useState } from "react";
import { Modal } from "../../../context/Modal";
import CancelReserveCard from "./CancelReserveCard";

function CancelReserveModal({ booking }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<>
			<span onClick={() => setShowModal(true)}>
				<i className="fas fa-times"></i> Cancel
			</span>
			{showModal && (
				<Modal onClose={() => setShowModal(false)}>
					<CancelReserveCard
						booking={booking}
						setShowModal={setShowModal}
					/>
				</Modal>
			)}
		</>
	);
}

export default CancelReserveModal;
