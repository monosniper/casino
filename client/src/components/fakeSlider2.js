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

const FakeSlider2 = () => {

    const games = [
        Game1,
        Game2,
        Game3,
        Game4,
        Game5,
    ];

    const awards = [
        {
            title: 'Мустанг квест',
            items: [
                'Ford Mustang',
                'Iphone 11 64gb',
                'Apple Watch Series 4',
            ]
        },
        {
            title: 'Онлайн днюшка',
            items: [
                'Tesla Model 3',
                'Oculus Rift (Black)',
                'Sony PlayStation 4',
            ]
        },
        {
            title: 'Турнир "Сокровища драконов',
            items: [
                'Samsung 55" 4K',
                'Samsung Galaxy Tab',
                'Iphone 11 64gb',
            ]
        },
    ]

    const [items, setItems] = useState(generateAwardGroups());

    function generateAwardGroups() {
        return awards.map(award => {
            const key = uuid();

            const children = award.items.map(item => {
                const id = getRandomInt(1000, 9999) + '****';
                const src = games[Math.floor(Math.random() * games.length)];

                return <Award src={src} id={id} title={item} />
            })

            return <AwardGroup children={children} title={award.title} key={key} />
        });
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
                <div className="fake-winner-title">{props.title}</div>
            </div>
        </div>
    }

    Award.propTypes = {
        title: PropTypes.number,
        id: PropTypes.string,
        src: PropTypes.string
    };

    function AwardGroup(props) {
        return <div className="fake-group">
            <div className="fake-group-title">{props.title}</div>
            <div className="fake-group-items">
                {props.children}
            </div>
        </div>
    }

    AwardGroup.propTypes = {
        src: PropTypes.any,
        items: PropTypes.any,
        id: PropTypes.string,
        title: PropTypes.any
    };

    return (
        <div className="fake fake-vertical">
            <h5 className="fake-title">Топ призов</h5>
            <Carousel
                children={items}
                enableTilt={true}
                itemsToShow={1}
                isRTL={false}
                pagination={false}
                showArrows={false}
                enableAutoPlay={true}
                verticalMode={true}
                onChange={(currentItem, pageIndex) => {
                    if(currentItem.index === items.length - 1) {
                        setItems([...items, items[currentItem.index - 2]]);
                    }
                }}
            />
        </div>
    );
};

export default FakeSlider2;