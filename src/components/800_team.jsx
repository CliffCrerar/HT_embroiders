/**
 * ABOUT THE TEAM
 * @summary Describes the HT team and portraits of members
 * @author Cliff Crerar
 * Created at     : 2018-06-04 22:26:55
 * Last modified  : 2018-07-05 21:22:52
 */

import React from 'react';

const TeamHeading = () => {
    return (
        <div className="container">
            <div className="row">
                <div>
                    <div className="col-sm-12">
                        <h2 className="team-heading mbr-section-title tm-section-title h1 display-2">
                            <span className="title-icon fas fa-cogs"></span>THE TEAM
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

const TeamMembers = () => {
    const team = [
        {
            key: 'person-1',
            name: 'Anette',
            personImage: require('../images/team_member_6_annette.jpeg'),
            designation: 'Owner'
        },
        {
            key: 'person-2',
            name: 'Charmaine',
            personImage: require('../images/team_member_4_charmaine.jpeg'),
            designation: 'General manager'
        },
        {
            key: 'person-3',
            name: 'Cisca',
            personImage: require('../images/team_member_5_cisca.jpeg'),
            designation: 'Assistant manager'
        },
        {
            key: 'person-4',
            name: 'Norah',
            personImage: require('../images/team_member_2_norah.jpeg'),
            designation: 'Embroideress'
        },
        {
            key: 'person-5',
            name: 'Mavis',
            personImage: require('../images/team_member_3_mavis.jpeg'),
            designation: 'Embroideress'
        },
        {
            key: 'person-6',
            name: 'Andile',
            personImage: require('../images/team_member_1_andile.jpeg'),
            designation: 'Cutter'
        },
    ];

    const Member = (props) => {
        return (
            <div className="col-sm-6 col-md-4">
                <div className="card cart-block team-member-card">
                    <img className="card-img-top team-member-image" src={props.personImage} alt={props.name} title={props.name} />
                    <div className="card-block">
                        <h4 className="card-title text-xs-center">{props.name}</h4>
                        <p className="card-text">{props.designation}</p>
                    </div>
                </div>
            </div>
        );
    };

    const DisplayMembers = (detail) => {
        const teamDetails = detail.map(member => {
            return (
                <Member
                    key={member.key}
                    name={member.name}
                    personImage={member.personImage}
                    designation={member.designation}
                />
            );
        });

        return (
            <div className="row">
                {teamDetails}
            </div>
        );
    };

    return (
        <div>
            <div className="mbr-overlay mbr-overlay-additional-3"></div>
            <div className="container">
                {DisplayMembers(team)}
            </div>
            <div className="anchor-offset header-section" id="contact"></div>
        </div>
    );
};

module.exports = { TeamHeading, TeamMembers };