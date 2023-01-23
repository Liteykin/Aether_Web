import React, { useState } from 'react';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';

const Menu = () => (
    <>
        <a href='#home' className='aether__buttons'> <p>Home</p></a>
        <a href='#waether' className='aether__buttons'> <p>What is Aether?</p></a>
        <a href='#process' className='aether__buttons'> <p>Process</p></a>
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
            <div className="aether__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                {toggleMenu && (
                <div className="aether__navbar-menu_container scale-up-center">
                    <div className="aether__navbar-menu_container-links-sign">
                        <Menu />
                    </div>
            </div>
            )}
            </div>
        </div>
    );
};

export default Navbar;
