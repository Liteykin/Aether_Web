import React, {useState} from 'react';

import {Footer, Features, WhatAether, Header} from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => {

    const[returnedData, setReturnedData] = useState(['hello']);

    const fetchData = async () => {
        const newData = await fetch('/hello', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            console.log(newData);
            setReturnedData(newData);
    }
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
