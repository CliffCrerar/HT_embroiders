/**
 * HOME PAGE COMPONENT
 * @summary
 * @author Cliff Crerar
 * Created at     : 2018-06-02 13:38:18
 * Last modified  : 2018-06-07 07:44:11
 */

import React from 'react';

import logo from '../images/Logo/logoOrig_3d_solid_white_grey_2.png';

const Homepage = () => {
    return (

        <div className="logoBandDemo4">
            <div className="home-bg-logo-cntr">
                <img id="logohp" className="logohp" src={logo} />
            </div>
        </div>

    );
};

export default Homepage;