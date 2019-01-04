import React from 'react';
import { Parallax } from 'react-parallax';

const contact = (props)=>{
    return(
        <Parallax bgImage={require('./../../assets/images/wall.jpg')} strength={500}>
        <div style={{ height: 700 }}>
        </div>
        </Parallax>
    );
}

export default contact;