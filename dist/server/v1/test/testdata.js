'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
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
    logoUrl: '../assets/images/apga.png'
}];

var afterPostParty = [{
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
    logoUrl: '../assets/images/apga.png'
}, {
    id: 5,
    name: 'Labour Party',
    hqAddress: 'Wuse Zone III, Abuja, Nigeria',
    logoUrl: '../assets/images/labour.png'
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
    type: "Federal",
    name: "President"
}, {
    id: 2,
    type: "Legislative",
    name: "Senate"
}, {
    id: 3,
    type: "Legislative",
    name: "Member, Federal House of Rep"
}, {
    id: 4,
    type: "State",
    name: "Governor"
}, {
    id: 5,
    type: "Local Government",
    name: "Chairman"
}];

var afterPostOffice = [{
    id: 1,
    type: "Federal",
    name: "President"
}, {
    id: 2,
    type: "Legislative",
    name: "Senate"
}, {
    id: 3,
    type: "Legislative",
    name: "Member, Federal House of Rep"
}, {
    id: 4,
    type: "State",
    name: "Governor"
}, {
    id: 5,
    type: "Local Government",
    name: "Chairman"
}, {
    id: 6,
    type: 'Local Government',
    name: 'Councillor'
}];

var officePost = {
    id: 6,
    type: 'Local Government',
    name: 'Councillor'
};

var officePut = {
    name: 'Member, Federal House of Rep'
};

exports.default = {
    party: party,
    partyPost: partyPost,
    partyPut: partyPut,
    afterPostParty: afterPostParty,
    office: office,
    afterPostOffice: afterPostOffice,
    officePost: officePost,
    officePut: officePut
};