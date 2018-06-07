/**
 * CUSTOME FILES
 * @summary Adds custom files to project not part of original template
 * @author Cliff Crerar
 * Created at     : 2018-06-05 03:14:14
 * Last modified  : 2018-06-07 07:31:41
 */

/* IMPORT REACT INTERFACE */
import './components/index.jsx';

/* IMPORT LIBRARIES */
import './lib/lib.js';

/* CUSTOM FILES */
// import fonts
import './css/font.css';
// CUSTOM CSS VARIABLES
import './css/var.css';
// CUSTOM CSS
import './css/custom.css';
// FONT AWESOME 5
import './lib/fontawesome/web-fonts-with-css/css/fontawesome-all.css';
// FONT ALGERIA
import './font/Algeria/stylesheet.css';
// NON REACT ELEMENT IMAGE LOADING

/* HOME PAGE OPTIONS */
//import landingBg from './images/clem-onojeghuo-205193-unsplash.jpg'; // Home page fetch
//import landingBg from './images/sewingMachineCloseUp1.png'; // Home page fetch
//import landingBg from './images/sewingMachineCloseUp2.jpg'; // Home page fetch
//import landingBg from './images/sewingMachineCloseUp3.png'; // Home page fetch
import landingBg from './images/alexander-andrews-290794-unsplash.jpg'; // Home page fetch
//import landingBg from './images/rawpixel-549498-unsplash.jpg'; // Home page fetch
//import landingBg from './images/rawpixel-549498-unsplash.jpg'; // Home page fetch

$('#header4-1').css('background-image', `url(${landingBg})`); // Home page load
import aboutBg from './images/temp/photo-3.jpg'; // About page fetch
$('#content5-7').css('background-image', `url(${aboutBg})`); // About page load
import clientsBg from './images/temp/photo-3.jpg';
$('#testimonials1-k').css('background-image', `url(${clientsBg})`);
import teamMembersBG from './images/temp/photo-3.jpg';
$('#content4-2').css('background-image', `url(${teamMembersBG})`);

// CUSTOM JS
import './js/001_elementfitting';