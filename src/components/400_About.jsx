/**
 * ABOUT US SECTION 1
 * @summary JSX for the about section
 * @author Cliff Crerar
 * Created at     : 2018-06-04 17:40:15
 * Last modified  : 2018-07-07 07:31:40
 */

import React from 'react';
import { GallerySmallItems, GalleryZoomIndicators, GalleryZoomImages } from './401_aboutGallery.jsx';
// Import Images
import img0 from '../images/gallery-1.jpg';
import img1 from '../images/gallery-2.jpg';
import img2 from '../images/gallery-3.jpg';
import img3 from '../images/gallery-4.jpg';
import img4 from '../images/gallery-5.jpg';
import img5 from '../images/gallery-6.jpg';
import img6 from '../images/gallery-7.jpg';
import img7 from '../images/gallery-8.jpg';
import img8 from '../images/gallery-10.jpg';
import img9 from '../images/gallery-11.jpg';
import img10 from '../images/gallery-12.jpg';
import img11 from '../images/gallery-13.jpg';
import img12 from '../images/gallery-14.jpeg';
import img13 from '../images/gallery-15.jpeg';
import img14 from '../images/gallery-16.jpeg';
import img15 from '../images/gallery-17.jpeg';
// About us configuration
const vm = {
    vision: 'The production of goods comparable to the best standards, to be customer-focused and competitive in the market, through better quality, latest technology and continuous innovation.',
    mission: 'To manufacture products of outstanding quality that give our customers a competitive advantage through superior products and value, so we can make every customer smile. We also strive to attain the highest level of efficiency, integrity and honesty.'
};

const galleryHeader = 'Gallery';
import gallerHeaderImg from '../images/needleThreading-1.png';


const galleryImageData = {
    row1: [
        {
            img: 0,
            title: 'ImageTitle0',
            image: img12
        },
        {
            img: 1,
            title: 'ImageTitle1',
            image: img13
        },
        {
            img: 2,
            title: 'ImageTitle2',
            image: img14
        },
        {
            img: 3,
            title: 'ImageTitle3',
            image: img15
        }
    ],
    row2: [
        {
            img: 4,
            title: 'ImageTitle4',
            image: img1
        },
        {
            img: 5,
            title: 'ImageTitle5',
            image: img0
        },
        {
            img: 6,
            title: 'ImageTitle6',
            image: img2
        },
        {
            img: 7,
            title: 'ImageTitle7',
            image: img10
        }
    ],
    row3: [
        {
            img: 8,
            title: 'ImageTitle8',
            image: img8
        },
        {
            img: 9,
            title: 'ImageTitle9',
            image: img9
        },
        {
            img: 10,
            title: 'ImageTitle10',
            image: img11
        },
        {
            img: 11,
            title: 'ImageTitle11',
            image: img5
        }
    ],
    row4: [
        {
            img: 12,
            title: 'ImageTitle12',
            image: img4
        },
        {
            img: 13,
            title: 'ImageTitle13',
            image: img6
        },
        {
            img: 14,
            title: 'ImageTitle14',
            image: img3
        },
        {
            img: 15,
            title: 'ImageTitle15',
            image: img7
        }
    ]
};

//HEADER
const AboutHeader = () => {
    return (
        <div className="container">
            <div className="row">
                <div>
                    <div className="col-sm-12">
                        <h2 className="abt-title mbr-section-title abt-sction-title h1 display-2">
                            <span className="title-icon fas fa-info-circle"></span>ABOUT US
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

// HEADING
const AboutHeading = () => {
    return (
        <div>
            <div className="mbr-overlay-additional-abt"></div>
            <div className="abt-container container">
                <h3 className="mbr-section-title abt-sub-section display-2">Vision</h3>
                <div className="lead">
                    <p className="abt-par abt-par1">{vm.vision}</p>
                </div>
                <h3 className="mbr-section-title abt-sub-section display-2 abt-right-heading">Mission</h3>
                <div className="lead">
                    <p className="abt-par abt-par2">{vm.mission}</p>
                </div>

            </div>
        </div>

    );
};

// GALLERY HEADER
const GalleryHeading = () => {
    return (
        <div className="container">
            <div className="row">
                <div>
                    <div className="col-sm-12 abt-gallery-heading-group">
                        <h2 className="mbr-section-title h1">{galleryHeader}</h2>
                        <img src={gallerHeaderImg} title="needle-tread" alt="needle-tread" />
                    </div>
                </div>
            </div>
        </div>
    );
};

// GALLERY
const AboutGallery = () => {
    return (
        <div id="gallery-Lightbox">
            <div className="mbr-gallery-layout-default container-fluid">
                {/*<!-- ROW 1 -->*/}
                <div className="rowB4">
                    {GallerySmallItems(galleryImageData, 'row1')}
                </div>
                {/*<!-- /ROW 1 -->*/}

                {/*<!-- ROW 2 -->*/}
                <div className="rowB4">
                    {GallerySmallItems(galleryImageData, 'row2')}
                </div>
                {/*<!-- /ROW 2 -->*/}

                {/*<!-- ROW 3 -->*/}
                <div className="rowB4">
                    {GallerySmallItems(galleryImageData, 'row3')}
                </div>
                {/*<!-- /ROW 3 -->*/}

                {/*<!-- ROW 4 -->*/}
                <div className="rowB4">
                    {GallerySmallItems(galleryImageData, 'row4')}
                </div>
                {/*<!-- /ROW 4 -->*/}

            </div>

            {/* LIGHTBOX */}
            <div data-app-prevent-settings="" className="mbr-slider modal fade carousel slide" tabIndex="-1" data-keyboard="true" data-interval="false"
                id="lb-gallery1-6">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <ol className="carousel-indicators">
                                {GalleryZoomIndicators(galleryImageData)}
                            </ol>

                            <div className="carousel-inner">
                                {GalleryZoomImages(galleryImageData)}
                            </div>

                            <a className="left carousel-control" role="button" data-slide="prev" href="#lb-gallery1-6">
                                <span className="icon-prev" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>

                            <a className="right carousel-control" role="button" data-slide="next" href="#lb-gallery1-6">
                                <span className="icon-next" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>

                            <a className="close" href="#" role="button" data-dismiss="modal">
                                <span aria-hidden="true">×</span>
                                <span className="sr-only">Close</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="client" className="anchor-offset header-section"></div>
        </div>
    );
};

module.exports = { AboutHeading, AboutGallery, GalleryHeading, AboutHeader };