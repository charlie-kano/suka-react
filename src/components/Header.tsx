import * as React from "react";
import { ContactDetails } from "./ContactDetails";
import { Navbar } from "./Navbar";
import logo from '../assets/images/logo.png';

export const Header = () => {
    return (
        <header className="header">
            <div className="header-sections">
                <div></div>
                {/* \change to gatsby img thing eventualy */}
                {/* <Img fluid={data.fileName.childImageSharp.fluid} alt="" /> */}
                <div className="header-sections__logo">
                    <img src={logo}></img>
                </div>

                <div>
                    <ContactDetails />
                </div>
            </div>
            {/* navbar */}
            <Navbar />
        </header>
    )
}