/**
 * CONTACT US
 * @summary JSX that shows contact information
 * @author Cliff Crerar
 *
 * Created at     : 2018-06-04 23:03:57 
 * Last modified  : 2018-06-04 23:10:18
 */

import React from 'react';

const ContactDetails = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-3">
                    <p>
                        <strong>Address</strong>
                        <br /> 1234 Street Name
                    <br /> City, AA 99999
                    <br />
                        <br />
                        <strong>Contacts</strong>
                        <br /> Email: support@mobirise.com
                    <br /> Phone: +1 (0) 000 0000 001
                    <br /> Fax: +1 (0) 000 0000 002</p>
                </div>
                <div className="col-xs-12 col-md-3">
                    <strong>Links</strong>
                    <ul>
                        <li>
                            <a href="#/">Website builder</a>
                        </li>
                        <li>
                            <a href="#/mobirise-free-win.zip">Download for Windows</a>
                        </li>
                        <li>
                            <a href="#/mobirise-free-mac.zip">Download for Mac</a>
                        </li>
                    </ul>
                </div>
                <div className="col-xs-12 col-md-6" data-form-type="formoid">
                    <div data-form-alert="true">
                        <div hidden="" data-form-alert-success="true">Thanks for filling out form!</div>
                    </div>
                    <form action="#/" method="post" data-form-title="MESSAGE">
                        <input type="hidden" value="uoaF8RsUIkevKNCtBXVKKOKBLpBqh6Z4oaynbZTuNnyJeCpSuTyd6FpsZdzjdzyZ3Y2TKsl7qT9Scu5kOGAVqTXEh/ddl+2v662FbPt55JgqdeXD5P4r3mkGInCE8t4H"
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

export default ContactDetails;