import React from 'react';
import {Button} from "rsuite";
import {Link} from "react-router-dom";

const GameItem = (props) => {
    return (
        <div className='game-list-item'>
            <div className="game-list-item-bg" style={{backgroundImage: `url(${props.src})`}} />
            <div className="game-list-item-overflow">
                <span className="game-list-item-title">{props.title}</span>
                <Button className="pink-btn rounded" size='sm'>Играть</Button>
                <Link to="#" className="game-list-item-demo">Демо</Link>
            </div>
        </div>
    );
};

export default GameItem;