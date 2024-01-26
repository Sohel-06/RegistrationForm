const SET_REGISTERED_USER_DETAILS = "SET_REGISTERED_USER_DETAILS";

interface User {
  name: string;
  age: number;
}

interface UsersState {
  users: User[];
}

interface SetRegisteredUserDetailsAction {
  type: typeof SET_REGISTERED_USER_DETAILS;
  payload: User;
}

const initialState: UsersState = {
  users: [],
};

const users = (state: UsersState = initialState, action: SetRegisteredUserDetailsAction): UsersState => {
  switch (action.type) {
    case SET_REGISTERED_USER_DETAILS:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
  }
  return state;
};

export const setRegisteredUserDetails = (payload: User): SetRegisteredUserDetailsAction => {
  return {
    type: SET_REGISTERED_USER_DETAILS,
    payload,
  };
};

export default users;