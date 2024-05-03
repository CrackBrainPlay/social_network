import { addPost } from '../../../../Redux/profileReducer';
import AddPost from './AddPost';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}

const AddPostContainer = connect(mapStateToProps, { addPost })(AddPost);

export default AddPostContainer;
