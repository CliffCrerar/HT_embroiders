/**
 * SOCIAL LINKS
 * @summary JSX for the social links section of the page
 * @author Cliff Crerar
 * Created at     : 2018-06-04 22:14:15 
 * Last modified  : 2018-06-04 22:21:50
 */

import React from 'react';

// Social configuration

const SocialLinks = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <h2 className="mbr-section-title h1">Follow Us</h2>
                </div>
                <div className="col-sm-8 text-xs-right">
                    <a className="btn btn-social socicon-bg-twitter" title="Twitter" target="_blank" href="https://twitter.com/mobirise">
                        <i className="socicon socicon-twitter"></i>
                    </a>
                    <a className="btn btn-social socicon-bg-facebook" title="Facebook" target="_blank" href="https://www.facebook.com/pages/Mobirise/1616226671953247">
                        <i className="socicon socicon-facebook"></i>
                    </a>
                    <a className="btn btn-social socicon-bg-google" title="Google+" target="_blank" href="https://plus.google.com/u/0/+Mobirise/posts">
                        <i className="socicon socicon-google"></i>
                    </a>
                    <a className="btn btn-social socicon-bg-youtube" title="YouTube" target="_blank" href="https://www.youtube.com/channel/UCt_tncVAetpK5JeM8L-8jyw">
                        <i className="socicon socicon-youtube"></i>
                    </a>
                    <a className="btn btn-social socicon-bg-instagram" title="Instagram" target="_blank" href="https://instagram.com/mobirise/">
                        <i className="socicon socicon-instagram"></i>
                    </a>
                    <a className="btn btn-social socicon-bg-pinterest" title="Pinterest" target="_blank" href="https://www.pinterest.com/mobirise/">
                        <i className="socicon socicon-pinterest"></i>
                    </a>
                    <a className="btn btn-social socicon-bg-tumblr" title="Tumblr" target="_blank" href="http://mobirise.tumblr.com/">
                        <i className="socicon socicon-tumblr"></i>
                    </a>
                    <a className="btn btn-social socicon-bg-linkedin" title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/mobirise">
                        <i className="socicon socicon-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SocialLinks;