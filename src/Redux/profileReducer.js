const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postsData: [
        { id: 1, text: 'How are you ?', counterLikes: 15 },
        { id: 2, text: "It's my first post", counterLikes: 4 },
        { id: 3, text: 'Why do you not answer me?', counterLikes: 76 }],
    newPostText: ''
}


const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            let newPost = state.newPostText;
            return {
                ...state,
                newPostText: '',
                postsData: [{ id: state.postsData.length + 1, text: newPost, counterLikes: 0 }, ...state.postsData]
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const onPostChangeActionCreator = (text) =>
({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer;