/**
 * SERVICES SECTION
 * @summary Defines services heading, thumbnail and carousel componetns of the page
 * @author Cliff Crerar
 * Created at     : 2018-06-02 13:51:40
 * Last modified  : 2018-07-06 21:00:05
 */

import React from 'react';
import Thumbnail from './301_thumbnail.jsx';
//import CarouselItem from './302_carouselItem.jsx';
// IMPORT IMAGES FOR THUMBNAILS
import th0 from '../images/svc-tn-embroidery.png';
import th1 from '../images/svc-tn-silk_screen.png';
import th2 from '../images/svc-tn-videoflex.png';
import th3 from '../images/svc-tn-submlimination.png';
import th4 from '../images/svc-tn-clothing.png';
// IMPORT IMAGES FOR CAROUSEL
import carImg0 from '../images/agto-nugroho-665411-unsplash_resize.jpg';
import carImg1 from '../images/svc-car-silkscreen-printing-1.jpg';
import carImg2 from '../images/svc-car-videoflex-printing-3.jpg';
import carImg3 from '../images/svc-car-sublimination-printing-4.jpg';
import carImg4 from '../images/svc-car-artificial-photography-119298-unsplash.jpg';
// IMPORT CAROUSEL JSX
import { carouselImages, carouselButtons } from './302_carouselItem.jsx';


/* COMPONENT CONTENT CONFIGURATION */
// 1. Heading
const heading = 'OUR SERVICE';
// 2. Thumbnails and Carousel
const svcThumbnailList = [
    {
        svcName: 'Embroidery',
        svcThumbnail: th0,
        svcImage: carImg0,
        svcDesc: 'The craft of decorating fabric or other materials using a needle to apply thread or yarn. Embroidery may also incorporate other materials such as pearls, beads, quills, and sequins. In modern days, embroidery is usually seen on caps, hats, coats, blankets, dress shirts, denim, dresses, stockings, and golf shirts.'
    },
    {
        svcName: 'Silk Screening',
        svcThumbnail: th1,
        svcImage: carImg1,
        svcDesc: 'A printing technique whereby a mesh is used to transfer ink onto a substrate, except in areas made impermeable to the ink by a blocking stencil. A blade or squeegee is moved across the screen to fill the open mesh apertures with ink, and a reverse stroke then causes the screen to touch the substrate momentarily along a line of contact.'
    },
    {
        svcName: 'Videoflex',
        svcThumbnail: th2,
        svcImage: carImg2,
        svcDesc: 'Heat Transfer printing is arguably the most popular choice for T-shirt printing	. The process involves heat transfer to press an existing photo or design on to a fabric.'
    },
    {
        svcName: 'Sublimination',
        svcThumbnail: th3,
        svcImage: carImg3,
        svcDesc: 'Heat is used to transfer dye onto materials such as a plastic, card, paper, or fabric. The sublimation name was first applied because the dye was considered to make the transition between the solid and gas states without going through a liquid stage.'
    },
    {
        svcName: 'Clothing',
        svcThumbnail: th4,
        svcImage: carImg4,
        svcDesc: 'We also sell and make bespoke garments for all occasions as well as provide the materials required for for printing.'
    }
];

// HEADING HTML
const ServiceHeading = () => {
    return (
        <div className="container">
            <div className="row">
                <div>
                    <div className="col-sm-12">
                        <h2 className="mbr-section-title svc-section-title h1 display-2">
                            {heading}<span className="title-icon fas fa-cut"></span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

// FUNCTION THAT CREATED DYNAMIC HTML AND IS APPLIED IN THE NEXT CODE BLOCK
const thumbnails = svcThumbnailList.map(listItem => {
    return (
        <Thumbnail
            svcName={listItem.svcName}
            svcThumbnail={listItem.svcThumbnail}
            key={listItem.svcName}
        />
    );
});

// CREATES THE SERVICE THUMBNAILS
const ServiceThumbnails = () => {
    return (
        <div className="container-fluid">
            <div className="th-flex-display">
                {thumbnails}
            </div>
            <div id="svc-mi" className="svc-more-info svc-more-info-hide">
                <h3 className="svc-mi-annoucement">
                    <span className="svc-mi-arrow fas fa-angle-double-down"></span>
                    MORE INFO
                    <span className="svc-mi-arrow fas fa-angle-double-down"></span>
                </h3>
            </div>
        </div>
    );
};

// CREATES THE CAROUSEL HTML
const ServiceCarousel = () => {
    return (
        <div>
            <ol className="carousel-indicators">
                {carouselButtons(svcThumbnailList)}
            </ol>
            <div className="carousel-inner" role="listbox">
                {carouselImages(svcThumbnailList)}
            </div>
            <a data-app-prevent-settings="" className="left carousel-control" role="button" data-slide="prev" href="#slider-j">
                <span className="icon-prev" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a data-app-prevent-settings="" className="right carousel-control" role="button" data-slide="next" href="#slider-j">
                <span className="icon-next" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            <div className="anchor-offset header-section" id="about"></div>
        </div>
    );
};

module.exports = { ServiceHeading, ServiceThumbnails, ServiceCarousel };