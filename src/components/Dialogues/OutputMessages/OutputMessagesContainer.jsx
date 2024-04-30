import { connect } from 'react-redux';
import OutputMessages from './OutputMessages';

const mapStateToProps = (state) => {
    return {
        massagesData: state.messagesPage.massagesData,
        isAuth: state.auth.isAuth
    }
}

const OutputMessagesContainer = connect(mapStateToProps)(OutputMessages);

export default OutputMessagesContainer;