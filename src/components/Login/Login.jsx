import React from 'react';
import style from './Login.module.css';
import { Field, reduxForm } from 'redux-form';
import { InputForm } from '../AllComponents/FormControls/FormsControls';
import { required } from '../../utils/validators/validators';
import { connect } from 'react-redux';
import { login } from '../../Redux/authReducer';
import { Navigate } from "react-router-dom";
import styleF from "../AllComponents/FormControls/FormsControls.module.css"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"}
                    name={'email'}
                    component={InputForm}
                    validate={[required]} />
            </div>
            <div>
                <Field placeholder={"Password"}
                    name={'password'}
                    component={InputForm}
                    validate={[required]}
                    type={'password'} />
            </div>
            <div>
                <Field component={'input'}
                    name={'rememberMe'}
                    type={"checkbox"} />
                remember me
            </div>
            {props.error && (<div className={styleF.formSummaryError}>
                {props.error}
            </div>)}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        // console.log(formData);
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }
    return (
        <div className={style.content} >
            <h1>Login</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>
    );
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);