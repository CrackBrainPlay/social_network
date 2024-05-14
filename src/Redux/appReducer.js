// import { authAPI } from "../api/api";
import { getAuthUserData } from "./authReducer";
// import { initialize, stopSubmit } from "redux-form";

// const SET_USER_DATA = 'SET_USER_DATA';
// const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
};


const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case INITIALIZED_SUCCESS:
            // debugger;
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS })

// export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    // debugger;
    promise.then(() => {
        dispatch(initializedSuccess());
    });
}

export default appReducer;