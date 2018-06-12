/**
 * PAGE FOOTER
 * @summary Page footer that shows developers logo
 * @author Cliff Crerar
 * Created at     : 2018-06-04 23:04:24
 * Last modified  : 2018-06-12 02:03:56
 */

import React from 'react';
import iaLogo from '../images/IA_logo.png';
const PageFooter = () => {
    return (
        <div className="container">
            <div className="about-dev">
                <p className="about-dev-text">website developed by</p>
                <div className="about-dev-img-link-img">
                    <a className="about-dev-link" href="http://infinityarc.net/" target="_blank">
                        <img className="about-dev-img" src={iaLogo} title="Infinity Arc" alt="IA Logo" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PageFooter;