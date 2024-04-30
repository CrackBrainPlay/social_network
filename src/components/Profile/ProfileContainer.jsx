import React from 'react';
import { connect } from 'react-redux';
// import axios from 'axios';
import Profile from './Profile';
import PreLoader from '../AllComponents/PreLoader/PreLoader';
import { getUserProfile } from '../../Redux/profileReducer';
import { useParams } from "react-router-dom";
// import { usersAPI } from '../../api/api';

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
            userId = 2;
        }
        this.props.getUserProfile(userId);
    }

    render() {
        return (<>
            <div style={{ backgroundColor: 'white' }}>
                {this.props.isFetching ? <PreLoader /> : null}
            </div>
            <Profile {...this.props}
                profile={this.props.profile} />
        </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

const WhitsUrlContainerComponent = withRouter(ProfileContainer)


const ProfilesContainer = connect(mapStateToProps, {
    getUserProfile
    // setUserProfile
})(WhitsUrlContainerComponent);

export default ProfilesContainer;
