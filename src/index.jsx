/**
 * WEBSITE ENTRY POINT
 * @summary this is the file entry point, loads libraries and renders elements
 * @author Cliff Crerar
 * Created at     : 2018-05-29 21:48:50
 * Last modified  : 2018-06-05 02:42:37
 */

// JQUERY

// FILE CONTAINING ALL LIBRARIES

// THETHER
import '../lib/tether/tether.min.css';
// BOOTSTRAP
import '../lib/bootstrap/css/bootstrap.min.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import '../node_modules/bootstrap/dist/js/bootstrap';
// SOCICONS
import '../lib/socicon/css/socicon.min.css';
// PURITY THEME
import '../lib/puritym/css/style.css';
// MOBIRISE ADDITIONAL CSS
import '../lib/mobirise/css/mbr-additional.css';

// import fonts
import './css/font.css';
// CUSTOM CSS
import './css/custom.css';
// FONT AWESOME 5
import './lib/fontawesome/web-fonts-with-css/css/fontawesome-all.css';
// FONT ALGERIA
import './font/Algeria/stylesheet.css';
// NON REACT ELEMENT IMAGE LOADING
import landingBg from './images/temp/photo-2.jpg'; // Home page fetch
$('#header4-1').css('background-image', `url(${landingBg})`); // Home page load
import aboutBg from './images/temp/photo-3.jpg'; // About page fetch
$('#content5-7').css('background-image', `url(${aboutBg})`); // About page load
import clientsBg from './images/temp/photo-3.jpg';
$('#testimonials1-k').css('background-image', `url(${clientsBg})`);
import teamMembersBG from './images/temp/photo-3.jpg';
$('#content4-2').css('background-image', `url(${teamMembersBG})`);

// REACT
import React from 'react'; // React tools
import ReactDOM from 'react-dom'; // React DOM

// Components
import Navbar from './js/100_navbar.jsx';
import Homepage from './js/200_home.jsx';
import { ServiceHeading, ServiceThumbnails, ServiceCarousel } from './js/300_services.jsx';
import { AboutHeading, AboutGallery, AboutFooter } from './js/400_About.jsx';
import OurClients from './js/500_clients.jsx';
import SocialLinks from './js/600_social.jsx';
import OurPromise from './js/700_promise.jsx';
import { TeamHeading, TeamMembers } from './js/800_team.jsx';
import { LocationHeading, LocationGoogleMaps } from './js/900_location.jsx';
import ContactDetails from './js/1000_contact.jsx';
import PageFooter from './js/1100_footer.jsx';

// Render components
ReactDOM.render(<Navbar />, document.querySelector('#menu-0')); // Navbar
ReactDOM.render(<Homepage />, document.querySelector('#header4-1')); // Homepage
ReactDOM.render(<ServiceHeading />, document.querySelector('#svcHeading')); // Services Heading
ReactDOM.render(<ServiceThumbnails />, document.querySelector('#svcThumbnails')); // Services Heading
ReactDOM.render(<ServiceCarousel />, document.querySelector('#svcCarousel'));// Services carousel
ReactDOM.render(<AboutHeading />, document.querySelector('#content5-7')); // About heading
ReactDOM.render(<AboutGallery />, document.querySelector('#gallery1-6')); // ABOUT US GALLERY document
ReactDOM.render(<AboutFooter />, document.querySelector('#content1-5')); // About Footer
ReactDOM.render(<OurClients />, document.querySelector('#testimonials1-k')); // Our Clients
ReactDOM.render(<SocialLinks />, document.querySelector('#social-buttons2-g')); // Social Links
ReactDOM.render(<OurPromise />, document.querySelector('#msg-box3-i')); // Our promise
ReactDOM.render(<TeamHeading />, document.querySelector('#msg-box1-h')); // Team heading
ReactDOM.render(<TeamMembers />, document.querySelector('#content4-2')); // Team Members
ReactDOM.render(<LocationHeading />, document.querySelector('#msg-box2-b')); // Location heading msg-box2-b
ReactDOM.render(<LocationGoogleMaps />, document.querySelector('#map1-d')); // Location google maps map1-d
ReactDOM.render(<ContactDetails />, document.querySelector('#contacts3-e')); // Contact details
ReactDOM.render(<PageFooter />, document.querySelector('#footer1-f')); // Page footer