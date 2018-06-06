/**
 * NAVIGATION BAR COMPONENT
 * @summary short description for the file
 * @author Cliff Crerar
 * Created at     : 2018-06-01 19:55:10
 * Last modified  : 2018-06-06 07:04:13
 */

import React from 'react'; // import react
import logoImg from '../images/Logo/logoOrig_1_2_Tone_white_grey.png'; // Navbar brand image
const brandName = 'HT Embroiders'; // Navbar brand name

const Navbar = () => {

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

    // navbar link
    const NavLinkElement = navLinksData.map(linkData => {
        return (
            <li key={linkData.link} className="nav-item">
                <a className="nav-link nav-font" href={linkData.link}>{linkData.heading}</a>
            </li>
        );
    });

    return (
        <div className="container-fluid">

            {/* Desktop view navbar */}
            <div className="collapse navbar-toggleable-sm" id="exCollapsingNavbar2">
                {/* Navbar brand */}
                <span className="navbar-logo">
                    <a href="#">
                        <img id="logo" src={logoImg} alt="Mobirise" />
                    </a>
                </span>
                <span>
                    <a className="navbar-brand nav-font" href="#">{brandName}</a>
                </span>

                {/* Navbar links */}
                <ul className="nav navbar-nav pull-xs-right">
                    {NavLinkElement}
                </ul>
            </div>

            {/* Mobile view button */}
            <button
                className="navbar-toggler pull-right hidden-md-up"
                type="button" data-toggle="collapse"
                data-target="#exCollapsingNavbar2">
                <div className="hamburger-icon"></div>
            </button>

            <div className="clearfix"></div>
        </div>
    );
};

export default Navbar;