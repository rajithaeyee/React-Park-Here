import React from 'react';
import './MainPage.css';
import { Parallax } from 'react-parallax';
import { flipInX, slideInLeft } from 'react-animations'
import Radium, { StyleRoot } from 'radium';
import Divder from './../Divider/Divider';
import About from './../About/About';
import Contact from './../Contact/Contact';

const styles = {
    insideStyles: {
        padding: 20,
        background: "gold",
        position: "absolute",
        top: "50%",
        left: "50%",
        color: "White",
        animation: '1s',
        animationName: Radium.keyframes(flipInX, 'flipInX')
    },

    insideStyles2: {
        padding: 20,
        background: "gold",
        position: "absolute",
        top: "70%",
        left: "50%",
        color: "White",
        animation: '3.5s',
        animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    },
}

const mainPage = (props) => {
    return (
        <div>
            <Parallax bgImage={require('./../../assets/images/wall.jpg')} strength={500}>
                <div style={{ height: 700 }}>
                    <StyleRoot>
                        <h1 style={styles.insideStyles}>No Space to Park Your Vehicle?</h1>
                        <h2 style={styles.insideStyles2}>Need Some #HELP?</h2>
                    </StyleRoot>
                </div>
            </Parallax>
            <Divder />
            <About />
            <Divder />
            <Contact />
        </div>
    );
}
export default mainPage;