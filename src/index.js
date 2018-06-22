/**
 * CUSTOME FILES
 * @summary Adds custom files to project not part of original template
 * @author Cliff Crerar
 * Created at     : 2018-06-05 03:14:14
 * Last modified  : 2018-06-22 19:06:07
 */

//window.scrollbars.visible = false;

// JQUERY UI

/* CUSTOM CSS */
import './css/font.css'; // CUSTOM FONTS
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

/* HOME PAGE OPTIONS */
//import landingBg from './images/alexander-andrews-290794-unsplash.jpg'; // Home page fetch
import landingBg from './images/alexander-andrews-290794-unsplash_flipped.jpg'; // Home page fetch
$('#header4-1').css('background-image', `url(${landingBg})`); // Home page load
import aboutBg from './images/vishal-banik-535458-unsplash.jpg'; // About page fetch
$('#content5-7').css('background-image', `url(${aboutBg})`); // About page load
import clientsBg from './images/prince-abid-640396-unsplash.jpg';
$('#testimonials1-k').css('background-image', `url(${clientsBg})`);
import promiseBg from './images/clem-onojeghuo-205193-unsplash.jpg';
$('#msg-box3-i').css('background-image', `url(${promiseBg})`);
import teamMembersBG from './images/alex-block-597465-unsplash.jpg';
$('#content4-2').css('background-image', `url(${teamMembersBG})`);

// CUSTOM JS
import './js/NavChangeScroll';
import './js/navActive';