import * as actionTypes from "../actionTypes";

const initialState = {
  isUserLogin: false,
  storeUserData: [
    { userid: "suman@gmail.com", password: "suman" },
    { userid: "kumar@gmail.com", password: "kumar" }
  ]
};
const CheckLoginData = (state, action) => {
  const { storeUserData } = state;
  const { loginData } = action;
  const { userid, password } = loginData;
  console.log("action", userid, password);
  const matchUserData = storeUserData.find(
    item => item.userid === userid && item.password === password
  );
  const matchUserDataTemp = matchUserData ? true : false;
  console.log("matchUserData", matchUserDataTemp);
  return { ...state, isUserLogin: matchUserDataTemp };
};
const loginReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_DATA:
      return CheckLoginData(state, action);
    default:
      return state;
  }
};

export default loginReducers;
