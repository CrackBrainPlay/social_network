import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import PreLoader from '../AllComponents/PreLoader/PreLoader';
import { getStatus, getUserProfile, updateStatus } from '../../Redux/profileReducer';
import { useParams } from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

export function withRouter(Children) {

    return (props) => {
        const match = { params: useParams() };
        return <Children {...props} match={match} />
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id;
        if (!id) {
            id = this.props.authorizedUserid;
            // if (!id) {
            //     this.props.history.push("/login");
            // }
        }
        // else {
        //     if (!this.props.isAuth) {
        //         return <Navigate to="/login" />;
        //     }
        // }
        this.props.getUserProfile(id);
        this.props.getStatus(id);
    }
    render() {
        return (<>
            <div style={{ backgroundColor: 'white' }}>
                {this.props.isFetching ? <PreLoader /> : null}
            </div>
            <Profile {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus} />
        </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserid: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }), withRouter, withAuthRedirect)
    (ProfileContainer);