let state = {
    profilePage: {
        postsData: [
            { id: 1, text: 'How are you ?', counterLikes: 15 },
            { id: 2, text: "It's my first post", counterLikes: 4 },
            { id: 3, text: 'Why do you not answer me?', counterLikes: 76 }]
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
            { id: 3, text: 'Why do you not answer me?' }]
    }

};

export let addPost = (postMessage) => {
    let newPost = { id: 5, text: postMessage, counterLikes: 0 }
    state.profilePage.postsData.push(newPost);
};


export default state;