/**
 * LOCATION OF HT EMBROIDERS
 * @summary Shows where HT embroiders is located
 * @author Cliff Crerar
 * Created at     : 2018-06-04 22:46:55
 * Last modified  : 2018-07-07 07:25:43
 */

import React from 'react';

const contactInfo = {
    streetName: '',
    city: '',
    email: '',
    phone: '',
    fax: ''
};

const links = {
    brochure: '',
    priceList: '',
    aboutTheDeveloper: ''
};

const ContactHeading = () => {
    return (
        <div className="container">
            <div className="row">
                <div>
                    <div className="col-sm-12">
                        <h2 className="mbr-section-title cntct-section-title h1 display-2">
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
                        <br /> Email: info@htembroiders.com
                        <br /> Phone: +27 17 819 1863
                        <br /> Cell: +27 82 342 7211
                        <br /> FAX: +27 86 644 8262</p>
                </div>
                <div className="col-xs-12 col-md-3">
                    <strong>Suppliers</strong>
                    <ul>
                        <li>
                            <a href="http://www.barron.co.za/" target="_blank">BARRON</a>
                        </li>
                        <li>
                            <a href="http://www.altitudec.co.za" target="_blank">altitude</a>
                        </li>
                        <li>
                            <a href="https://www.kmq.co.za" target="_blank">KMQ Trade only suppliers</a>
                        </li>
                        <li>
                            <a href="http://www.bagsandmore.co.za" target="_blank">bags & more</a>
                        </li>
                        <li>
                            <a href="http://www.king-caps.net" target="_blank">Sino Hitec Trading</a>
                        </li>
                    </ul>
                </div>
                <div className="col-xs-12 col-md-6" data-form-type="formoid">
                    <div data-form-alert="true">
                        <div data-form-alert-success="true">
                            <p className="contact-form-msg">
                                Let us contact you<span className="contact-smiley far fa-smile-wink"></span>
                            </p>
                        </div>
                    </div>
                    <form action="#/" method="post" data-form-title="MESSAGE">
                        <input type="hidden" value=""
                            data-form-email="true" />

                        <div className="form-group">
                            <input id="email" type="email" className="form-control input-sm input-inverse" name="email" required="" placeholder="Your email address" data-form-field="Email" />
                        </div>

                        <div className="form-group">
                            <textarea id="msg" className="form-control input-sm input-inverse" name="message" rows="4" placeholder="Message" data-form-field="Message"></textarea>
                        </div>
                        <div className="text-xs-right">
                            <button id="sendMail" type="button" className="btn btn-black">
                                Send<span className="contact-smiley fab fa-telegram-plane"></span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

module.exports = { ContactHeading, LocationGoogleMaps, ContactDetails };