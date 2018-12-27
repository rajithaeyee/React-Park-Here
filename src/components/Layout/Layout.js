import React from 'react';
import Navbar from './../Navbar/Navbar';
import MainPage from './../MainPage/Mainpage';
import Divder from './../Divider/Divider';
import About from './../About/About';

const layout = (props)=>{
    return(
        <div>
        <Navbar />
        <MainPage />
        <Divder />
        <About />
        <Divder />
        </div>
    );
}

export default layout;