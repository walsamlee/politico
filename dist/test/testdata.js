'use strict';

var party = [{
    id: 1,
    name: 'Action Peoples Congress',
    hqAddress: 'Wuse Zone II, Abuja, Nigeria',
    logoUrl: '../assets/images/apc.png'
}, {
    id: 2,
    name: 'All Democratic Congress',
    hqAddress: 'Wuse Zone I, Abuja, Nigeria',
    logoUrl: '../assets/images/adc.png'
}, {
    id: 3,
    name: 'Alliance for Democracy Party',
    hqAddress: 'Gwarinpa, Abuja, Nigeria',
    logoUrl: '../assets/images/adp.jpg'
}, {
    id: 4,
    name: 'All Peoples Grand Alliance',
    hqAddress: 'Garki, Abuja, Nigeria',
    logoUrl: '../assets/images/adc.png'
}];

var partyPost = {
    id: 5,
    name: 'Labour Party',
    hqAddress: 'Wuse Zone III, Abuja, Nigeria',
    logoUrl: '../assets/images/labour.png'
};

var partyPut = {
    name: 'National Conscience Party',
    hqAddress: 'Katampe District, Abuja, Nigeria',
    logoUrl: '../assets/images/ncp.jpg'
};

var office = [{
    id: 1,
    type: 'Federal',
    name: 'President'
}, {
    id: 2,
    type: 'Lagislature',
    name: 'Senate'
}, {
    id: 3,
    type: 'State',
    name: 'Governor'
}, {
    id: 4,
    type: 'State',
    name: 'Member, State House of Rep'
}];

var officePost = {
    id: 5,
    type: 'Local Government',
    name: 'Chairman'
};

var officePut = {
    name: 'Member, Federal House of Rep'
};

module.exports = {
    party: party,
    partyPost: partyPost,
    partyPut: partyPut,
    office: office,
    officePost: officePost,
    officePut: officePut
};