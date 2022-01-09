import { csrfFetch } from "./csrf";
const SET_SPOT = "spots/setSpot";
const REMOVE_SPOT = "spots/removeSpot";
const SET_SPOTS = "spots/getAllSpots";
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
const setSpots = (spots) => {
  return {
    type: SET_SPOTS,
    spots,
  };
};

export const getAllSpots = () => async (dispatch) => {
  const res = await csrfFetch("/api/spots", {});
  const data = await res.json();
  console.log(data);
  dispatch(setSpots(data));
  return res;
};

export const signup = (user) => async (dispatch) => {
  const { name, username, email, password } = user;
  const res = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({ name, username, email, password }),
  });
  const data = await res.json();
  // dispatch(setUser(data.user));
  return res;
};
export const restoreUser = () => async (dispatch) => {
  const res = await csrfFetch("/api/session");
  const data = await res.json();
  // dispatch(setUser(data.user));
  return res;
};

export const logout = () => async (dispatch) => {
  const res = await csrfFetch("/api/session", {
    method: "DELETE",
  });
  // dispatch(removeUser());
  return res;
};
const initialState = { spots: [] };

const spotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SPOTS: {
      const newState = Object.assign({}, state);
      newState.spots = action.spots;
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
