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
import moment from "moment";
import 'moment/locale/ru';

function Winner(props) {
    return <div className="fake-winner">
        <Avatar circle src={props.src} />
        <span className="fake-winner-id">ID: {props.id}</span>
        <span className="fake-winner-amount">- {props.amount} грн.</span>
    </div>
}

Winner.propTypes = {
    amount: PropTypes.number,
    id: PropTypes.string
};
const FakeSlider1 = () => {

    const games = [
        Game1,
        Game2,
        Game3,
        Game4,
        Game5,
    ];

    const [items, setItems] = useState([
        generateWinner(),
        generateWinner(),
        generateWinner(),
        generateWinner(),
    ]);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function generateWinner() {
        const key = uuid();
        const id = getRandomInt(1000, 9999);
        const amount = getRandomInt(100, 4000);
        const src = games[Math.floor(Math.random() * games.length)];

        return <Winner key={key} src={src} id={id + '****'} amount={amount} />
    }

    return (
        <Row className='fake'>
            <Col sm={12} md={2}>Сейчас выигравают:</Col>
            <Col sm={12} md={8}>
                <Carousel
                    children={items}
                    enableTilt={true}
                    itemsToShow={3}
                    isRTL={false}
                    pagination={false}
                    showArrows={false}
                    enableAutoPlay={true}
                    onChange={(currentItem, pageIndex) => {
                        if(currentItem.index === items.length - 3) {
                            setItems([...items, generateWinner()]);
                        }
                    }
                    }>

                </Carousel>
            </Col>
            <Col sm={12} md={2}>{moment().locale('ru').format('DD MMMM yyyy')}</Col>
        </Row>
    );
};

export default FakeSlider1;