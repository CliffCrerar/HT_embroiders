/**
 * CLIENTS
 * @summary THis section is to show who the current clients are of HT embroiders
 * @author Cliff Crerar
 * Created at     : 2018-06-04 22:01:32
 * Last modified  : 2018-06-11 07:12:18
 */

import React from 'react';

// CLIENT HEADING
const clientsHeading = 'CLIENTS';

// CLIENTS HEADER
const ClientsHeading = () => {
    return (
        <div className="container">
            <div className="row">
                <div>
                    <div className="col-sm-8">
                        <h2 className="mbr-section-title h1">{clientsHeading}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Client Card
const ClientCard = (props) => {
    return (
        <div className="col-xs-12 col-sm-6 col-md-4">
            <a className="client-card-anchor" href={props.clientURL} target="_blank">
                <div className="card client-card">
                    <div className="card-header client-card-header">
                        <div>{props.clientName}</div>
                    </div>
                    <div className="card-block client-card-bottom">
                        <div>
                            <img src={props.clientLogo} title={props.clientAcro} alt={props.clientAcro} />
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

const OurClients = () => {

    const ClientData = [
        {
            ClientName: 'Anti Crime Security Unit',
            ClientURL: 'http://acsu.co.za/',
            ClientLogo: require('../images/ascu_logo.png'),
            ClientAcro: 'ACSU'
        },
        {
            ClientName: 'Topline Centre',
            ClientURL: 'http://www.goveza.com/ermelo/directory/topline-centre/',
            ClientLogo: '',
            ClientAcro: 'TLC'
        },
        {
            ClientName: 'Ntabeleng Bbm',
            ClientURL: 'https://www.facebook.com/groups/504107729715197/about/',
            ClientLogo: '',
            ClientAcro: 'Ntabeleng Bbm'
        },
        {
            ClientName: 'Ford Ermelo',
            ClientURL: 'http://www.24motors.co.za/WebSites/24motors/fordsite.nsf/pgIndex',
            ClientLogo: '',
            ClientAcro: '24-Motors'
        },
        {
            ClientName: 'Aeon Tool Hire',
            ClientURL: 'http://www.aeontoolhire.co.za/index.php',
            ClientLogo: '',
            ClientAcro: 'Aeon'
        },
        {
            ClientName: 'Brakecore Supply co.',
            ClientURL: 'http://brakecore.co.za/',
            ClientLogo: '',
            ClientAcro: 'BSC'
        }
    ];

    // Populate Client Card
    const populateCards = (Data) => {
        const populate = Data.map(data => {
            return (
                <ClientCard
                    key={data.ClientAcro}
                    clientName={data.ClientName}
                    clientLogo={data.ClientLogo}
                    clientURL={data.ClientURL}
                    clientAcro={data.ClientAcro}
                />
            );
        });
        return populate;
    };

    return (
        <div>
            <div className="mbr-overlay mbr-overlay-additional-2"></div>
            <div className="container">
                {/*<h2 className="mbr-section-title display-3 text-xs-center">Clients</h2>*/}
                <div className="row mbr-testimonial-cards">
                    {populateCards(ClientData)}
                </div>
            </div>
        </div>
    );
};

module.exports = { ClientsHeading, OurClients };