import * as actionTypes from "../typeDefs/userConstants";

const USER_INITIAL_STATE = {
  user: {username: " ", email:" ", password:" "},
};

export const userReducer = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {

    case actionTypes.SET_USERNAME:
      
      return {
          ...state,
          user: {...state.user, username: action.username}
      } 

    case actionTypes.SET_PASSWORD:
      
      return {
          ...state,
          user: {...state.user, password: action.password}
      }

    case actionTypes.GET_USER:
        return {
            ...state,
            user: {...state.user}
        } 
    case actionTypes.SET_EMAIL:
        return {
            ...state,
            user: {...state.user, email: action.email}
        }
    case actionTypes.REGISTER_USER:
      return{
        ...state
      }

    default:
      return state;
  }
};
