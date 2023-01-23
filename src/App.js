import React, {useState} from 'react';

import {Footer, Features, WhatAether, Header} from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <WhatAether />
            <Features />
            <Footer />
        </div>
    );
};

export default App;