/**
 * GALLERY ITEM POPULATION
 * @summary Contains the methods on populating the gallery
 * @author Cliff Crerar
 * Created at     : 2018-06-04 18:37:48
 * Last modified  : 2018-06-04 19:23:24
 */

import React from 'react';

const RowItem = ({ itm, i }) => {
    return (
        <div className="mbr-gallery-item">
            <a data-toggle="modal" href="#lb-gallery1-6" data-slide-to={i}>
                <img id="gallery-img1" alt={itm.title} title={itm.title} src={itm.image} />
                <span className="icon fa fa-search-plus"></span>
            </a>
        </div>
    );
};

const GallerySmallItems = (galleryImageData, row) => {
    const thisRow = galleryImageData[row];
    console.log(thisRow);
    thisRow.map((itm, i) => {
        return (
            <RowItem
                key={itm.title}
                itm={itm}
                i={i}
            />
        );
    });
};
/*
const GalleryZoomIndicators = (galleryImageData) => {
    for (let row in galleryImageData) {
        let itemRow = galleryImageData[row]
        for (let itm in itemRow) {
            //console.log(itemRow[itm]);
            let activeClass;
            if (itemRow[itm].img === 0) {
                activeClass = 'active';
            } else {
                activeClass = '';
            }
            /*return (
                <li data-app-prevent-settings="" data-target="#lb-gallery1-6" className={activeClass} data-slide-to={itemRow[itm].img}></li>
            );
        }
    }
};

const GalleryZoomImages = (galleryImageData) => {
    for (let row in galleryImageData) {
        let itemRow = galleryImageData[row]
        for (let itm in itemRow) {
            //console.log(itemRow[itm]);
        }
    }
};*/

module.exports = { GallerySmallItems };