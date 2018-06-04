/**
 * CAROUSEL ITEM JSX
 * @summary This file returns a single carousel item
 * @author Cliff Crerar
 * Created at     : 2018-06-04 16:29:00
 * Last modified  : 2018-06-04 18:08:55
 */

import React from 'react';

const CarouselItem = ({ svcName, svcImage, svcDesc, correctClass }) => {
    const activeClass = "mbr-section carousel-item dark center mbr-section-full active";
    const nonActiveClass = "mbr-section carousel-item dark center mbr-section-full";
    return (
        <div className={correctClass(activeClass, nonActiveClass)} style={{ "backgroundImage": `url(${svcImage})` }} >
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
        </div >
    );
};

export default CarouselItem;