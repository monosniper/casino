import React from 'react';
import GameItem from "./GameItem";
import Game1 from '../assets/images/games/1.jpg';
import Game2 from '../assets/images/games/2.jpg';
import Game3 from '../assets/images/games/3.jpg';
import Game4 from '../assets/images/games/4.jpg';
import Game5 from '../assets/images/games/5.jpg';

const GameList = () => {

    const games = [
        {id: 1, src: Game1, title: 'Game #1'},
        {id: 2, src: Game2, title: 'Game #2'},
        {id: 3, src: Game3, title: 'Game #3'},
        {id: 4, src: Game4, title: 'Game #4'},
        {id: 5, src: Game5, title: 'Game #5'},
        {id: 6, src: Game1, title: 'Game #1'},
        {id: 7, src: Game2, title: 'Game #2'},
        {id: 8, src: Game3, title: 'Game #3'},
        {id: 9, src: Game4, title: 'Game #4'},
        {id: 10, src: Game5, title: 'Game #5'},
        {id: 11, src: Game1, title: 'Game #1'},
        {id: 12, src: Game2, title: 'Game #2'},
        {id: 13, src: Game3, title: 'Game #3'},
        {id: 14, src: Game4, title: 'Game #4'},
        {id: 15, src: Game5, title: 'Game #5'},
    ]

    return (
        <div className="game-list">
            {games.map((game) => <GameItem {...game} />)}
        </div>
    );
};

export default GameList;