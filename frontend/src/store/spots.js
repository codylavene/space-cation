import { csrfFetch } from "./csrf";
/*--------------------------------------------------------------------*/
// ACTIONS
const SET_SPOT = "spots/setSpot";
const LOAD_SPOTS = "spots/loadSpots";
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
  console.log({ data });
  dispatch(setSpot(data));
};
/*--------------------------------------------------------------------*/
// SPOTS REDUCER
const initialState = { entries: [], currSpot: null, isLoading: true };

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
    default:
      return state;
  }
};
/*--------------------------------------------------------------------*/
export default spotsReducer;
