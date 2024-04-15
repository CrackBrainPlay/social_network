import { connect } from 'react-redux';
import Users from './Users';
import { followAC, setUsersAC, unfollowAC } from '../../Redux/usersReducer';


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDipatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDipatchToProps)(Users);

export default UsersContainer;
