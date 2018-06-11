/**
 * CLIENTS
 * @summary THis section is to show who the current clients are of HT embroiders
 * @author Cliff Crerar
 * Created at     : 2018-06-04 22:01:32
 * Last modified  : 2018-06-11 07:12:18
 */

import React from 'react';

// CLIENT LOGO
import ascuLogo from '../images/ascu_logo.png';

// CLIENT HEADING
const clientsHeading = 'CLIENTS';

// Section configuration
const clientDisplayData = [
    { clientName: 'Client1', Logo: '' }
];

// CLIENTS HEADER
const ClientsHeading = () => {
    return (
        <div className="container">
            <div className="row">
                <div>
                    <div className="col-sm-8">
                        <h2 className="mbr-section-title h1">{clientsHeading}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

const OurClients = () => {
    return (
        <div>
            <div className="mbr-overlay mbr-overlay-additional-2"></div>
            <div className="container">
                {/*<h2 className="mbr-section-title display-3 text-xs-center">Clients</h2>*/}

                <div className="row mbr-testimonial-cards">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <a className="client-card-anchor">
                            <div className="card client-card">
                                <div className="card-header client-card-header">
                                    <div>Anti Crime Security Unit</div>
                                </div>
                                <div className="card-block client-card-bottom">
                                    <div>
                                        <img src={ascuLogo} title="ASCU" alt="ASCU" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="card">
                            <div className="card-block">
                                <em>“First of all hands off to you guys for your effort and nice, super tool. Good work mobirise
                                    team. We are expecting the new version soon with advance functionality with full
                                    bootstrap design. Great effort and super UI experience with easy drag &amp; drop
                                with no time design bootstrap builder in present web design world.”</em>
                            </div>
                            <div className="card-footer text-muted">
                                <div>SUFFIAN A.</div>
                                <small>User</small>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="card">
                            <div className="card-block">
                                <em>“At first view, looks like a nice innovative tool, i like the great focus and time that
                                    was given to the responsive design, i also like the simple and clear drag and drop
                                    features. Give me more control over the object's properties and ill be using this
                                tool for more serious projects. Regards.”</em>
                            </div>
                            <div className="card-footer text-muted">
                                <div>JHOLLMAN C.</div>
                                <small>User</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

module.exports = { ClientsHeading, OurClients };