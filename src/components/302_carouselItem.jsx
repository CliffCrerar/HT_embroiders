/**
 * CAROUSEL ITEM JSX
 * @summary This file returns a single carousel item
 * @author Cliff Crerar
 * Created at     : 2018-06-04 16:29:00
 * Last modified  : 2018-06-05 03:59:08
 */

import React from 'react';

const CarouselItem = ({ svcName, svcImage, svcDesc, idx }) => {
    let activeClass;
    const carouselId = `carousel-item${idx}`
    if (idx === 0) {
        activeClass = 'mbr-section carousel-item dark center mbr-section-full active';
    } else {
        activeClass = 'mbr-section carousel-item dark center mbr-section-full';
    }
    return (
        <div id={carouselId} className={activeClass} style={{ "backgroundImage": `url(${svcImage})` }} >
            <div className="mbr-table-cell">
                <div className=" container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-1">
                            <h2 className="mbr-section-title display-1">{svcName}</h2>
                            <p className="lead text-justify">{svcDesc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const carouselImages = (svcThumbnailList) => {
    const images = svcThumbnailList.map((listItem, idx) => {
        return (
            <CarouselItem
                key={listItem.svcName}
                svcName={listItem.svcName}
                svcImage={listItem.svcImage}
                svcDesc={listItem.svcDesc}
                idx={idx}
            />
        );
    });
    return images;
}

const CarouselButton = ({ idx }) => {
    let activeClass;
    if (idx === 0) {
        activeClass = 'active carDot';
    } else {
        activeClass = 'carDot'
    }
    return <li data-app-prevent-settings="" data-target="#slider-j" data-slide-to={idx} className={activeClass}></li>
}

const carouselButtons = (svcThumbnailList) => {
    const buttons = svcThumbnailList.map((btn, idx) => {
        return (
            <CarouselButton
                key={idx}
                idx={idx}
            />
        )
    });
    return buttons;
}

module.exports = { carouselImages, carouselButtons }