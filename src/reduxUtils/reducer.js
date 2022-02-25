/**
 * Reducer of this Application - Data fetched from ./data
 *
 */

import initialState from "./initialState";
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "user_items_loaded":
      return {
        ...state,
        users: action.users,
      };
    case "login_attempt":
      return {
        ...state,
        email: action.email,
        name: action.name,
        mode: action.mode,
        isloggedIn: true,
      };
    case "logout_attempt":
      return {
        ...state,
        email: "",
        name: "",
        mode: "",
        isloggedIn: false,
      };

    default:
      return state;
  }
};

export default reducer;
