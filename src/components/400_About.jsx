/**
 * ABOUT US SECTION 1
 * @summary JSX for the about section
 * @author Cliff Crerar
 * Created at     : 2018-06-04 17:40:15
 * Last modified  : 2018-06-05 02:40:01
 */

import React from 'react';
import { GallerySmallItems, GalleryZoomIndicators, GalleryZoomImages } from './401_aboutGallery.jsx';
// Import Images
import img0 from '../images/temp/photo-3-small.jpg';
import img1 from '../images/temp/photo-4-small.jpg';
import img2 from '../images/temp/photo-5-small.jpg';
import img3 from '../images/temp/photo-7-small.jpg';
import img4 from '../images/temp/photo-8-small.jpg';
import img5 from '../images/temp/photo-11-small.jpg';
import img6 from '../images/temp/photo-12-small.jpg';
import img7 from '../images/temp/photo-13-small.jpg';
// About us configuration
const Header = {
    heading: 'About Us',
    paragraph: 'Lorem ipsum dolor sit amet, alienum omittantur cu qui, nisl mediocrem sed an. Ne pri admodum dolores. Usu ad option fierent, dicam dicunt malorum his ne, eum in molestie facilisis maiestatis. Doming aliquando sed eu, aeque aliquip est an. Tota dicunt qui in. Sea affert partem platonem at. Modo pericula ad vis. Tamquam civibus eu vix. Te eos inani argumentum, cum eleifend perpetua ut. Decore euismod no ius. Ne vel vide assum contentiones, augue laudem periculis id eum, ad se'
};

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


const Footer = {
    paragraph: 'Lorem ipsum dolor sit amet, falli saperet probatus ut ius, ei mel inani aperiam. Id sed mentitum deseruisse, ea vix cibo posse aliquip. Primis expetenda reprimique ad sea, at vis.'
};

// HEADING
const AboutHeading = () => {
    return (
        <div>
            <div className="mbr-overlay mbr-overlay-additional-1"></div>
            <div className="container">
                <h3 className="mbr-section-title display-2">{Header.heading}</h3>
                <div className="lead">
                    <p className="text-justify">{Header.paragraph}</p>
                </div>
            </div>
        </div >
    );
};

// GALLERRY
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

                                {/*
                                <div className="carousel-item active">
                                    <img id="gallery-zoom-img1" alt="" title="" />
                                </div>
                                <div className="carousel-item">
                                    <img id="gallery-zoom-img2" alt="" title="" />
                                </div>
                                <div className="carousel-item">
                                    <img id="gallery-zoom-img3" alt="" title="" />
                                </div>
                                <div className="carousel-item">
                                    <img id="gallery-zoom-img4" alt="" title="" />
                                </div>
                                <div className="carousel-item">
                                    <img id="gallery-zoom-img5" alt="" title="" />
                                </div>
                                <div className="carousel-item">
                                    <img id="gallery-zoom-img6" alt="" title="" />
                                </div>
                                <div className="carousel-item">
                                    <img id="gallery-zoom-img7" alt="" title="" />
                                </div>
                                <div className="carousel-item">
                                    <img id="gallery-zoom-img8" alt="" title="" />
                                </div>
                                */}
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

// FOOTER
const AboutFooter = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 lead">
                    <p className="text-justify">{Footer.paragraph}</p>
                </div>
            </div>
        </div>
    );
};

module.exports = { AboutHeading, AboutGallery, AboutFooter };