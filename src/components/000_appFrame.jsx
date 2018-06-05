/**
 * WEB PAGE FRAME
 * @summary All other components will attach to this framce
 * @author Cliff Crerar
 * Created at     : 2018-06-05 07:05:08
 * Last modified  : 2018-06-05 07:10:37
 */

import React from 'react';
import ReactDOM from 'react-dom';

const AppFrame = () => {
    return (
        <div id="react-container">
            {/*<!--NAVBAR->*/}
            <nav class="navbar navbar-light mbr-navbar navbar-transparent" id="menu-0" data-rv-view="1653">
            </nav>
            {/*<!--HOME PAGE->*/}
            <section class="mbr-section mbr-section-full mbr-parallax-background mbr-after-navbar" id="header4-1" data-rv-view="1655">
            </section>
            {/*<!--SERVICE HEADING->*/}
            <section id="svcHeading" class="mbr-section mbr-section-small" id="msg-box1-m" data-rv-view="1658" style="background-color: rgb(255, 248, 224); padding-top: 3rem; padding-bottom: 3rem;">
            </section>
            {/*<!--SERVICE THUMBNAILS->*/}
            <section id="svcThumbnails" class="mbr-section mbr-section-small" id="features1-8" data-rv-view="1661" style="background-color: rgb(255, 255, 255); padding-top: 4.5rem; padding-bottom: 4.5rem;">
            </section>
            {/*<!--SERVICE CAROUSEL->*/}
            <section class="mbr-slider mbr-section mbr-section__container carousel slide mbr-section-nopadding" data-ride="carousel"
                data-keyboard="false" data-wrap="true" data-interval="5000" id="slider-j" data-rv-view="1664" style="background-color: rgb(255, 255, 255);">
            </section>
            {/*<!--ACOUNT US HEADING->*/}
            <section class="mbr-section mbr-parallax-background col-undefined" id="content5-7" data-rv-view="1679" style="padding-top: 6rem; padding-bottom: 6rem;">
            </section>
            {/*<!--ABOUT US GALLERY->*/}
            <section class="mbr-gallery mbr-section mbr-section-nopadding" id="gallery1-6" data-rv-view="1682" style="background-color: rgb(239, 239, 239); padding-top: 0; padding-bottom: 0;">
            </section>
            {/*<!--ABOUT US FOOTER->*/}
            <section class="mbr-section mbr-section__container mbr-section__container--isolated" id="content1-5" data-rv-view="1717">
            </section>
            {/*<!--CLIENTS->*/}
            <section class="mbr-section mbr-section-small mbr-parallax-background" id="testimonials1-k" data-rv-view="1718" style="padding-top: 4.5rem; padding-bottom: 4.5rem;">
            </section>
            {/*<!--SOCIAL->*/}
            <section class="mbr-section mbr-section-small" id="social-buttons2-g" data-rv-view="1731" style="background-color: rgb(255, 248, 224); padding-top: 4.5rem; padding-bottom: 4.5rem;">
            </section>
            {/*<!--OUR PROMISE->*/}
            <section class="mbr-section" id="msg-box3-i" data-rv-view="1733" style="background-color: rgb(254, 213, 197); padding-top: 9rem; padding-bottom: 9rem;">
            </section>
            {/*<!--TEAM HEADING->*/}
            <section class="mbr-section mbr-section-small" id="msg-box1-h" data-rv-view="1736" style="background-color: rgb(255, 248, 224); padding-top: 4.5rem; padding-bottom: 4.5rem;">
            </section>
            {/*<!--TEAM MEMBERS->*/}
            <section class="mbr-section mbr-section-small mbr-parallax-background" id="content4-2" data-rv-view="1739" style="padding-top: 4.5rem; padding-bottom: 4.5rem;">
            </section>
            {/*<!--LOCATION HEADING->*/}
            <section class="mbr-section mbr-section-small" id="msg-box2-b" data-rv-view="1742" style="background-color: rgb(255, 255, 255); padding-top: 4.5rem; padding-bottom: 4.5rem;">
            </section>
            {/*<!--LOCATION GOOGLE MAPS->*/}
            <section class="mbr-section mbr-section-nopadding" id="map1-d" data-rv-view="1745">
            </section>
            {/*<!--CONTACT US->*/}
            <section class="mbr-section mbr-section-small mbr-footer" id="contacts3-e" data-rv-view="1747" style="background-color: rgb(55, 56, 62); padding-top: 4.5rem; padding-bottom: 4.5rem;">
            </section>
            {/*<!--PAGE FOOTER->*/}
            <footer class="mbr-section mbr-section-nopadding mbr-footer" id="footer1-f" data-rv-view="1756" style="background-color: rgb(38, 39, 44); padding-top: 3rem; padding-bottom: 1.98rem;">
            </footer>
        </div>
    );
};

export default AppFrame;

//ReactDOM.render(<AppFramce />, document.querySelector('body')); // Application frame