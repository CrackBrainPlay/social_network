import React from 'react';
import style from './Header.module.css';
import logo from './img/logo.svg'

const Header = () => {
    return (
        <header className={style.header}>
            <img src={logo} alt='' />
            {/* <img src="../../public/img/img2.png" alt='' /> */}
            {/* <img src="https://media.istockphoto.com/id/1212911887/photo/futuristic-digital-block-chain-background.jpg?s=1024x1024&w=is&k=20&c=Pu_7-kKU2bckXGeEU21ZG84Y_WpaKmh4vzBEA0HwE4E=" alt='' /> */}

        </header>
    );
}

export default Header;