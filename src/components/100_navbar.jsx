/**
 * NAVIGATION BAR COMPONENT
 * @summary short description for the file
 * @author Cliff Crerar
 * Created at     : 2018-06-01 19:55:10
 * Last modified  : 2018-06-07 07:44:53
 */

import React from 'react'; // import react
const imgName = ''
import logoImg from '../images/Logo/logoOrig_1_2_Tone_purple_beige.png'; // Navbar brand image
const brandName1 = 'Borduurders'; // Navbar brand name
const brandName2 = 'Embroiders'; // Navbar brand name

// Navbar links data object
const navLinksData = [
    { heading: 'Home', link: '#header4-1' },
    { heading: 'Service', link: '#svcHeading' },
    { heading: 'About', link: '#content5-7' },
    { heading: 'Clients', link: '#testimonials1-k' },
    { heading: 'Team', link: '#msg-box1-h' },
    { heading: 'Contact Us', link: '#msg-box2-b' },
    //{ heading: 'Contact', link: '#contacts3-e' },
];

const Navbar = () => {
    // navbar link
    const NavLinkElement = navLinksData.map(linkData => {
        return (
            <li key={linkData.link} className="nav-item">
                <a className="nav-link navbar-font" href={linkData.link}>{linkData.heading}</a>
            </li>
        );
    });
    return (
        <div className="nav-inner">
            <div className="nav-left brand-display-2">

                <div className="nav-left-image">
                    <img src={logoImg} title="navbar-brand-image" alt="navbar-brand" />
                </div>

                <div className="nav-left-text">
                    <p>{brandName1}</p>
                    <p>{brandName2}</p>
                </div>
            </div>

            <div className="nav-right">
                right
            </div>
        </div >
    );
};

export default Navbar;