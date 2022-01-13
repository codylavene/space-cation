import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../context/Modal";
import LoginForm from "./LoginFormModal.js";

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);
  // const [showSignupModal, setShowSignupModal] = useState(false);

  return (
    <>
      <button className="account-btn" onClick={() => setShowModal(true)}>
        Log In
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm
            setShowModal={setShowModal}
            // setShowSignupModal={setShowSignupModal}
          />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
