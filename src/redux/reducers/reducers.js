import * as actionTypes from '../actions/types';
const initialState = {
  userData: {},
  loading: false,
  activityIndicatorText: '',
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_USER_DATA:
      console.log('this  is acvtion. payload', action.payload);
      return {
        ...state,
        userData: action.payload,
      };
    case actionTypes.START_LOADING:
      return {
        ...state,
        loading: true,
        activityIndicatorText: action.payload,
      };

    case actionTypes.NOT_LOADING:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
}
