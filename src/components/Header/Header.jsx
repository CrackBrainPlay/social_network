import React from 'react';
import style from './Header.module.css';
//import logo from './img/logo.svg'

const Header = () => {
    return (
        <header className={style.header}>
            {/* <img src={logo} alt='' /> */}
            {/* <img src="../../public/img/img2.png" alt='' /> */}
            <img src="https://ivf-extruders.ru/images/logo.svg" alt='' />

        </header>
    );
}

export default Header;