import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as spotActions from "../../../store/spots";
import { Modal } from "../../../context/Modal";
import EditSpotForm from "../../Account/EditSpotForm";
import DeleteSpotForm from "../../Account/DeleteSpotForm";
import SpotCard from "../../SpotsCard";
const HostSpots = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const spotsObj = useSelector((state) => state.spots.entries);
  const currSpot = useSelector((state) => state.spots.currSpot);
  const spots = Object.values(spotsObj);
  useEffect(() => {
    const checkIfHost = () => {
      if (sessionUser.isHost) {
        dispatch(spotActions.getHostsSpots(sessionUser));
      } else return;
    };
    checkIfHost();

    // dispatch(spotActions.getAllSpots());
  }, [dispatch, sessionUser]);
  return (
    <div className="host-spots-container">
      {spots.length > 0 &&
        spots.map((spot) => (
          <div key={spot.id}>
            <SpotCard spot={spot} />
            <div className="action-btns">
              <button
                className="edit btn"
                dataid={spot.id}
                onClick={() => {
                  dispatch(spotActions.getOneSpot(spot.id));
                  setTimeout(() => {
                    setShowEditModal(true);
                  }, 100);
                }}
              >
                Edit
              </button>
              {showEditModal && (
                <Modal onClose={() => setShowEditModal(false)}>
                  <EditSpotForm
                    setShowModal={setShowEditModal}
                    spotId={currSpot?.id}
                  />
                </Modal>
              )}
              <button
                className="delete btn"
                dataid={spot.id}
                onClick={() => {
                  dispatch(spotActions.getOneSpot(spot.id));
                  setTimeout(() => {
                    setShowDeleteModal(true);
                  }, 50);
                }}
              >
                Delete
              </button>
              {showDeleteModal && (
                <Modal onClose={() => setShowDeleteModal(false)}>
                  <DeleteSpotForm
                    setShowModal={setShowDeleteModal}
                    spotId={currSpot?.id}
                  />
                </Modal>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default HostSpots;
