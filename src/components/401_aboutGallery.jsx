/**
 * GALLERY ITEM POPULATION
 * @summary Contains the methods on populating the gallery
 * @author Cliff Crerar
 * Created at     : 2018-06-04 18:37:48
 * Last modified  : 2018-07-07 07:25:17
 */

import React from 'react';

const GallerySmallItem = ({ itm, i }) => {
    return (
        <div className="mbr-gallery-item">
            <a data-toggle="modal" href="#lb-gallery1-6" data-slide-to={itm.img}>
                <img id="gallery-img1" alt={itm.title} title={itm.title} src={itm.image} />
                <span className="icon fa fa-search-plus"></span>
            </a>
        </div>
    );
};

const GallerySmallItems = (galleryImageData, row) => {
    const thisRow = galleryImageData[row];
    const rows = thisRow.map((itm) => {
        return (
            <GallerySmallItem
                key={itm.title}
                itm={itm}
            />
        );
    });
    return rows;
};

const rowItemsOnly = (object) => {
    var NewArray = [];
    for (let key in object) {
        //console.log(object[key]);
        object[key].map(subObject => {
            //console.log(subObject);
            NewArray.push(subObject);
        });
    }
    return NewArray;
};

const GalleryZoomIndicator = ({ rowItem, activeClass }) => {
    return <li data-app-prevent-settings="" data-target="#lb-gallery1-6" className={activeClass} data-slide-to={rowItem.img}></li>;
};

const GalleryZoomIndicators = (galleryImageData) => {
    let imageDataCollection = rowItemsOnly(galleryImageData);
    const zoomInd = imageDataCollection.map((imageDataItem, i) => {
        let activeClass;
        if (i === 0) {
            activeClass = 'active';
        } else {
            activeClass = '';
        }
        return (
            <GalleryZoomIndicator
                key={imageDataItem.img}
                rowItem={imageDataItem}
                activeClass={activeClass}
            />
        );
    });
    return zoomInd;
};

const GalleryZoomImage = ({ imageDataItem, imgId, activeClass }) => {
    return (
        <div className={activeClass}>
            <img id={imgId} alt={imageDataItem.tite} title={imageDataItem.title} src={imageDataItem.image} />
        </div>
    );

};

const GalleryZoomImages = (galleryImageData) => {
    let imageDataCollection = rowItemsOnly(galleryImageData);
    const zoomImg = imageDataCollection.map((imageDataItem, i) => {
        let activeClass;
        if (i === 0) {
            activeClass = 'carousel-item active';
        } else {
            activeClass = 'carousel-item';
        }
        let imgId = `gallery-zoom-img${imageDataItem.img}`;
        return (
            <GalleryZoomImage
                key={imageDataItem.img}
                imageDataItem={imageDataItem}
                imgId={imgId}
                activeClass={activeClass}
            />
        );
    });
    return zoomImg;
};

module.exports = { GallerySmallItems, GalleryZoomIndicators, GalleryZoomImages };