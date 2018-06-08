/**
 * CLIENTS
 * @summary THis section is to show who the current clients are of HT embroiders
 * @author Cliff Crerar
 * Created at     : 2018-06-04 22:01:32 
 * Last modified  : 2018-06-08 19:00:07
 */

import React from 'react';

// Section configuration
const clientDisplayData = [
    { clientName: 'Client1', Logo: '' }
];

const OurClients = () => {
    return (
        <div>
            <div className="mbr-overlay mbr-overlay-additional-2"></div>
            <div className="container">
                <h2 className="mbr-section-title display-3 text-xs-center">Clients</h2>

                <div className="row mbr-testimonial-cards">
                    <div className="col-xs-12 col-sm-6 col-md-4">
                        <div className="card">
                            <div className="card-footer text-muted">
                                <div>ABANOUB S.</div>
                                <small>User</small>
                            </div>
                            <div className="card-block">
                                <em>“its really very amazing app that makes me finish html page in 3 minutes ( that's usually
                                    takes more than 1 hours at least from me if i did it from scratch). i hope to have
                                very big library and plugins for this APP thanks again for your nice application”</em>
                            </div>
                        </div>
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

export default OurClients;