import * as actionTypes from "../actionTypes";

export const loginUser = loginData => {
  return {
    type: actionTypes.LOGIN_DATA,
    loginData
  };
};
