/**
 * SERVICES THUMBNAIL COMPONENT
 * @summary Defines the JSX to be used in for the thumbnails section of services
 * @author Cliff Crerar
 * Created at     : 2018-06-02 14:05:33
 * Last modified  : 2018-06-19 00:28:49
 */

import React from 'react';

const ServiceThumbnail = ({ svcName, svcThumbnail }) => {
    return (
        <div className="svc-thumbnail">
            <div className="card cart-block">
                <div>
                    <img id="card-img-top1" className="card-img-top" src={svcThumbnail} />
                </div>
                <div className="svc-card-block card-block">
                    <h4 className="svc-card-title card-title text-xs-center">{svcName}</h4>
                </div>
            </div>
        </div>
    );
};

export default ServiceThumbnail;