import logo from './logo.svg';
import './App.css';
import PlayerAPI from './API'
import {BrowserRouter, Switch, Route, Router, NavLink, Link} from 'react-router-dom';


export default function App() {

    return (
        <div>
            <h4 className="display-4">FullRoster2019</h4>
            <ul>
                {PlayerAPI.all().map(p => <li>{p.name}</li>)}
            </ul>

        </div>
    )
}

