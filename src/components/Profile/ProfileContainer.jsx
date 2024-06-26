import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import PreLoader from '../AllComponents/PreLoader/PreLoader';
import { getStatus, getUserProfile, savePhoto, saveProfile, updateStatus } from '../../Redux/profileReducer';
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

    constructor(props) {
        super(props);
        this.userRender = this.userRender.bind(this);
    }

    userRender() {
        let id = this.props.match.params.userId;
        if (!id) {
            id = this.props.authorizedUserid;
        }
        this.props.getUserProfile(id);
        this.props.getStatus(id);
    }

    componentDidMount() {
        this.userRender();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.userRender();
        }
    }

    saveProfile() {

    }

    render() {
        return (<>
            <div style={{ backgroundColor: 'white' }}>
                {this.props.isFetching ? <PreLoader /> : null}
            </div>
            <Profile {...this.props}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto} />
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
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }), withRouter, withAuthRedirect)
    (ProfileContainer);