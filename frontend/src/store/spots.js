import { useSelector } from "react-redux";
import { csrfFetch } from "./csrf";
/*--------------------------------------------------------------------*/
// ACTIONS
const SET_SPOT = "spots/setSpot";
const LOAD_SPOTS = "spots/loadSpots";
const ADD_SPOT = "spots/addSpot";
const DELETE_SPOT = "spots/removeSpot";
/*--------------------------------------------------------------------*/
// ACTION CREATORS
const setSpot = (currSpot) => {
  return {
    type: SET_SPOT,
    currSpot,
  };
};

const loadSpots = (entries) => {
  return {
    type: LOAD_SPOTS,
    entries,
  };
};

const addSpot = (newSpot) => {
  return {
    type: ADD_SPOT,
    newSpot,
  };
};

const deleteSpot = () => {
  return {
    type: DELETE_SPOT,
  };
};
/*--------------------------------------------------------------------*/
// FETCH UTIL FUNCTIONS
export const getAllSpots = () => async (dispatch) => {
  const res = await csrfFetch("/api/spots");
  const data = await res.json();
  dispatch(loadSpots(data));
  // return res;
};

export const getOneSpot = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${id}`);
  const data = await res.json();
  dispatch(setSpot(data));
};
export const deleteOneSpot = (id, user) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/${id}`, { method: "DELETE" });
  // const data = await res.json();
  dispatch(getHostsSpots(user));
  return res;
};
const formDataBuilder = (spot) => {
  const { image } = spot;
  const formData = new FormData();
  Object.entries(spot.spot).forEach((entry) => {
    formData.append(entry[0], entry[1]);
  });
  if (image) formData.append("image", image);
  return formData;
};
export const addNewSpot = (newSpot) => async (dispatch) => {
  // const {
  //   type,
  //   name,
  //   title,
  //   pets,
  //   totalOccupancy,
  //   totalBedrooms,
  //   totalBathrooms,
  //   description,
  //   hasWifi,
  //   hasTV,
  //   hasAC,
  //   hasHeat,
  //   price,
  //   postedAt,
  //   coordinates,
  //   hostId,
  // } = newSpot.spot;
  const formData = formDataBuilder(newSpot);
  const res = await csrfFetch(`/api/spots`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });
  const data = await res.json();
  dispatch(getHostsSpots(data.createdSpot.hostId));
  // dispatch(loadSpots(data));
  // getAllSpots()
  return data;
};

export const getHostsSpots = (user) => async (dispatch) => {
  let id;
  if (typeof user === "number") id = user;
  else id = user.id;
  const res = await csrfFetch(`/api/users/${id}`);
  const data = await res.json();
  dispatch(loadSpots(data));
};

export const editOneSpot = (id, spot) => async (dispatch) => {
  // const formData = formDataBuilder(spot);
  const res = await csrfFetch(`/api/spots/${id}`, {
    method: "PUT",
    headers: {
      // "Content-Type": "multipart/form-data",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(spot),
  });
  const data = await res.json();
  dispatch(getHostsSpots(data.updatedSpot.hostId));
  return data;
};

export const getSpotsByType = (type) => async (dispatch) => {
  const res = await csrfFetch(`/api/spots/categories/${type}`);
  const data = await res.json();
  const numOfSpots = Object.values(data).length;

  dispatch(loadSpots(data.spots));
  // } else dispatch(setSpot(data.spot));
};
/*--------------------------------------------------------------------*/
// SPOTS REDUCER
const initialState = { entries: [], currSpot: null };

const spotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_SPOTS: {
      const newState = { ...state };
      newState.entries = action.entries.reduce((entries, spot) => {
        entries[spot.id] = spot;
        return entries;
      }, {});
      return newState;
    }
    case SET_SPOT: {
      const newState = { ...state };
      newState.currSpot = action.currSpot;
      return newState;
    }
    case ADD_SPOT: {
      const newState = { ...state };
      newState.entries = [
        ...newState.entries,
        { [action.newSpot.id]: action.newSpot },
      ];
      return newState;
    }
    // case DELETE_SPOT: {
    //   const newState = { ...state };
    //   newState.entries =
    // }
    default:
      return state;
  }
};
/*--------------------------------------------------------------------*/
export default spotsReducer;
