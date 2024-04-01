import React from 'react';
import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.box}>
                {/* <div><NavLink activeClassName={style.item_activeLink} className={style.item} to="/Profile"><img className={style.img} src='img/profile.png' alt='Profile' />&nbsp;Profile</NavLink></div>
                <div><NavLink className={style.item} to="/Dialogues"><img className={style.img} src='img/messages.png' alt='Messages' />&nbsp;Messages</NavLink></div>
                <div><NavLink className={style.item} to="News"><img className={style.img} src='img/news.png' alt='News' />&nbsp;News</NavLink></div>
                <div><NavLink className={style.item} to="Music"><img className={style.img} src='img/music.png' alt='Music' />&nbsp;Music</NavLink></div>
                <br></br>
                <div><NavLink className={style.item} to="Settings"><img className={style.img} src='img/settings.png' alt='Settings' />&nbsp;Settings</NavLink></div> */}
                {/* <div className={style.item}><a className={style.btn} href="##">Settings</a></div> */}
                <div className={style.item}><img className={style.img} src='img/profile.png' alt='Profile' /><NavLink className={({ isActive }) => isActive ? style.activeLink : ''} to="/Profile">&nbsp;Profile</NavLink></div>
                <div className={style.item}><img className={style.img} src='img/messages.png' alt='Messages' /><NavLink className={({ isActive }) => isActive ? style.activeLink : ''} to="/Dialogues">&nbsp;Messages</NavLink></div>
                <div className={style.item}><img className={style.img} src='img/news.png' alt='News' /><NavLink className={({ isActive }) => isActive ? style.activeLink : ''} to="News">&nbsp;News</NavLink></div>
                <div className={style.item}><img className={style.img} src='img/music.png' alt='Music' /><NavLink className={({ isActive }) => isActive ? style.activeLink : ''} to="Music">&nbsp;Music</NavLink></div>
                <br></br>
                <div className={style.item}><img className={style.img} src='img/settings.png' alt='Settings' /><NavLink className={({ isActive }) => isActive ? style.activeLink : ''} to="Settings">&nbsp;Settings</NavLink></div>

            </div>
        </nav>
    );
}

export default Navbar;