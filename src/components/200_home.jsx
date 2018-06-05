/**
 * HOME PAGE COMPONENT
 * @summary
 * @author Cliff Crerar
 * Created at     : 2018-06-02 13:38:18
 * Last modified  : 2018-06-05 17:50:04
 */

import React from 'react';

import logo from '../images/Logo/logoOrig_1.png'; // Import logo
//import logo from '../images/Logo/proposedLogo1.jpeg';
//import logo from '../images/Logo/proposedLogo2.jpeg';
//import logo from '../images/Logo/proposedLogo1_vector.jpeg';
//import logo from '../images/Logo/proposedLogo2_vector.jpeg';

const Homepage = () => {
    return (

        < div className="mbr-table-cell" >
            <div className="container">
                <div className="row home-page-title-box">
                    {/*<img id="logohp" className="logohp" src={logo} />*/}
                    <img id="logohp" className="logohp" src={logo} />
                </div>
            </div>
        </div >

    );
};
/*
protO Logo 1
            <div className="mbr-table-cell">
    <div className="container-fluid logoBand">
        <div className="row home-page-title-box">
            <img id="logohp" className="logohp" src={logo} />
        </div>
    </div>
</div>
*/
export default Homepage;