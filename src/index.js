/**
 * WEBSITE ENTRY POINT
 * @summary this is the file entry point
 * @author Cliff Crerar
 * Created at     : 2018-05-29 21:48:50
 * Last modified  : 2018-06-02 13:22:10
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
import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Navbar from './js/100_navbar';
import Homepage from './js/200_home';

// Render components
ReactDOM.render(
    <Navbar />, document.querySelector('.reactContainer')

);
ReactDOM.render(
    <Homepage />, document.querySelector('.reactContainer')
);