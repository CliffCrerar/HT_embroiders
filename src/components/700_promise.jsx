/**
 * OUR PROMISE
 * @summary JSX for the section of the page on our promise
 * @author Cliff Crerar
 * Created at     : 2018-06-04 22:17:19 
 * Last modified  : 2018-06-18 21:16:58
 */

import React from 'react';

const promiseText = 'Pulvinar pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing'

// Section configuration
const OurPromise = () => {
    return (
        <div>
            <div className="container clients-promise-box">
                <div className="row text-xs-center">
                    <div className="col-sm-8 col-sm-offset-2">
                        <h2 className="mbr-section-title display-3">
                            Our promise<i className="title-icon fas fa-link"></i>
                        </h2>
                        <div className="lead">
                            <p className="client-promise-text">{promiseText}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="anchor-offset header-section" id="team"></div>
        </div>
    );
};

export default OurPromise;