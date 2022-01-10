import { csrfFetch } from "./csrf";
const SET_SPOT = "spots/setSpot";
const REMOVE_SPOT = "spots/removeSpot";
const LOAD_SPOTS = "spots/loadSpots";
// const setSpot = (user) => {
//   return {
//     type: SET_SPOT,
//     user,
//   };
// };
const removeSpot = () => {
  return {
    type: REMOVE_SPOT,
  };
};
const loadSpots = (entries) => {
  return {
    type: LOAD_SPOTS,
    entries,
  };
};

export const getAllSpots = () => async (dispatch) => {
  const res = await csrfFetch("/api/spots");
  const data = await res.json();
  console.log({ data });
  dispatch(loadSpots(data));
  // return res;
};

// export const signup = (user) => async (dispatch) => {
//   const { name, username, email, password } = user;
//   const res = await csrfFetch("/api/users", {
//     method: "POST",
//     body: JSON.stringify({ name, username, email, password }),
//   });
//   const data = await res.json();
//   // dispatch(setUser(data.user));
//   return res;
// };
// export const restoreUser = () => async (dispatch) => {
//   const res = await csrfFetch("/api/session");
//   const data = await res.json();
//   // dispatch(setUser(data.user));
//   return res;
// };

// export const logout = () => async (dispatch) => {
//   const res = await csrfFetch("/api/session", {
//     method: "DELETE",
//   });
//   // dispatch(removeUser());
//   return res;
// };
const initialState = { entries: [], isLoading: true };

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
    // case REMOVE_USER: {
    //   const newState = Object.assign({}, state);
    //   newState.user = null;
    //   return newState;
    // }

    default:
      return state;
  }
};

export default spotsReducer;
