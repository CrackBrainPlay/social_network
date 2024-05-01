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
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 31129;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
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
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }), withRouter, withAuthRedirect)
    (ProfileContainer);