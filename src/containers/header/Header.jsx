import React from 'react';
import './header.css';
import network from '../../assets/network.png';
const Header = () => {
    const onEmailSubmit = values => {

    }
    return (
        <div className="aether__header section__padding" id="home">
    <div className="aether__header-content">
      <h1 className="gradient__text">Meet Aether, the revolutionary AI that's changing the game with its advanced capabilities and unparalleled intelligence</h1>
      <p>Experience the power of AI as it transforms your world with our cutting-edge technology.</p>

      <div className="aether__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
      </div>

    <div className="aether__header-image">
      <img src={network} />
    </div>
  </div>
    );
};

export default Header;
