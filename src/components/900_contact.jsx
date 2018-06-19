/**
 * LOCATION OF HT EMBROIDERS
 * @summary Shows where HT embroiders is located
 * @author Cliff Crerar
 * Created at     : 2018-06-04 22:46:55
 * Last modified  : 2018-06-19 07:02:34
 */

import React from 'react';

const contactInfo = {
    streetName: '',
    city: '',
    email: '',
    phone: '',
    fax: ''
}

const links = {
    brochure: '',
    priceList: '',
    aboutTheDeveloper: ''
}

const ContactHeading = () => {
    return (
        <div className="container">
            <div className="row">
                <div>
                    <div className="col-sm-12">
                        <h2 className="mbr-section-title h1 display-2">
                            CONTACT US<span className="title-icon fas fa-envelope"></span>
                        </h2>
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

const ContactDetails = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-3">
                    <p>
                        <strong>Address:</strong>
                        <br /> Shop 16
                        <br /> Naud&eacute; Street
                        <br /> Ermelo
                        <br /> 2350
                        <br />
                        <br />
                        <strong>Contacts:</strong>
                        <br /> Email: htbodruur@mweb.co.za
                        <br /> Phone: +27 17 819 1863
                        <br /> Cell: +27 82 342 7211
                        <br /> FAX: 086 644 8262</p>
                </div>
                <div className="col-xs-12 col-md-3">
                    <strong>Downloads</strong>
                    <ul>
                        <li>
                            <a href="#/">Brochure</a>
                        </li>
                        <li>
                            <a href="#">Price list</a>
                        </li>
                    </ul>
                </div>
                <div className="col-xs-12 col-md-6" data-form-type="formoid">
                    <div data-form-alert="true">
                        <div hidden="" data-form-alert-success="true">Thanks for filling out form!</div>
                    </div>
                    <form action="#/" method="post" data-form-title="MESSAGE">
                        <input type="hidden" value=""
                            data-form-email="true" />

                        <div className="form-group">
                            <input type="email" className="form-control input-sm input-inverse" name="email" required="" placeholder="Email*" data-form-field="Email" />
                        </div>

                        <div className="form-group">
                            <textarea className="form-control input-sm input-inverse" name="message" rows="4" placeholder="Message" data-form-field="Message"></textarea>
                        </div>
                        <div className="text-xs-right">
                            <button type="submit" className="btn btn-black">Contact Us</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

module.exports = { ContactHeading, LocationGoogleMaps, ContactDetails };