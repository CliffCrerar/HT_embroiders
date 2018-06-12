/**
 * ABOUT US SECTION 1
 * @summary JSX for the about section
 * @author Cliff Crerar
 * Created at     : 2018-06-04 17:40:15
 * Last modified  : 2018-06-12 07:36:15
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
// About us configuration
const vm = {
    vision: 'Lorem ipsum dolor sit amet, alienum omittantur cu qui, nisl mediocrem sed an. Ne pri admodum dolores. Usu ad option fierent, dicam dicunt malorum his ne, eum in molestie facilisis maiestatis. Doming aliquando sed eu, aeque aliquip est an. Tota dicunt qui in. Sea affert partem platonem at. Modo pericula ad vis. Tamquam civibus eu vix. Te eos inani argumentum, cum eleifend perpetua ut. Decore euismod no ius. Ne vel vide assum contentiones, augue laudem periculis id eum, ad se',
    mission: 'Lorem ipsum dolor sit amet, alienum omittantur cu qui, nisl mediocrem sed an. Ne pri admodum dolores. Usu ad option fierent, dicam dicunt malorum his ne, eum in molestie facilisis maiestatis. Doming aliquando sed eu, aeque aliquip est an. Tota dicunt qui in. Sea affert partem platonem at. Modo pericula ad vis. Tamquam civibus eu vix. Te eos inani argumentum, cum eleifend perpetua ut. Decore euismod no ius. Ne vel vide assum contentiones, augue laudem periculis id eum, ad se'
};

const galleryHeader = 'Gallery';
import gallerHeaderImg from '../images/needleThreading-1.png';


const galleryImageData = {
    row1: [
        {
            img: 0,
            title: 'ImageTitle0',
            image: img0
        },
        {
            img: 1,
            title: 'ImageTitle1',
            image: img1
        },
        {
            img: 2,
            title: 'ImageTitle2',
            image: img2
        },
        {
            img: 3,
            title: 'ImageTitle3',
            image: img3
        }
    ],
    row2: [
        {
            img: 4,
            title: 'ImageTitle4',
            image: img4
        },
        {
            img: 5,
            title: 'ImageTitle5',
            image: img5
        },
        {
            img: 6,
            title: 'ImageTitle6',
            image: img6
        },
        {
            img: 7,
            title: 'ImageTitle7',
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
                    <div className="col-sm-8">
                        <h2 className="mbr-section-title h1">ABOUT US</h2>
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
                <h3 className="mbr-section-title abt-section-title display-1">ABOUT US</h3>
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
                <div className="clearfix"></div>
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
        </div>
    );
};

module.exports = { AboutHeading, AboutGallery, GalleryHeading, AboutHeader };