// import { addMessageActionCreator, onMessageChangeActionCreator } from '../../../Redux/messagesReducer';
import { addMessage } from '../../../Redux/messagesReducer';
import AddMessage from './AddMessage';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText
    }
}

const AddMessageContainer = connect(mapStateToProps, {
    addMessage
})(AddMessage);

export default AddMessageContainer;
