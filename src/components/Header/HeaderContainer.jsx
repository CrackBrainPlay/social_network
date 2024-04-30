import { connect } from 'react-redux';
import React from 'react';
import Header from './Header';
import { getAuthUserData } from '../../Redux/authReducer';
import PreLoader from '../AllComponents/PreLoader/PreLoader';

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (<>
            <Header {...this.props}>
                <div style={{ backgroundColor: 'white' }}>
                    {this.props.isFetching ? <PreLoader /> : null}
                </div>
            </Header>
        </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);
