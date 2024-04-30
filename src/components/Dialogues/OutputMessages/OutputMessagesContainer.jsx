import React from 'react';
import { connect } from 'react-redux';
import OutputMessages from './OutputMessages';
import PreLoader from '../../AllComponents/PreLoader/PreLoader';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';

class OutputMessageContainer extends React.Component {
    render() {
        return (<>
            <div style={{ backgroundColor: 'white' }}>
                {this.props.isFetching ? <PreLoader /> : null}
            </div>
            <OutputMessages {...this.props} />
        </>
        )
    }
}

const AuthRedirectComponent = withAuthRedirect(OutputMessageContainer);

const mapStateToProps = (state) => {
    return {
        massagesData: state.messagesPage.massagesData,
    }
}

const OutputMessagesContainer = connect(mapStateToProps, { OutputMessages })(AuthRedirectComponent);

export default OutputMessagesContainer;
