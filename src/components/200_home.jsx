/**
 * HOME PAGE COMPONENT
 * @summary
 * @author Cliff Crerar
 * Created at     : 2018-06-02 13:38:18
 * Last modified  : 2018-06-05 23:17:10
 */

import React from 'react';

//import logo from '../images/Logo/logoOrig_1.png'; // Algeria font black
//import logo from '../images/Logo/logoOrig_2.png'; // Algeria font white
//import logo from '../images/Logo/logoOrig_3.png'; // Algeria font purple
//import logo from '../images/Logo/logoOrig_1_2_Tone_white_grey.png'; // Import logo white grey
//import logo from '../images/Logo/logoOrig_1_2_Tone_white_black.png';
//import logo from '../images/Logo/logoOrig_1_2_Tone_light_yellow_purple.png';
//import logo from '../images/Logo/logoOrig_1_2_Tone_white_purple.png';
import logo from '../images/Logo/logoOrig_1_2_Tone_beige_green.png';
//import logo from '../images/Logo/proposedLogo2.jpeg';
//import logo from '../images/Logo/proposedLogo1_vector.jpeg';
//import logo from '../images/Logo/proposedLogo2_vector.jpeg';

const Homepage = () => {
    return (

        < div className="mbr-table-cell" >
            <div className="container-fluid logoBandDemo2">
                <div className="row home-page-title-box">
                    {/*<img id="logohp" className="logohp" src={logo} />*/}
                    <div className='col-sm-4 logo-column'>
                        <img id="logohp" className="logohp1" src={logo} />
                    </div>
                    <div className='col-sm-8'>
                        <h2 className='pageTitle'>Borduurders</h2>
                        <h2 className='pageTitle'>Embroiders</h2>
                    </div>
                </div>
            </div>
        </div >

    );
};
/*
protO Logo 1
            <div className="mbr-table-cell">
    <div className="container-fluid logoBandDemo1">
        <div className="row home-page-title-box">
            <img id="logohp" className="logohp" src={logo} />
        </div>
    </div>
</div>
*/
export default Homepage;