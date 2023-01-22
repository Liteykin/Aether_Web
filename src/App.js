import React from 'react';

import {Footer, Blog, Functions, Features, WhatAether, Header} from './containers';
import {CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatAether />
            <Features />
            <Functions />
            <CTA />
            <Blog />
            <Footer />
        </div>
    );
};

export default App;
