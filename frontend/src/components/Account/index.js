import React, { Children, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import AddPlaceForm from "./AddPlaceForm";
import AddPlaceModal from "./AddPlaceModal";
import BecomeHostForm from "./BecomeHostForm";
import BecomeHostModal from "./BecomeHostModal";
const Account = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [host, setHost] = useState(false);
  const sessionUser = useSelector((state) => state.session.user);
  // useEffect(() => {
  //   if (sessionUser?.isHost) setHost(true);
  // }, [host, sessionUser.isHost]);
  let components;
  console.log(sessionUser?.isHost);
  if (sessionUser?.isHost) {
    components = (
      <>
        <AddPlaceModal setShowModal={setShowModal} />
      </>
    );
  } else {
    components = (
      <>
        <BecomeHostModal setShowModal={setShowModal} />
      </>
    );
  }
  return (
    <div>
      <div>
        <h2>Welcome, {sessionUser?.username}</h2>
        <h3>{sessionUser?.email}</h3>
        <h3>Welcome, {sessionUser?.name}</h3>
      </div>
      <div>
        {components}
        {/* {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <AddPlaceForm setShowModal={setShowModal} />
          </Modal>
        )} */}
      </div>
    </div>
  );
};

export default Account;
