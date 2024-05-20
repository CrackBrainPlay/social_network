import React from 'react';
import { Field, reduxForm } from 'redux-form';
// import { connect } from 'react-redux';
import { InputForm, Textarea, createFormField } from '../../AllComponents/FormControls/FormsControls';

const ProfileDataForm = ({ profile, editMode, goToEditMode, handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <button>Сохранить</button>
            {error && (<div>
                {error}</div>)}
            <ul>
                <li>
                    <b>Имя</b>: {createFormField("FullName", "fullName", [], InputForm)}
                </li>
                <b>Статус поиска</b>:
                <Field component={'input'}
                    name={'lookingForAJob'}
                    type={"checkbox"} />
                <li>
                    <b>Профессиональные скилы</b>:
                    {createFormField("Профессиональные скилы", "lookingForAJobDescription", [], Textarea)}
                </li>
                <li>
                    <b>Обо мне</b>:
                    {createFormField("Обо мне", "aboutMe", [], Textarea)}
                </li>
                <li>
                    <b>id пользователя</b>: {profile.userId}
                </li>
                <li>
                    <b>Контакты</b>: {Object.keys(profile.contacts).map(key => {
                        return <div key={key}>
                            <b>{key}</b>: {createFormField(`${key}`, ("contacts." + key), [], InputForm)}
                        </div>
                    })}
                </li>
            </ul>

        </form>
    )
}



const ProfileDataFormReduxForm = reduxForm({ form: 'profile' })(ProfileDataForm);

export default ProfileDataFormReduxForm;