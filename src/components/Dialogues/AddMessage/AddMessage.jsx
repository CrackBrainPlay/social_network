import React from 'react';
import style from './AddMessage.module.css';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../AllComponents/FormControls/FormsControls';
import { maxLengthCreator, required } from '../../../utils/validators/validators';

const maxLength = maxLengthCreator(10);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.dialogs}>
                <Field
                    placeholder={"Enter your message..."}
                    name={'newMessageText'}
                    // component={'textarea'}
                    component={Textarea}
                    // className={style.dialogs_items}
                    validate={[required, maxLength]} />
                <div>
                    <button className={style.item}>
                        Add Post
                    </button>
                </div>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'addMessageForm',
    fields: ['message']
})(AddMessageForm);

const AddMessage = (props) => {

    let addMessage = (data) => {
        props.addMessage(data);
    }

    const onSubmit = (formData) => {
        addMessage(formData.newMessageText);
        formData.newMessageText = '';
    }

    return (
        <div>
            <AddMessageFormRedux onSubmit={onSubmit} />
        </div>
    )

};

export default AddMessage;
