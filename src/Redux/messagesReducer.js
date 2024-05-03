const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_MESSAGE:
            const newMessage = action.newMessageBody;
            return {
                ...state,
                massagesData: [...state.massagesData,
                { id: state.massagesData.length + 1, text: newMessage }]
            };

        default:
            return state;
    }
}

export const addMessage = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody })

export default messagesReducer;