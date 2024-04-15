const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        // { id: 1, photoUrl: 'img/avatar.png', followed: true, firstName: 'Dmitry', lastName: 'Kavalenko', status: 'I am so pretty', location: { country: 'Belarus', city: 'Minsk' } },
        // { id: 2, photoUrl: 'img/avatar.png', followed: false, firstName: 'Petr', lastName: 'Litvinov', status: 'it so great', location: { country: 'Germanu', city: 'Brusel' } },
        // { id: 3, photoUrl: 'img/avatar.png', followed: false, firstName: 'Sasha', lastName: 'Stratys', status: 'Happy NEW year', location: { country: 'Usa', city: 'New York' } },
        // { id: 4, photoUrl: 'img/avatar.png', followed: true, firstName: 'Stas', lastName: 'Petrov', status: 'Hello world', location: { country: 'Turkey', city: 'Ancara' } },
        // { id: 5, photoUrl: 'img/avatar.png', followed: true, firstName: 'Masha', lastName: 'Vilnov', status: 'I need help', location: { country: 'Japan', city: 'Tokyo' } }
    ]
}


const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: true }
                    }
                    return user;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return { ...user, followed: false }
                    }
                    return user;
                })
            };

        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }


        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId })

export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })

export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;