import React from 'react';
import style from './AddPost.module.css';
import { Field, reduxForm } from 'redux-form';

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={style.dialogs}>
                <Field
                    placeholder={"Enter your message..."}
                    name={'newPostText'}
                    component={'textarea'}
                    className={style.dialogs_items} />
                <div>
                    <button className={style.item}>
                        Add Post
                    </button>
                </div>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({
    form: 'addPostForm',
    fields: ['message']
})(AddPostForm);

const AddPost = (props) => {

    let onAddPost = (data) => {
        debugger;
        props.addPost(data);
    }

    const onSubmit = (formData) => {
        onAddPost(formData.newPostText);
        formData.newPostText = '';
    }

    return (
        <div>
            {/* <div className={style.dialogs}>
                <textarea placeholder='Enter your message...'
                    className={style.dialogs_items}
                    onChange={onPostChange}
                    ref={newPostElement}
                    value={props.newPostText} />
            </div>
            <div className={style.box}>
                <button className={style.item} onClick={onAddPost}>Add Post</button>
            </div> */}
            <AddPostFormRedux onSubmit={onSubmit} />
        </div>
    )

};

export default AddPost;
