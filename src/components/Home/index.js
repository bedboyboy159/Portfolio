import { Link } from "react-router-dom";
import {Loader} from 'react-loaders'
import Logo from './Logo'


import './index.scss';

const Home = () => {
    return(
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hello! <br /> I'm Long Huynh,
                <br />
                Welcome to my portfolio.
                </h1>
                <h2>Fullstack Developer / Virginia Tech /</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />
        </div>
        <Loader type = "pacman" />
        </>
    );
}

export default Home