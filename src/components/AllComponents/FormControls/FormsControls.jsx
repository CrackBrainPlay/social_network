import React from 'react';
import style from './FormsControls.module.css';
import { Field } from 'redux-form';

export const Textarea = ({ input, meta: { touched, error }, ...props }) => {
    const hasError = touched && error;
    return (
        <div className={style.dialogs}>
            <textarea {...input} {...props}
                className={style.dialogs_items + " " + (hasError && style.dialogs_items_error)} />
            {hasError &&
                <span className={style.dialogs_items_span}>
                    {error}
                </span>
            }
        </div >
    )
}

export const InputForm = ({ input, meta: { touched, error }, ...props }) => {
    const hasError = touched && error;
    return (
        <div className={style.inputform}>
            <input {...input} {...props}
                className={style.dialogs_items + " " + (hasError && style.dialogs_items_error)} />
            {hasError &&
                <span className={style.dialogs_items_span}>
                    {error}
                </span>
            }
        </div >
    )
}

export const createFormField = (placeholder, name, validate, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder}
            name={name}
            component={component}
            validate={validate}
            {...props} />
        {text}
    </div>
)


