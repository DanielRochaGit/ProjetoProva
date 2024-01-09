
import UserActionTypes from "../action-types";

const initialState = {
   currentUser : null,

};

const userReducer = (state = initialState, action) => {
 
 
  switch (action.type) {
   
    case UserActionTypes.LOGIN : 
       return {...state, currentUser: 10};

    case UserActionTypes.LOGOUT : 
       return {...state, currentUser: null};

    default : return state
 }
  
};


export default userReducer



