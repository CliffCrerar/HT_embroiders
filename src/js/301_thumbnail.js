/**
 * SERVICES THUMBNAIL COMPONENT
 * @summary Defines the JSX to be used in for the thumbnails section of services
 * @author Cliff Crerar
 * Created at     : 2018-06-02 14:05:33
 * Last modified  : 2018-06-04 17:00:23
 */

import React from 'react';

const ServiceThumbnail = ({ svcName, svcThumbnail }) => {
    return (
        <div className="col-sm-6 col-md-3">
            <div className="card cart-block">
                <div>
                    <img id="card-img-top1" className="card-img-top" src={svcThumbnail} />
                </div>
                <div className="card-block">
                    <h4 className="card-title text-xs-center">{svcName}</h4>
                </div>
            </div>
        </div>
    );
};

export default ServiceThumbnail;