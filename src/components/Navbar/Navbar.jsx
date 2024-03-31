import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.box}>
                <div><a className={style.item} href="/Profile"><img className={style.img} src='img/profile.png' alt='Profile' />&nbsp;Profile</a></div>
                <div><a className={style.item} href="/Dialogues"><img className={style.img} src='img/messages.png' alt='Messages' />&nbsp;Messages</a></div>
                <div><a className={style.item} href="News"><img className={style.img} src='img/news.png' alt='News' />&nbsp;News</a></div>
                <div><a className={style.item} href="Music"><img className={style.img} src='img/music.png' alt='Music' />&nbsp;Music</a></div>
                <br></br>
                <div><a className={style.item} href="Settings"><img className={style.img} src='img/settings.png' alt='Settings' />&nbsp;Settings</a></div>
                {/* <div className={style.item}><a className={style.btn} href="##">Settings</a></div> */}

            </div>
        </nav>
    );
}

export default Navbar;