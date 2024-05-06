import React from 'react';
import style from './FormsControls.module.css';

// const FormControl = ({ input, meta, children, element, ...props }) => {
//     // const hasError = meta.touched && meta.error;
//     return (
//         <>
//             {props.children}
//             {/* <{props.element} {...input} {...props} hasError={hasError} className={style.dialogs_items + " " + (hasError && style.dialogs_items_error)} /> */}
//             {props.hasError &&
//                 <span className={style.dialogs_items_span}>
//                     {meta.error}
//                 </span>}
//         </>
//     )
// }

// export const Textarea = ({ meta, ...props }) => {
//     const hasError = meta.touched && meta.error;
//     const { input, meta, children, ...restProps } = props;
//     return (
//         <div className={style.dialogs}>
//             <FormControl {...props}>
//                 <textarea {...input} {...restProps} hasError={hasError} className={style.dialogs_items + " " + (hasError && style.dialogs_items_error)} />
//             </FormControl>
//         </div >
//     )
// }
export const Textarea = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.dialogs}>
            <textarea {...input} {...props}
                className={style.dialogs_items + " " + (hasError && style.dialogs_items_error)} />
            {hasError &&
                <span className={style.dialogs_items_span}>
                    {meta.error}
                </span>
            }
        </div >
    )
}

// export const InputForm = ({ meta, ...props }) => {
//     const hasError = meta.touched && meta.error;
//     const { input, meta, children, ...restProps } = props;
//     return (
//         <div className={style.inputform}>
//             <FormControl {...props}>
//                 <input {...input} {...restProps} hasError={hasError} className={style.dialogs_items + " " + (hasError && style.dialogs_items_error)} />
//             </FormControl>
//         </div >
//     )
// }
export const InputForm = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={style.inputform}>
            <input {...input} {...props}
                className={style.dialogs_items + " " + (hasError && style.dialogs_items_error)} />
            {hasError &&
                <span className={style.dialogs_items_span}>
                    {meta.error}
                </span>
            }
        </div >
    )
}

