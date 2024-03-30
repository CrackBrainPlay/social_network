import React from 'react';
import './../App.css';

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='nav__box'>
                <div><a className='nav__btn' href="#">Profile</a></div>
                <div><a className='nav__btn' href="#">Messages</a></div>
                <div><a className='nav__btn' href="#">News</a></div>
                <div><a className='nav__btn' href="#">Music</a></div>
                <br></br>
                <div><a className='nav__btn' href="#">Settings</a></div>
            </div>
        </nav>
    );
}

export default Navbar;