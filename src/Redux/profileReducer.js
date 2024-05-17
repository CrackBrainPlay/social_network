import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELET_POST = 'DELET_POST';

let initialState = {
    postsData: [
        { id: 1, text: 'How are you ?', counterLikes: 15 },
        { id: 2, text: "It's my first post", counterLikes: 4 },
        { id: 3, text: 'Why do you not answer me?', counterLikes: 76 }],
    profile: null,
    status: ''
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = action.newPostText;
            return {
                ...state,
                postsData: [...state.postsData,
                {
                    id: state.postsData.length + 1,
                    text: newPost, counterLikes: 0
                }]
            };

        case DELET_POST:
            return {
                ...state, postsData: state.postsData.filter(p => p.id !== action.postId)

            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };

        default:
            return state;
    }
}


export const addPost = (newPostText) => ({ type: ADD_POST, newPostText })

export const deletePost = (postId) => ({ type: DELET_POST, postId })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export default profileReducer;