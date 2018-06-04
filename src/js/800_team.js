/**
 * ABOUT THE TEAM
 * @summary Describes the HT team and portraits of members
 * @author Cliff Crerar
 * Created at     : 2018-06-04 22:26:55 
 * Last modified  : 2018-06-04 22:49:46
 */

import React from 'react';

const TeamHeading = () => {
    return (
        <div className="container">
            <div className="row">
                <div>
                    <div className="col-sm-8">
                        <h2 className="mbr-section-title h1">The team</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TeamMembers = () => {
    return (
        <div>
            <div className="mbr-overlay mbr-overlay-additional-3"></div>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3">
                        <div className="card cart-block">
                            <div className="card-block">
                                <h4 className="card-title text-xs-center">Bootstrap 3</h4>
                                <p className="card-text">Bootstrap 3 has been noted as one of the most reliable and proven frameworks and Mobirise
                                    has been equipped to develop websites using this framework.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="card cart-block">
                            <div className="card-block">
                                <h4 className="card-title text-xs-center">Responsive</h4>
                                <p className="card-text">One of Bootstrap 3's big points is responsiveness and Mobirise makes effective use of this
                                    by generating highly responsive website for you.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="card cart-block">
                            <div className="card-block">
                                <h4 className="card-title text-xs-center">Web Fonts</h4>
                                <p className="card-text">Google has a highly exhaustive list of fonts compiled into its web font platform and Mobirise
                                    makes it easy for you to use them on your website easily and freely.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3">
                        <div className="card cart-block">
                            <div className="card-block">
                                <h4 className="card-title text-xs-center">Unlimited Websites</h4>
                                <p className="card-text">Mobirise gives you the freedom to develop as many websites as you like given the fact that
                                    it is a desktop app.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

module.exports = { TeamHeading, TeamMembers };