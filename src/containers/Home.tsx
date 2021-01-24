import React from "react";

import wd from '../assets/images/wd.jpg'

import './home.scss';

export const Home = () => {
    return (
        <div className={'home'}>
            <p>Welcome to my site.</p>
            <div className={'home__image'}>
                <img src={wd} alt="welcome-img"/>
            </div>
        </div>
    )
}
