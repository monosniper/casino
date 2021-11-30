import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import bg from "../assets/images/bg.jpg";
import bg2 from "../assets/images/bg2.jpg";
import bg3 from "../assets/images/bg3.jpeg";

const Slider = () => {

    const images = [
        { url: bg },
        { url: bg2 },
    ];

    return (
        <AwesomeSlider>
            <div data-src={bg} />
            <div data-src={bg2} />
            <div data-src={bg3} />
        </AwesomeSlider>
    );
};

export default Slider;