import React from 'react';
import { connect } from 'react-redux';
import OutputMessages from './OutputMessages';
import PreLoader from '../../AllComponents/PreLoader/PreLoader';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';

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


const mapStateToProps = (state) => {
    return {
        massagesData: state.messagesPage.massagesData,
    }
}

// compose(connect(mapStateToProps, { OutputMessages }) ,withAuthRedirect )(OutputMessageContainer)

// const AuthRedirectComponent = withAuthRedirect(OutputMessageContainer);

// const OutputMessagesContainer = connect(mapStateToProps, { OutputMessages })(AuthRedirectComponent);

// export default OutputMessagesContainer;
export default compose(
    connect(mapStateToProps, { OutputMessages }), withAuthRedirect)
    (OutputMessageContainer);
