import React from 'react';
// import React, { PureComponent } from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


// class Profile extends PureComponent {

//     render() {

//         return (
//             <div className={style.content} >
//                 <ProfileInfo profile={this.props.profile}
//                     status={this.props.status}
//                     updateStatus={this.props.updateStatus} />
//                 <MyPosts />
//             </div>
//         );
//     }
// }

// export default Profile;
const Profile = (props) => {

    return (
        <div className={style.content} >
            <ProfileInfo profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner} />
            <MyPosts />
        </div>
    );
}

export default Profile;