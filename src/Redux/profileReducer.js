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

        case ADD_POST: {
            let newPost = { id: 5, text: state.newPostText, counterLikes: 0 };
            let stateCopy = { ...state };
            stateCopy.postsData = [...state.postsData]
            stateCopy.postsData.unshift(newPost);
            // state.postsData.unshift(newPost);
            // state.newPostText = '';
            stateCopy.newPostText = '';
            return stateCopy;
        }

        case UPDATE_NEW_POST_TEXT: {
            // state.newPostText = action.newText;
            let stateCopy = { ...state };
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }

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