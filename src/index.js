/**
 * WEBSITE ENTRY POINT
 * @summary this is the file entry point, loads libraries and renders elements
 * @author Cliff Crerar
 * Created at     : 2018-05-29 21:48:50
 * Last modified  : 2018-06-04 18:45:38
 */

// FILE CONTAINING ALL LIBRARIES
import './lib/lib';
// CUSTOM CSS
import './css/custom.css';
// FONT AWESOME 5
import './lib/fontawesome/web-fonts-with-css/css/fontawesome-all.css';
// FONT ALGERIA
import './font/Algeria/stylesheet.css';
// REACT
import React from 'react'; // React tools
import ReactDOM from 'react-dom'; // React DOM
// NON REACT ELEMENT IMAGE LOADING
import landingBg from './images/temp/photo-2.jpg'; // Home page fetch
$('#header4-1').css('background-image', `url(${landingBg})`); // Home page load
import aboutBg from './images/temp/photo-3.jpg'; // About page fetch
$('#content5-7').css('background-image', `url(${aboutBg})`); // About page load

// Components
import Navbar from './js/100_navbar';
import Homepage from './js/200_home';
import { ServiceHeading, ServiceThumbnails, ServiceCarousel } from './js/300_services';
import { AboutHeading, AboutGallery, AboutFooter } from './js/400_About';


// Render components
ReactDOM.render(<Navbar />, document.querySelector('#menu-0')); // Navbar
ReactDOM.render(<Homepage />, document.querySelector('#header4-1')); // Homepage
ReactDOM.render(<ServiceHeading />, document.querySelector('#svcHeading')); // Services Heading
ReactDOM.render(<ServiceThumbnails />, document.querySelector('#svcThumbnails')); // Services Heading
ReactDOM.render(<ServiceCarousel />, document.querySelector('#svcCarousel'));// Services carousel
ReactDOM.render(<AboutHeading />, document.querySelector('#content5-7')); // About heading
ReactDOM.render(<AboutGallery />, document.querySelector('#gallery1-6')); // ABOUT US GALLERY document
ReactDOM.render(<AboutFooter />, document.querySelector('#content1-5')); // About Footer