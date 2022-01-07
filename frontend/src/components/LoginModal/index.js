import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal } from "../../context/Modal";
import LoginForm from "../LoginForm";

const LoginModal = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Link to="/" onClick={() => setShowModal(true)}>
        log in
      </Link>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
};

export default LoginModal;
