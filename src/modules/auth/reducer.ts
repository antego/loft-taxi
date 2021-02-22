import { stat } from "fs";
import { login, logout } from "./actions";

const initialState = {
  isLoggedIn: false,
};

const authReducer = (state = initialState, action: { type: string }) => {
  switch (action.type) {
    case login.toString(): {
      return {
        ...state,
        isLoggedIn: true,
      };
    }
    case logout.toString(): {
      return {
        ...state,
        isLoggedIn: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
