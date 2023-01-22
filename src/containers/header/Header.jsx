import React from 'react';
import './header.css';
const Header = () => {
    return (
        <div className='aether__header section__padding' id='home'>
            <div className='aether__header-content'>
                <h1 className='gradient__text'> The new Aether Bot</h1>
                <p>Register now</p>
            </div>
                <input type='email' placeholder='Enter your email' />
                <button type='button'>Get notified</button>
        </div>
    );
};

export default Header;
