/**
 * SERVICES SECTION
 * @summary Defines services heading, thumbnail and carousel componetns of the page
 * @author Cliff Crerar
 * Created at     : 2018-06-02 13:51:40 
 * Last modified  : 2018-06-02 14:43:22
 */

import React from 'react';
import Thumbnail from './301_thumbnail';
// IMPORT IMAGES
import th1 from '../images/temp/feature-bootstrap.png';
import th2 from '../images/temp/feature-bootstrap.png';
import th3 from '../images/temp/feature-bootstrap.png';
import th4 from '../images/temp/feature-bootstrap.png';

/* COMPONENT CONTENT CONFIGURATION */
// 1. Heading
const heading = 'Our Service';
// 2. Thumbnails
const svcThumbnailList = [
    { svcName: 'Silk Screening', svcImage: th1 },
    { svcName: 'Videoflex', svcImage: th2 },
    { svcName: 'Sublimination', svcImage: th3 },
    { svcName: 'Clothing', svcImage: th4 }
];
// 3. Carousel

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

const thumbnails = svcThumbnailList.map(listItem => {
    <Thumbnail
        svcName={listItem.svcName}
        svcImage={listItem.svcImage}
    />;
});

const ServiceThumbnails = () => {
    return (
        <div className="container">
            <div className="row">
                {thumbnails()}
            </div>
        </div>
    );
};
module.exports = { ServiceHeading, ServiceThumbnails };