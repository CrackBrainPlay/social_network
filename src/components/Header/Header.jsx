import React from 'react';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';
//import logo from './img/logo.svg'

const Header = (props) => {
    return (
        <header className={style.header}>
            {/* <img src={logo} alt='' /> */}
            {/* <img src="../../public/img/img2.png" alt='' /> */}
            <img src="img/logo.svg" alt='' />
            <div className={style.loginBlock}>
                {(props.isAuth) ? (<NavLink to={'/login'}>{props.login}</NavLink>) : 'Not Login'
                }
                {/* <NavLink to={'/login'}>{props.state.login}</NavLink> */}
            </div>
        </header>
    );
}

export default Header;