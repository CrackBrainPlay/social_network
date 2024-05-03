import React from 'react';
// import style from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });

    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    componentDidUpdate(prevProps, prevState) {
        debugger;
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
        console.log('componentDidUpdate');
    }

    render() {
        return (<div>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode}>
                        {this.props.status || 'You do not have status'}
                    </span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange}
                        autoFocus={true}
                        value={this.state.status}
                        onBlur={this.deactivateEditMode}>
                    </input>
                </div>}
        </div>
        )
    }
}
export default ProfileStatus;