import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import BecomeHostForm from "./BecomeHostForm";
const BecomeHostModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="become-host-modal-show"
        onClick={() => setShowModal(true)}
      >
        Become a Host
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <BecomeHostForm setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
};

export default BecomeHostModal;
