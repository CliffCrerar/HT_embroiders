/**
 * HOME PAGE COMPONENT
 * @summary
 * @author Cliff Crerar
 * Created at     : 2018-06-02 13:38:18
 * Last modified  : 2018-06-19 18:49:49
 */

import React from 'react';

import logo from '../images/Logo/logoOrig_3d_solid_white_grey_2.png';

const Homepage = () => {
    return (
        <div>
            <div className="logoBandDemo4">
                <div className="home-bg-logo-cntr">
                    <img id="logohp" className="logohp" src={logo} />
                </div>
            </div>
            <div className="scroll-down-div">
                <a href="#service">
                    <i className="scroll-down-glyph-1 fas fa-chevron-circle-down"></i>
                    <i className="scroll-down-glyph-2 fas fa-chevron-circle-down"></i>

                </a>
            </div>

            <div id="service" className="anchor-offset header-section"></div>
        </div>
    );
};

export default Homepage;