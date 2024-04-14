import { addMessageActionCreator, onMessageChangeActionCreator } from '../../../Redux/messagesReducer';
import AddMessage from './AddMessage';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        newMessageText: state.messagesPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onMessageChange: (text) => {
            dispatch(onMessageChangeActionCreator(text));
        }
    }
}

const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage);

export default AddMessageContainer;
