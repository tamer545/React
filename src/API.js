import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Switch, Route, Router, NavLink, Link} from 'react-router-dom';


const PlayerAPI = {
    players: [
        {number: 1, name: "BenBlocker", position: "G"},
        {number: 2, name: "DaveDefender", position: "D"},
        {number: 3, name: "MartinStuermer", position: "S"},
        {number: 4, name: "TimoTorwart", position: "T"},
    ],
    all: function () {
        return this.players
    },
    get: function (id) {
        const isPlayer = p => p.number === id;
        return this.players.find(isPlayer)
    }
}
export default PlayerAPI;