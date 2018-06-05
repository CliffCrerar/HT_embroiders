/**
 * HOME PAGE COMPONENT
 * @summary 
 * @author Cliff Crerar
 * Created at     : 2018-06-02 13:38:18 
 * Last modified  : 2018-06-02 13:38:53
 */

import React from 'react';

import logo from '../images/Logo/logoOrig_1.png'; // Import logo

const Homepage = () => {
    return (

        <div className="mbr-table-cell">
            <div className="container">
                <div className="row home-page-title-box">
                    <img id="logohp" className="logohp" src={logo} />
                </div>
            </div>
        </div>

    );
};

export default Homepage;