import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

const Menu = () => (
    <>
    <p><a href='#home'/>Home</p>
    <p><a href='#waether'/>What is Aether?</p>
    <p><a href='#functions'/>Functions</p>
    <p><a href='#Blog'/>Blog</p>
    </>
)

const Navbar = () => {
    const {toggleMenu, setToggleMenu} = useState(false);
    return (
        <div className='aether__navbar'>
            <div className='aether__navbar-links'>
                <div className='aether__navbar-links_logo'>
                    <img src={logo} alt='logo' />
                </div>
                <div className='aether__navbar-links_container'>
                    <Menu />
                </div>
            </div>
            <div className='aether__navbar-sign'>
            <p>Sign In</p>
            <button type='button'>Sign Up</button>
            </div>
            <div className="aether__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                <div className="aether__navbar-menu_container scale-up-center">
                    <div className="aether__navbar-menu_container-links">
                        <Menu />
                    </div>
                <div className="aether__navbar-menu_container-links-sign">
                    <p>Sign in</p>
                    <button type="button">Sign up</button>
                </div>
            </div>
            )}
            </div>
        </div>
    );
};

export default Navbar;
