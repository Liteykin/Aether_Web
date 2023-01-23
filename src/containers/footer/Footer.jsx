import React from 'react';
import './footer.css';
import logo from '../../assets/logo.svg';
const Footer = () => {
    return (
        <div className="aether__footer section__padding">
            <div className="aether__footer-heading">
                <h1 className="gradient__text">Dive into the code and see how Aether is changing the game, Explore our Github repository now!</h1>
            </div>
            <a  href='https://github.com/MVP-Team/Project-Aether'>
                <div className="aether__footer-btn">
                    <p>Explore now</p>
                </div>
            </a>

            <div className="aether__footer-copyright">
                <p>@2023 Aether. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;