import { all, put, takeLatest } from "redux-saga/effects";
import { user_items_loaded } from "./action";

function* fetchUsers(users) {
  try {
    const response = yield fetch("https://jsonplaceholder.typicode.com/users");
    const responseJson = yield response.json();

    yield put(user_items_loaded(responseJson));
  } catch (ex) {}
}

/**
 * watchUserItemsLoaded saga helps us to fetch users
 */
function* watchUserItemsLoaded() {
  yield takeLatest("fetch_users", ({ users }) => fetchUsers(users));
}
export default function* rootSaga() {
  yield all([watchUserItemsLoaded()]);
}
