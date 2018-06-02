/**
 * NAVIGATION BAR COMPONENT
 * @summary short description for the file
 * @author Cliff Crerar
 * Created at     : 2018-06-01 19:55:10 
 * Last modified  : 2018-06-01 23:00:56
 */

import React from 'react'; // import react
import logoImg from '../images/temp/logo.png'; // Navbar brand image
const brandName = 'HT Embroiders'; // Navbar brand name

const Navbar = () => {

    // Navbar links data object
    const navLinksData = [
        { heading: 'Home', link: '#header4-1' },
        { heading: 'Service', link: '#msg-box1-m' },
        { heading: 'About', link: '#content5-7' },
        { heading: 'Testimonials', link: '#testimonials1-k' },
        { heading: 'Team', link: '#msg-box1-h' },
        { heading: 'Address', link: '#msg-box2-b' },
        { heading: 'Contact', link: '#contacts3-e' },
    ];

    // navbar link 
    const NavLinkElement = navLinksData.map(linkData => {
        return (
            <li key={linkData.link} className="nav-item">
                <a className="nav-link" href={linkData.link}>{linkData.heading}</a>
            </li>
        );
    });

    return (
        <nav
            className="navbar navbar-light mbr-navbar navbar-transparent"
            id="menu-0"
            data-rv-view="1653">

            <div className="container">

                {/* Mobile view button */}
                <button
                    className="navbar-toggler pull-right hidden-md-up"
                    type="button" data-toggle="collapse"
                    data-target="#exCollapsingNavbar2">
                    <div className="hamburger-icon"></div>
                </button>

                <div className="clearfix"></div>

                {/* Desktop view navbar */}
                <div className="collapse navbar-toggleable-sm"
                    id="exCollapsingNavbar2">

                    {/* Navbar brand */}
                    <span className="navbar-logo">
                        <a href="#">
                            <img id="logo" src={logoImg} alt="Mobirise" />
                        </a>
                    </span>
                    <span>
                        <a className="navbar-brand" href="#">{brandName}</a>
                    </span>

                    {/* Navbar links */}
                    <ul className="nav navbar-nav pull-xs-right">
                        {NavLinkElement}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;