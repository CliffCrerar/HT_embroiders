/**
 * ABOUT THE TEAM
 * @summary Describes the HT team and portraits of members
 * @author Cliff Crerar
 * Created at     : 2018-06-04 22:26:55 
 * Last modified  : 2018-06-12 00:47:34
 */

import React from 'react';
import placeHolder from '../images/teamplaceholder.png';

const TeamHeading = () => {
    return (
        <div className="container">
            <div className="row">
                <div>
                    <div className="col-sm-8">
                        <h2 className="team-heading mbr-section-title h1">THE TEAM</h2>
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
            name: 'Person Name',
            personImage: require('../images/teamplaceholder.png'),
            designation: 'designation'
        },
        {
            key: 'person-2',
            name: 'Person Name',
            personImage: require('../images/teamplaceholder.png'),
            designation: 'designation'
        },
        {
            key: 'person-3',
            name: 'Person Name',
            personImage: require('../images/teamplaceholder.png'),
            designation: 'designation'
        },
        {
            key: 'person-4',
            name: 'Person Name',
            personImage: require('../images/teamplaceholder.png'),
            designation: 'designation'
        }
    ]

    const Member = (props) => {
        return (
            <div className="col-sm-6 col-md-3">
                <div className="card cart-block team-member-card">
                    <img className="card-img-top team-member-image" src={props.personImage} alt={props.name} title={props.name} />
                    <div className="card-block">
                        <h4 className="card-title text-xs-center">{props.name}</h4>
                        <p className="card-text">{props.designation}</p>
                    </div>
                </div>
            </div>
        );
    }

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
        })
        return (
            <div className="row">
                {teamDetails}
            </div>
        );
    }

    return (
        <div>
            <div className="mbr-overlay mbr-overlay-additional-3"></div>
            <div className="container">
                {DisplayMembers(team)}
            </div>
        </div>
    );
};

module.exports = { TeamHeading, TeamMembers };