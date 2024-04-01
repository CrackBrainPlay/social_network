import React from 'react';
import style from './Dialogues.module.css';
import { NavLink } from 'react-router-dom';
import PersonProfile from './PersonProfile/PersonProfile';

const Dialogues = (props) => {
    return (
        <div className={style.dialogs} >
            <div className={style.dialogs_items} >
                <div className={style.item}>
                    {/* <img className={style.img} src='img/avatar.png' alt='Profile' />
                    <NavLink className={({ isActive }) => isActive ? style.activeLink : ''} to="/Dialogues">
                        &nbsp;Петя
                    </NavLink> */}

                    <NavLink className={({ isActive }) => isActive ? style.activeLink : ''} to='/Dialogues/1'>
                        <PersonProfile personName='Petr' />
                    </NavLink>
                </div>
                <div className={style.item}>
                    <NavLink className={({ isActive }) => isActive ? style.activeLink : ''} to='/Dialogues/2'>
                        <PersonProfile personName='Stas' />
                    </NavLink>
                </div>
                <div className={style.item}>
                    <NavLink className={({ isActive }) => isActive ? style.activeLink : ''} to='/Dialogues/3'>
                        <PersonProfile personName='Sasha' />
                    </NavLink>
                </div>
                <div className={style.item}>
                    <NavLink className={({ isActive }) => isActive ? style.activeLink : ''} to='/Dialogues/4'>
                        <PersonProfile personName='Masha' />
                    </NavLink>
                </div>
                <div className={style.item}>
                    <NavLink className={({ isActive }) => isActive ? style.activeLink : ''} to='/Dialogues/5'>
                        <PersonProfile personName='Pasha' />
                    </NavLink>
                </div>
                <div className={style.item}>
                    <NavLink className={({ isActive }) => isActive ? style.activeLink : ''} to="/Dialogues/6">
                        <PersonProfile personName='Dima' />
                    </NavLink>
                </div>
            </div>
            <div className={style.messages}>
                <div className={style.message}>Hello</div>
                <div className={style.message}>How are you?</div>
                <div className={style.message}>Why do you not answer me?</div>
            </div>
        </div>
    );
}

export default Dialogues;