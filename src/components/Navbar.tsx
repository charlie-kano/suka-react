import * as React from "react";
import {
    Link
} from "react-router-dom";
import hand from '../assets/images/hand.svg';
import './navbar.scss';


export const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav__container">
                <Link to="/" className="nav__brand">
                    <img src={hand} alt="home-svg" className="nav__logo" />
                </Link>

                <div className="nav-items">
                    <Link className="nav-items__link" to="/plants">Plant Medicine</Link>
                    <Link className="nav-items__link" to="/shaman">Shamanic Healing</Link>
                    <Link className="nav-items__link" to="/reiki">Reiki Master</Link>
                </div>
            </div>
        </nav>
    )
}
