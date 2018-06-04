/**
 * WEBSITE ENTRY POINT
 * @summary this is the file entry point, loads libraries and renders elements
 * @author Cliff Crerar
 * Created at     : 2018-05-29 21:48:50
 * Last modified  : 2018-06-02 14:04:01
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

// Components
import Navbar from './js/100_navbar';
import Homepage from './js/200_home';
import { ServiceHeading, ServiceThumbnails } from './js/300_services';


// Render components
ReactDOM.render(<Navbar />, document.querySelector('#menu-0')); // Navbar
ReactDOM.render(<Homepage />, document.querySelector('#header4-1')); // Homepage
ReactDOM.render(<ServiceHeading />, document.querySelector('#svcHeading')); // Services Heading
ReactDOM.render(<ServiceThumbnails />, document.querySelector('#svcThumbnails')); // Services Heading
