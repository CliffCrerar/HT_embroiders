/**
 * SERVICES SECTION
 * @summary Defines services heading, thumbnail and carousel componetns of the page
 * @author Cliff Crerar
 * Created at     : 2018-06-02 13:51:40
 * Last modified  : 2018-06-09 21:11:21
 */

import React from 'react';
import Thumbnail from './301_thumbnail.jsx';
//import CarouselItem from './302_carouselItem.jsx';
// IMPORT IMAGES FOR THUMBNAILS
import th1 from '../images/sick_screen.png';
import th2 from '../images/videoflex.png';
import th3 from '../images/submlimination_mug_1.png';
import th4 from '../images/clothing_3.png';
// IMPORT IMAGES FOR CAROUSEL
import carImg1 from '../images/silkscreen-printing-1.png';
import carImg2 from '../images/videoflex-printing-3.jpg';
import carImg3 from '../images/sublimination-printing-4.jpg';
import carImg4 from '../images/artificial-photography-119298-unsplash.jpg';
// IMPORT CAROUSEL JSX
import { carouselImages, carouselButtons } from './302_carouselItem.jsx';


/* COMPONENT CONTENT CONFIGURATION */
// 1. Heading
const heading = 'OUR SERVICE';
// 2. Thumbnails and Carousel
const svcThumbnailList = [
    {
        svcName: 'Silk Screening',
        svcThumbnail: th1,
        svcImage: carImg1,
        svcDesc: 'Lorem ipsum dolor sit amet, lucilius definitionem has no, est ex nibh graecis placerat. Per nibh graeco salutatus ad. An efficiendi repudiandae pro. Ad nominavi aliquando mea, his an alienum consequuntur. Ne habeo dolor aeterno.'
    },
    {
        svcName: 'Videoflex',
        svcThumbnail: th2,
        svcImage: carImg2,
        svcDesc: 'Lorem ipsum dolor sit amet, lucilius definitionem has no, est ex nibh graecis placerat. Per nibh graeco salutatus ad. An efficiendi repudiandae pro. Ad nominavi aliquando mea, his an alienum consequuntur. Ne habeo dolor aeterno.'
    },
    {
        svcName: 'Sublimination',
        svcThumbnail: th3,
        svcImage: carImg3,
        svcDesc: 'Lorem ipsum dolor sit amet, lucilius definitionem has no, est ex nibh graecis placerat. Per nibh graeco salutatus ad. An efficiendi repudiandae pro. Ad nominavi aliquando mea, his an alienum consequuntur. Ne habeo dolor aeterno.'
    },
    {
        svcName: 'Clothing',
        svcThumbnail: th4,
        svcImage: carImg4,
        svcDesc: 'Lorem ipsum dolor sit amet, lucilius definitionem has no, est ex nibh graecis placerat. Per nibh graeco salutatus ad. An efficiendi repudiandae pro. Ad nominavi aliquando mea, his an alienum consequuntur. Ne habeo dolor aeterno.'
    }
];

// HEADING HTML
const ServiceHeading = () => {
    return (
        <div className="container">
            <div className="row">
                <div>
                    <div className="col-sm-8">
                        <h2 className="mbr-section-title h1">{heading}</h2>
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
        <div className="container">
            <div className="row">
                {thumbnails}
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
        </div>
    );
};

module.exports = { ServiceHeading, ServiceThumbnails, ServiceCarousel };