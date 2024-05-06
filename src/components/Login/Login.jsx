import React from 'react';
import style from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import { InputForm } from '../AllComponents/FormControls/FormsControls';
import { required } from '../../utils/validators/validators';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"}
                    name={'login'}
                    component={InputForm}
                    validate={[required]} />
            </div>
            <div>
                <Field placeholder={"Password"}
                    name={'password'}
                    component={InputForm}
                    validate={[required]} />
            </div>
            <div>
                <Field component={'input'}
                    name={'rememberMe'}
                    type={"checkbox"} />
                remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
        <div className={style.content} >
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    );
}

export default Login;