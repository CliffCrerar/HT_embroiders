/**
 * SERVICES SECTION
 * @summary Defines services heading, thumbnail and carousel componetns of the page
 * @author Cliff Crerar
 * Created at     : 2018-06-02 13:51:40
 * Last modified  : 2018-06-05 01:15:00
 */

import React from 'react';
import Thumbnail from './301_thumbnail.js';
import CarouselItem from './302_carouselItem.js';
// IMPORT IMAGES FOR THUMBNAILS
import th1 from '../images/temp/feature-bootstrap.png';
import th2 from '../images/temp/feature-responsive.png';
import th3 from '../images/temp/feature-google-fonts.png';
import th4 from '../images/temp/feature-websites.png';
// IMPORT IMAGES FOR CAROUSEL
import carImg1 from '../images/temp/photo-6.jpg';
import carImg2 from '../images/temp/photo-9.jpg';
import carImg3 from '../images/temp/photo-10.jpg';
import carImg4 from '../images/temp/photo-13.jpg';


/* COMPONENT CONTENT CONFIGURATION */
// 1. Heading
const heading = 'Our Service';
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

const carouselItems = svcThumbnailList.map((listItem, i) => {
    return (
        <CarouselItem
            key={listItem.svcName}
            svcName={listItem.svcName}
            svcImage={listItem.svcImage}
            svcDesc={listItem.svcDesc}
            correctClass={function (activeClass, nonActiveClass) { if (i === 0) { return activeClass; } else { return nonActiveClass; } }}
        />
    );
});

// CREATES THE CAROUSEL HTML
const ServiceCarousel = () => {
    return (
        <div>
            <ol className="carousel-indicators">
                <li data-app-prevent-settings="" data-target="#slider-j" data-slide-to="0" className="active"></li>
                <li data-app-prevent-settings="" data-target="#slider-j" data-slide-to="1"></li>
                <li data-app-prevent-settings="" data-target="#slider-j" data-slide-to="2"></li>
                <li data-app-prevent-settings="" data-target="#slider-j" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner" role="listbox">
                {carouselItems}
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