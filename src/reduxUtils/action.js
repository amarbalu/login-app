const fetch_users = () => ({
  type: "fetch_users",
});
const user_items_loaded = (users) => ({
  type: "user_items_loaded",
  users,
});
const login = (email, name, mode) => ({
  type: "login_attempt",
  email,
  name,
  mode,
});
const setloginDetails = (email, password, loginSuccess) => ({
  type: "set_login_details",
  email,
  password,
  loginSuccess,
});
const logout = () => ({
  type: "logout_attempt",
});

export { fetch_users, user_items_loaded, login, setloginDetails, logout };
