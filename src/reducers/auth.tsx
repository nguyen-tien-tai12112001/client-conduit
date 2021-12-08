import * as actionType from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action:any) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data, loading: false, errors: null };
    case actionType.UPDATE_PROFILE:
     
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
    // console.log(action.data)
      return { ...state, authData: action.data, loading: false, errors: null };
      // return state;
    case actionType.LOGOUT:
      localStorage.clear();

      return { ...state, authData: null, loading: false, errors: null };
    case actionType.LOGIN_FAIL:
      return { ...state, authData: null, loading: false, errors: action.er };
    case actionType.SIGNUP_FAIL:
      return { ...state, authData: null, loading: false, errors: action.er };

    default:
      return state;
  }
};

export default authReducer;
