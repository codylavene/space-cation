import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../context/Modal";
import SignupForm from "./SignupFormModal.js";

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);
  // const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <>
      <button className="account-btn" onClick={() => setShowModal(true)}>
        Sign Up
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignupForm
            setShowModal={setShowModal}
            // setShowLoginModal={setShowLoginModal}
          />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;
