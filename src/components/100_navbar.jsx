/**
 * NAVIGATION BAR COMPONENT
 * @summary short description for the file
 * @author Cliff Crerar
 * Created at     : 2018-06-01 19:55:10
 * Last modified  : 2018-06-13 07:21:57
 */

import React from 'react'; // import react
//import logoImg from '../images/ht_nav_logo.png'; // Navbar brand image
import logoImg from '../images/ht_nav_logo_2.png'; // Navbar brand image
import needle from '../images/needle-image-1.png'; // logo image
const brandName1 = 'Borduurders'; // Navbar brand name
const brandName2 = 'Embroiders'; // Navbar brand name

// Navbar links data object
const navLinksData = [
    { heading: 'Home', link: '#header4-1' },
    { heading: 'Service', link: '#msg-box1-m' },
    { heading: 'About', link: '#content5-7' },
    { heading: 'Clients', link: '#testimonials1-k' },
    { heading: 'Team', link: '#msg-box1-h' },
    { heading: 'Contact', link: '#msg-box2-b' },
    //{ heading: 'Contact', link: '#contacts3-e' },
];

// Mobile nav on click event
const navLinksShow = () => {
    console.log('NavLinks Click');
    console.log($('#nav-right').hasClass('show'));
    if ($('#nav-right').hasClass('show')) {
        $('#nav-right').css('display', 'none').removeClass('show');
    } else {
        $('#nav-right').css('display', 'flex').addClass('show');
    }
    //$('#nav-right').css('display', 'flex');
};


const Navbar = () => {
    // navbar link
    const NavLinkElement = navLinksData.map(linkData => {
        return (
            <a key={linkData.link} href={linkData.link}>{linkData.heading}</a>
        );
    });

    return (
        <div className="nav-inner">

            <div className="mobile-menu" >
                <button className="ham-burger fas fa-bars" onClick={navLinksShow}></button>
            </div>

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

            <div id="nav-right" className="nav-right">
                {NavLinkElement}
            </div>

        </div>
    );
};

export default Navbar;