import React, {useState} from 'react';
import Carousel from 'react-elastic-carousel'
import {Col, Row} from "reactstrap";
import Game1 from '../assets/images/games/1.jpg';
import Game2 from '../assets/images/games/2.jpg';
import Game3 from '../assets/images/games/3.jpg';
import Game4 from '../assets/images/games/4.jpg';
import Game5 from '../assets/images/games/5.jpg';
import * as PropTypes from "prop-types";
import {Avatar} from "rsuite";
import {v4 as uuid} from 'uuid';

const FakeSlider3 = () => {

    const games = [
        Game1,
        Game2,
        Game3,
        Game4,
        Game5,
    ];

    const [items, setItems] = useState([
        generateAward(),
        generateAward(),
        generateAward(),
        generateAward(),
        generateAward(),
    ]);

    function generateAward() {
        const id = getRandomInt(1000, 9999) + '****';
        const src = games[Math.floor(Math.random() * games.length)];
        const bonus = getRandomInt(100, 1000);

        return <Award src={src} id={id} bonus={bonus} />
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function Award(props) {
        return <div className="fake-winner">
            <Avatar circle src={props.src} />
            <div class='fake-winner-right'>
                <div className="fake-winner-id">ID: {props.id}</div>
                <div className="fake-winner-title">БОНУС: {props.bonus} грн.</div>
            </div>
        </div>
    }

    Award.propTypes = {
        title: PropTypes.number,
        id: PropTypes.string,
        src: PropTypes.string
    };

    return (
        <div className="fake fake-vertical">
            <h5 className="fake-title">Полученные бонусы</h5>
            <Carousel
                children={items}
                enableTilt={true}
                itemsToShow={4}
                isRTL={false}
                pagination={false}
                showArrows={false}
                enableAutoPlay={true}
                verticalMode={true}
                onChange={(currentItem, pageIndex) => {
                    if(currentItem.index === items.length - 4) {
                        setItems([...items, generateAward()]);
                    }
                }}
            />
        </div>
    );
};

export default FakeSlider3;