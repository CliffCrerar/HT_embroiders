/**
 * SOCIAL LINKS
 * @summary JSX for the social links section of the page
 * @author Cliff Crerar
 * Created at     : 2018-06-04 22:14:15 
 * Last modified  : 2018-06-11 21:49:00
 */

import React from 'react';

// Social configuration

const SocialMedia = () => {
    const socialProfiles = [
        {
            key: 'social-1',
            title: 'twitter',
            linkClass: 'socicon-bg-twitter',
            link: 'https://twitter.com/mobirise',
            icon: 'socicon-twitter',
        },
        {
            key: 'social-2',
            title: 'facebook',
            linkClass: 'socicon-bg-facebook',
            link: 'https://www.facebook.com/pages/Mobirise/1616226671953247',
            icon: 'socicon-facebook',
        },
        {
            key: 'social-3',
            title: 'Google+',
            linkClass: 'socicon-bg-google',
            link: 'https://plus.google.com/u/0/+Mobirise/posts',
            icon: 'socicon-google',
        },
        {
            key: 'social-4',
            title: 'YouTube',
            linkClass: 'socicon-bg-youtube',
            link: 'https://www.youtube.com/channel/UCt_tncVAetpK5JeM8L-8jyw',
            icon: 'socicon-youtube',
        },
        {
            key: 'social-5',
            title: 'Instagram',
            linkClass: 'socicon-bg-instagram',
            link: 'https://instagram.com/mobirise/',
            icon: 'socicon-instagram',
        },
        {
            key: 'social-6',
            title: 'Pinterest',
            linkClass: 'socicon-bg-pinterest',
            link: 'https://www.pinterest.com/mobirise/',
            icon: 'socicon-pinterest',
        },
        {
            key: 'social-7',
            title: 'Tumblr',
            linkClass: 'socicon-bg-tumblr',
            link: 'http://mobirise.tumblr.com/',
            icon: 'socicon-tumblr',
        },
        {
            key: 'social-8',
            title: 'LinkedIn',
            linkClass: 'socicon-bg-linkedin',
            link: 'https://www.linkedin.com/in/mobirise',
            icon: 'socicon-linkedin',
        }
    ]

    const mapSocialLinks = socialProfiles.map(profile => {
        return (
            <a key={profile.key} className={`btn btn-social ${profile.linkClass}`} title={profile.title} target="_blank" href={profile.link}>
                <i className={`socicon ${profile.icon}`}></i>
            </a>
        );
    });
    return (
        <div className="col-sm-8 text-xs-right">
            {mapSocialLinks}
        </div>
    );
}

const SocialLinks = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <h2 className="client-social-title mbr-section-title h1">Follow Us</h2>
                </div>
                <SocialMedia />
            </div>
        </div>
    );
};

export default SocialLinks;