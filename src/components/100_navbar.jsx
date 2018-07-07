/**
 * NAVIGATION BAR COMPONENT
 * @summary short description for the file
 * @author Cliff Crerar
 * Created at     : 2018-06-01 19:55:10
 * Last modified  : 2018-07-06 21:10:02
 */

import React from 'react'; // import react
//import logoImg from '../images/ht_nav_logo.png'; // Navbar brand image
import logoImg from '../images/ht_nav_logo_2.png'; // Navbar brand image
import needle from '../images/needle-image-1.png'; // logo image
import navLinksShow from '../js/navlinks'; // Navlinks function
const brandName1 = 'Borduurders'; // Navbar brand name
const brandName2 = 'Embroiders'; // Navbar brand name

// Navbar links data object
const navLinksData = [
    { heading: 'Home', link: '#header4-1', id: 'navhome' },
    { heading: 'Service', link: '#service', id: 'navService' },
    { heading: 'About', link: '#about', id: 'navAbout' },
    { heading: 'Clients', link: '#client', id: 'navClient' },
    { heading: 'Team', link: '#team', id: 'navTeam' },
    { heading: 'Contact', link: '#contact', id: 'navContact' },
    //{ heading: 'Contact', link: '#contacts3-e' },
];

const Navbar = () => {
    // navbar link
    const NavLinkElement = navLinksData.map((linkData, idx) => {
        if (idx === 0) {
            return (
                <a key={linkData.link} id={linkData.id} className="active nav-a" onClick={navLinksShow} href={linkData.link}>{linkData.heading}</a>
            );
        } else {
            return (
                <a key={linkData.link} id={linkData.id} className="nav-a" onClick={navLinksShow} href={linkData.link}>{linkData.heading}</a>
            );
        }

    });

    return (
        <div className="nav-inner">

            <div className="nav-left nav-left-1">

                <div className="nav-left-logo">

                    <div className="nav-left-image">
                        <img src={logoImg} title="navbar-brand-image" alt="navbar-brand" />
                    </div>

                    <div className="nav-left-text">
                        <p>{brandName1}</p>
                        <p>{brandName2}</p>
                    </div>
                </div>

                <img className="nav-needle-img nav-needle-img-2" src={needle} />
            </div>

            <div className="mobile-menu" >
                <button className="ham-burger fas fa-bars" onClick={navLinksShow}></button>
            </div>

            <div id="nav-right" className="nav-right">
                {NavLinkElement}
            </div>

        </div>
    );
};

export default Navbar;