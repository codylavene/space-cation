import React, { Children, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import AddPlaceForm from "./AddPlaceForm";
import AddPlaceModal from "./AddPlaceModal";
import BecomeHostForm from "./BecomeHostForm";
import BecomeHostModal from "./BecomeHostModal";

import "./AddPlaceForm.css";
import HostSpots from "../Pages/Spots/HostSpots";

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
        <HostSpots />
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
      <div className="components-container">
        <h2 style={{ fontSize: 32 }}>Account</h2>
        <h2>{sessionUser.name ? `Name: ${sessionUser?.name}` : ""}</h2>
        <h2>
          {sessionUser.username ? `Username: ${sessionUser?.username}` : ""}
        </h2>
        <h3>{sessionUser.email ? `Email: ${sessionUser?.email}` : ""}</h3>
      </div>
      <div className="components-container">
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
