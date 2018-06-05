/**
 * LOCATION OF HT EMBROIDERS
 * @summary Shows where HT embroiders is located
 * @author Cliff Crerar
 * Created at     : 2018-06-04 22:46:55 
 * Last modified  : 2018-06-04 23:01:43
 */

import React from 'react';

const LocationHeading = () => {
    return (
        <div className="container">
            <div className="row">
                <div>
                    <div className="col-sm-8">
                        <h2 className="mbr-section-title h1">Where you can find us</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

const LocationGoogleMaps = () => {
    return (
        <div className="mbr-map">
            <iframe className="mapsIframe" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0Dx_boXQiwvdz8sJHoYeZNVTdoWONYkU&amp;q=place_id:ChIJ19hR7Wjl6x4R_6EQSi73uos"
                allowFullScreen=""></iframe>
        </div>
    );
};

module.exports = { LocationHeading, LocationGoogleMaps };