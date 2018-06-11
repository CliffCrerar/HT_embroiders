/**
 * NAVIGATION BAR COMPONENT
 * @summary short description for the file
 * @author Cliff Crerar
 * Created at     : 2018-06-01 19:55:10
 * Last modified  : 2018-06-09 19:07:39
 */

import React from 'react'; // import react
const imgName = ''
import logoImg from '../images/ht_nav_logo.png'; // Navbar brand image
import needle from '../images/needle-image-1.png'; // logo image
const brandName1 = 'Borduurders'; // Navbar brand name
const brandName2 = 'Embroiders'; // Navbar brand name

// Navbar links data object
const navLinksData = [
    { heading: 'Home', link: '#header4-1' },
    { heading: 'Service', link: '#svcHeading' },
    { heading: 'About', link: '#content5-7' },
    { heading: 'Clients', link: '#testimonials1-k' },
    { heading: 'Team', link: '#msg-box1-h' },
    { heading: 'Contact', link: '#msg-box2-b' },
    //{ heading: 'Contact', link: '#contacts3-e' },
];

const Navbar = () => {
    // navbar link
    const NavLinkElement = navLinksData.map(linkData => {
        return (
            <a key={linkData.link} href={linkData.link}>{linkData.heading}</a>
        );
    });
    return (
        <div className="nav-inner">

            <div className="nav-left nav-left-2">

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

            <div className="nav-right">
                {NavLinkElement}
            </div>

        </div>
    );
};

export default Navbar;