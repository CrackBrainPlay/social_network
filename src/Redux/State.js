let store = {

    _state: {
        profilePage: {
            postsData: [
                { id: 1, text: 'How are you ?', counterLikes: 15 },
                { id: 2, text: "It's my first post", counterLikes: 4 },
                { id: 3, text: 'Why do you not answer me?', counterLikes: 76 }],
            newPostText: ''
        },
        messagesPage: {
            dialogsData: [
                { id: 1, name: 'Petr' },
                { id: 2, name: 'Stas' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Masha' },
                { id: 5, name: 'Pasha' },
                { id: 6, name: 'Dima' }],
            massagesData: [
                { id: 1, text: 'Hello' },
                { id: 2, text: 'How are you?' },
                { id: 3, text: 'How are you?' },
                { id: 4, text: 'Why do you not answer me?' }]
        }
    },

    _subscribe(observer) {
        this._callSubscriber = observer;
    },
    _callSubscriber() {

    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = { id: 5, text: this._state.profilePage.newPostText, counterLikes: 0 };
            this._state.profilePage.postsData.unshift(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}

export default store;