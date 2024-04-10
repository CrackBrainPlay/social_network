import React from 'react';
import style from './SideBar.module.css';
import ProfileBox from './ProfileBox/ProfileBox'
import store from './../../../Redux/store';

let state = store.getState();

const SideBar = (props) => {

    // let profileElements = props.profilePerson.dialogsData
    let profileElements = state.messagesPage.dialogsData
        .slice(0, 3).map(person => (<ProfileBox itemName={person.name} id={person.id} />))

    return (
        <div className={style.sideBar}>
            <div className={style.box}>
                <div className={style.item}>
                    {profileElements}
                </div>
            </div>
        </div>
    );
}

export default SideBar;