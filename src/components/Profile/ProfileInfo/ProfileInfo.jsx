import React, { useState } from 'react';
import style from './ProfileInfo.module.css';
import PreLoader from '../../AllComponents/PreLoader/PreLoader';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);
    if (!props.profile) {
        return <PreLoader />
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    // let [status, setStatus] = useState(props.status);

    // useEffect(() => {
    //     setStatus(props.status);
    // }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        // props.updateStatus(status);
    }

    const onSubmit = (formData) => {
        // console.log(formData);
        props.saveProfile(formData).then(
            () => {
                deactivateEditMode();
            }
        );
    }

    return (
        <div className={style.content}>
            {/* <img className={style.img} src={(props.profile.photos.large === null) ? 'img/avatar.png' : props.profile.photo.large} alt='' /> */}
            <img className={style.img} src={props.profile.photos.large || 'img/avatar.png'} alt='' />
            {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
            {/* <img className={style.img} src={props.profile.photos.large} alt='' /> */}
            <div className={style.boxInfo}>
                {editMode ? <ProfileDataForm profile={props.profile}
                    editMode={editMode}
                    goToEditMode={deactivateEditMode}
                    onSubmit={onSubmit}
                    initialValues={props.profile} /> :
                    <ProfileData profile={props.profile} editMode={editMode} goToEditMode={activateEditMode} />}

                {/* <button onClick={deactivateEditMode}>Сохранить</button> */}
                <ProfileStatusWithHooks status={props.status}
                    updateStatus={props.updateStatus} />
            </div>
        </div>
    );
}

const ProfileData = ({ profile, editMode, goToEditMode }) => {
    return (
        <>
            {!editMode && <button onClick={goToEditMode}>Редактировать</button>}
            <ul>
                <li>
                    <b>Имя</b>: {profile.fullName}
                </li>
                <li>
                    <b>Статус поиска</b>: {profile.lookingForAJob ? 'Да' : 'Нет'}
                </li>
                {profile.lookingForAJob &&
                    <li>
                        <b>Точно ли ищу</b>: {profile.lookingForAJobDescription}
                    </li>}
                <li>
                    <b>Обо мне</b>: {profile.aboutMe}
                </li>
                <li>
                    <b>id пользователя</b>: {profile.userId}
                </li>
                <li>
                    <b>Контакты</b>: {Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                    })}
                </li>
            </ul>
        </>
    )
}




const Contact = ({ contactTitle, contactValue }) => {
    return (
        <div><b>{contactTitle}</b>: {contactValue}</div>
    )
}

export default ProfileInfo;