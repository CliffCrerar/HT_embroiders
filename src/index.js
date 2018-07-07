/**
 * CUSTOME FILES
 * @summary Adds custom files to project not part of original template
 * @author Cliff Crerar
 * Created at     : 2018-06-05 03:14:14
 * Last modified  : 2018-07-07 08:19:16
 */

//window.scrollbars.visible = false;

/* SCRIPT TO DETECT MOBILE DEVICE */
import './js/_ismobile';

// LOADING WINDOW
// import loadingGif from './images/loading.gif';
// document.getElementById(elementId).setAttribute('src', loadingGif);

/* CUSTOM CSS */
import './css/var.css'; // CUSTOM CSS VARIABLES
import './css/general.css'; // GENERAL CSS
import './css/landing.css'; // LANDING PAGE CSS
import './css/navbar.css'; // NAVBAR DESKTOP CSS
import './css/navbar_m.css'; // NAVBAR MOBILE
import './css/service.css'; // SERVICES CSS
import './css/about_us.css'; // ABOUT US CSS
import './css/clients.css'; // CLIENTS CSS
import './css/team.css'; // TEAM
import './css/contact.css'; // CONTACT
import './css/footer.css'; // FOOTER
import './css/alerts.css'; // ALERTS FOR CONTACT FORM

/* HOME PAGE OPTIONS */
//import landingBg from './images/alexander-andrews-290794-unsplash.jpg'; // Home page fetch
import landingBg from './images/alexander-andrews-290794-unsplash_flipped.jpg'; // Home page fetch
$('#header4-1').css('background-image', `url(${landingBg})`); // Home page load
import aboutBg from './images/vishal-banik-535458-unsplash.jpg'; // About page fetch
$('#content5-7').css('background', `url(${aboutBg})`).css('background-size', '100vw auto'); // About page load
import clientsBg from './images/prince-abid-640396-unsplash.jpg';
$('#testimonials1-k').css('background', `url(${clientsBg})`).css('background-size', '100vw auto');;
import promiseBg from './images/clem-onojeghuo-205193-unsplash.jpg';
$('#msg-box3-i').css('background', `url(${promiseBg})`).css('background-size', '100vw auto');;
import teamMembersBG from './images/alex-block-597465-unsplash.jpg';
$('#content4-2').css('background-image', `url(${teamMembersBG})`);

// CUSTOM JS
import './js/NavChangeScroll';
import './js/navActive';
import './js/svcannounce';
import './js/webform';

// DEACTIVATE CERTAIN COMPONENTS IF MOBILE
if (window.isMobile) {
    $('.carousel-indicators').hide();
}