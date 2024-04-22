import { connect } from 'react-redux';
import React from 'react';
import axios from 'axios';
import Header from './Header';
import { setAuthUserData } from '../../Redux/authReducer';
// import PreLoader from '../AllComponents/PreLoader/PreLoader';

class HeaderContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then(response => {
                // debugger;
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
                // this.props.authReducer(response.data);
            });
    }

    // onPageChanged = (pageNumber) => {
    //     this.props.setCurrentPage(pageNumber);
    //     this.props.toggleIsFetching(true);
    //     axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
    //         .then(response => {
    //             this.props.toggleIsFetching(false);
    //             this.props.setUsers(response.data.items)
    //         });
    // }

    render() {
        return (<>
            {/* <PreLoader isFetching={this.props.isFetching} /> */}
            {/* <div style={{ backgroundColor: 'white' }}>
                {this.props.isFetching ? <PreLoader /> : null}
            </div> */}

            <Header {...this.props} />
        </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
        // users: state.usersPage.users,
        // pageSize: state.usersPage.pageSize,
        // totalUsersCount: state.usersPage.totalUsersCount,
        // currentPage: state.usersPage.currentPage,
        // isFetching: state.usersPage.isFetching
    }
}

// const HeaderContainer = connect(mapStateToProps,
//     {
//         follow,
//         unfollow,
//         setUsers,
//         setCurrentPage,
//         setTotalUsersCount,
//         toggleIsFetching
//     }
// )(HeaderContainer);

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);
