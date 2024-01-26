import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import registration from "./reducers/registration";
import users from "./reducers/users";

const rootReducer = combineReducers({
  registration: registration,
  users: users,
});

const store = createStore(rootReducer);

export default store;
export type RootState = ReturnType<typeof rootReducer>