/**
 * SERVICES THUMBNAIL COMPONENT
 * @summary Defines the JSX to be used in for the thumbnails section of services
 * @author Cliff Crerar
 * Created at     : 2018-06-02 14:05:33
 * Last modified  : 2018-06-05 02:39:51
 */

import React from 'react';

const ServiceThumbnail = ({ svcName, svcThumbnail }) => {
    return (
        <div className="svc-thumbnail col-sm-6 col-md-3">
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