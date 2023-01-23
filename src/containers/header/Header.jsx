import React, {useEffect, useState} from 'react';
import './header.css';
import application from '../../assets/application.png';
const Header = () => {
    return (
        <div className="aether__header section__padding" id="home">
    <div className="aether__header-content">
      <h1 className="gradient__text">Meet Aether, the revolutionary AI</h1>
      <p>Experience the power of AI as it transforms your world with our cutting-edge technology.</p>

      <div className="aether__header-content__input">
        <input type="email" id="input" placeholder="Your Email Address" />
        <button type="button" >Get Started</button>
      </div>
      </div>

    <div className="aether__header-image">
      <img src={application} />
    </div>
  </div>
    );
};

export default Header;
