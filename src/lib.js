/**
 * long description for the file
 *
 * @summary This file contains all the style libraries
 * @author Cliff Crerar
 *
 * Created at     : 2018-05-29 21:49:50
 * Last modified  : 2018-05-30 08:10:34
 */

// Template css
/*
    <link rel="stylesheet" href="assets/tether/tether.min.css">*
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">*
    <link rel="stylesheet" href="assets/socicon/css/socicon.min.css">*
    <link rel="stylesheet" href="assets/puritym/css/style.css">*
    <link rel="stylesheet" href="assets/mobirise/css/mbr-additional.css" type="text/css">*
*/

// import fonts
import './css/font.css';
// THETHER
import '../assets/tether/tether.min.css';
// BOOTSTRAP
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
 import '../assets/bootstrap/css/bootstrap.min.css';
// SOCICONS
import '../node_modules/socicon/css/socicon.css';
// PURITY THEME
import './css/puritym.css'; // this file was formetly style.css in the template
// MOBIRISE ADDITIONAL CSS
import './css/mbr-additional.css';



// TEMPLATE JS
/*
    <script src="assets/web/assets/jquery/jquery.min.js"></script>*
    <script src="assets/tether/tether.min.js"></script>*
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>*
    <script src="assets/smooth-scroll/smooth-scroll.js"></script>*
    <script src="assets/jarallax/jarallax.js"></script>*
    <script src="assets/bootstrap-carousel-swipe/bootstrap-carousel-swipe.js"></script>*
    <script src="assets/masonry/masonry.pkgd.min.js"></script>*
    <script src="assets/imagesloaded/imagesloaded.pkgd.min.js"></script>*
    <script src="assets/puritym/js/script.js"></script>*
    <script src="assets/mobirise-gallery/script.js"></script>
    <script src="assets/formoid/formoid.min.js"></script>
*/

// JQUERY
//import $ from 'script-loader!jquery';
//import jQuery from 'script-loader!jquery';
import $ from 'script-loader!../assets/web/assets/jquery/jquery.min';

import './tempImgLoad';
// THETHER
// C:\GitHub\HT_embroiders\assets\tether\tether.min.js
import 'script-loader!../assets/tether/tether.min';
// BOOTSTRAP
// import 'script-loader!bootstrap';
import 'script-loader!../assets/bootstrap/js/bootstrap.min';
// SMOOTH SCROLLING
import 'script-loader!./other/smooth-scroll';
// JARALAX
import 'script-loader!../assets/jarallax/jarallax';
// BOOSTRAP CAROUSELL SWIPE
import 'script-loader!../assets/bootstrap-carousel-swipe/bootstrap-carousel-swipe';
// MASONRY LAYOUT
import 'script-loader!../assets/masonry/masonry.pkgd.min';
// IMAGE LOADED
import 'script-loader!../assets/imagesloaded/imagesloaded.pkgd.min';
// MOBIRISE THEME
import 'script-loader!../assets/puritym/js/script';
// MOBIRISE GALLERY
import 'script-loader!./js/mobirise_gallery';