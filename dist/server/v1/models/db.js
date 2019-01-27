'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var allParties = [{
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

var allOffices = [{
  id: 1,
  type: 'Federal',
  name: 'President'
}, {
  id: 2,
  type: 'Legislative',
  name: 'Senate'
}, {
  id: 3,
  type: 'Legislative',
  name: 'Member, Federal House of Rep'
}, {
  id: 4,
  type: 'State',
  name: 'Governor'
}, {
  id: 5,
  type: 'Local Government',
  name: 'Chairman'
}];

var viewParties = function viewParties() {
  return allParties;
};

var editParty = function editParty(partyId, partyName) {
  for (var i = 0; i < allParties.length; i++) {
    if (partyId === allParties[i].id) {
      allParties[i].name = partyName;

      return true;
    }
  }
  return false;
};

var addParty = function addParty(party) {
  allParties.push(party);
};

var addOffice = function addOffice(office) {
  allOffices.push(office);
};

var removeParty = function removeParty(partyId) {
  for (var i = 0; i < allParties.length; i++) {
    if (partyId === allParties[i].id) {
      allParties.splice(i, 1);
      return true;
    }
  }
  return false;
};

var viewParty = function viewParty(partyId) {
  for (var i = 0; i < allParties.length; i++) {
    if (partyId === allParties[i].id) {
      var party = [allParties[i]];
      return party;
    }
  }

  return [];
};

var viewOffices = function viewOffices() {
  return allOffices;
};

var viewAnOffice = function viewAnOffice(officeId) {
  for (var i = 0; i < allOffices.length; i++) {
    if (allOffices[i].id === officeId) {
      return [allOffices[i]];
    }
  }
  return [];
};

var Db = {
  viewParties: viewParties,
  addParty: addParty,
  addOffice: addOffice,
  removeParty: removeParty,
  editParty: editParty,
  viewParty: viewParty,
  viewOffices: viewOffices,
  viewAnOffice: viewAnOffice
};

exports.default = Db;