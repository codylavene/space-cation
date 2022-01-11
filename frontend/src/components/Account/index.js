import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import AddPlaceForm from "./AddPlaceForm";
import BecomeHostForm from "./BecomeHostForm";
const Account = (props) => {
  const [showModal, setShowModal] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  let hostComponents;
  if (sessionUser.isHost) {
    hostComponents = showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <AddPlaceForm setShowModal={setShowModal} />
      </Modal>
    );
  } else {
    hostComponents = showModal && (
      <Modal onClose={() => setShowModal(false)}>
        <BecomeHostForm setShowModal={setShowModal} />
      </Modal>
    );
  }
  return (
    <div>
      <div>
        <button onClick={() => setShowModal(true)}>Add a Spot?</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <AddPlaceForm setShowModal={setShowModal} />
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Account;
