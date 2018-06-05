/**
 * WEBSITE ENTRY POINT
 * @summary this is the file entry point, loads libraries and renders elements
 * @author Cliff Crerar
 * Created at     : 2018-05-29 21:48:50
 * Last modified  : 2018-06-05 04:00:40
 */

// REACT
import React from 'react'; // React tools
import ReactDOM from 'react-dom'; // React DOM

// Components
import Navbar from './components/100_navbar.jsx';
import Homepage from './components/200_home.jsx';
import { ServiceHeading, ServiceThumbnails, ServiceCarousel } from './components/300_services.jsx';
import { AboutHeading, AboutGallery, AboutFooter } from './components/400_About.jsx';
import OurClients from './components/500_clients.jsx';
import SocialLinks from './components/600_social.jsx';
import OurPromise from './components/700_promise.jsx';
import { TeamHeading, TeamMembers } from './components/800_team.jsx';
import { LocationHeading, LocationGoogleMaps } from './components/900_location.jsx';
import ContactDetails from './components/1000_contact.jsx';
import PageFooter from './components/1100_footer.jsx';

// Render components
ReactDOM.render(<Navbar />, document.querySelector('#menu-0')); // Navbar
ReactDOM.render(<Homepage />, document.querySelector('#header4-1')); // Homepage
ReactDOM.render(<ServiceHeading />, document.querySelector('#svcHeading')); // Services Heading
ReactDOM.render(<ServiceThumbnails />, document.querySelector('#svcThumbnails')); // Services Heading
ReactDOM.render(<ServiceCarousel />, document.querySelector('#slider-j')); // Services carousel
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