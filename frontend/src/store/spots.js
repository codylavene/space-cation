import { csrfFetch } from "./csrf";
/*--------------------------------------------------------------------*/
// ACTIONS
const SET_SPOT = "spots/setSpot";
const LOAD_SPOTS = "spots/loadSpots";
const ADD_SPOT = "spots/addSpot";
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
/*--------------------------------------------------------------------*/
// FETCH UTIL FUNCTIONS
export const getAllSpots = () => async (dispatch) => {
  const res = await csrfFetch("/api/spots");
  const data = await res.json();
  // console.log(JSON.stringify(data, null, 4));
  dispatch(loadSpots(data));
  // return res;
};

export const getOneSpot = (id) => async (dispatch) => {
  // console.log("ID in GETONESPOT", id);
  const res = await csrfFetch(`/api/spots/${id}`);
  const data = await res.json();
  // console.log({ data });
  dispatch(setSpot(data));
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
  const { image } = newSpot;
  console.log(image);
  const formData = new FormData();
  Object.entries(newSpot.spot).forEach((entry) => {
    console.log({ entry });
    formData.append(entry[0], entry[1]);
  });
  if (image) formData.append("image", image);
  console.log(formData);
  const res = await csrfFetch(`/api/spots`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });
  const data = await res.json();
  getHostsSpots(data.hostId);
  // dispatch(loadSpots(data));
  // getAllSpots()
  return data;
};

export const getHostsSpots = (user) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${user.id}`);
  const data = await res.json();
  console.log(data);
  dispatch(loadSpots(data));
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
    default:
      return state;
  }
};
/*--------------------------------------------------------------------*/
export default spotsReducer;
