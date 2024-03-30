import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.box}>
                <div><a className={style.item} href="##">Profile</a></div>
                <div><a className={style.item} href="##">Messages</a></div>
                <div><a className={style.item} href="##">News</a></div>
                <div><a className={style.item} href="##">Music</a></div>
                <br></br>
                <div><a className={style.item} href="##">Settings</a></div>
                {/* <div className={style.item}><a className={style.btn} href="##">Settings</a></div> */}

            </div>
        </nav>
    );
}

export default Navbar;