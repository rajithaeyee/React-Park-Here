import React from 'react';
import Navbar from './../Navbar/Navbar';

const layout = (props)=>{
    return(
        <div>
        <Navbar />
        {props.children}
        {/* <MainPage /> */}
        </div>
    );
}

export default layout;