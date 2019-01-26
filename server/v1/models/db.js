const allParties = [
  {
    id: 1,
    name: 'Action Peoples Congress',
    hqAddress: 'Wuse Zone II, Abuja, Nigeria',
    logoUrl: '../assets/images/apc.png',
  },
  {
    id: 2,
    name: 'All Democratic Congress',
    hqAddress: 'Wuse Zone I, Abuja, Nigeria',
    logoUrl: '../assets/images/adc.png',
  },
  {
    id: 3,
    name: 'Alliance for Democracy Party',
    hqAddress: 'Gwarinpa, Abuja, Nigeria',
    logoUrl: '../assets/images/adp.jpg',
  },
  {
    id: 4,
    name: 'All Peoples Grand Alliance',
    hqAddress: 'Garki, Abuja, Nigeria',
    logoUrl: '../assets/images/apga.png',
  },
];

const allOffices = [
  {
    id: 1,
    type: 'Federal',
    name: 'President',
  },
  {
    id: 2,
    type: 'Legislative',
    name: 'Senate',
  },
  {
    id: 3,
    type: 'Legislative',
    name: 'Member, Federal House of Rep',
  },
  {
    id: 4,
    type: 'State',
    name: 'Governor',
  },
  {
    id: 5,
    type: 'Local Government',
    name: 'Chairman',
  },
];

const viewParties = () => allParties;

const editParty = (partyId, partyName) => {
  for (let i = 0; i < allParties.length; i++) {
    if (partyId === allParties[i].id) {
      allParties[i].name = partyName;

      return true;
    }
  }
  return false;
};

const addParty = (party) => {
  allParties.push(party);
};

const addOffice = (office) => {
  allOffices.push(office);
};

const removeParty = (partyId) => {
  for (let i = 0; i < allParties.length; i++) {
    if (partyId === allParties[i].id) {
      allParties.splice(i, 1);
      return true;
    }
  }
  return false;
};

const viewParty = (partyId) => {
  for (let i = 0; i < allParties.length; i++) {
    if (partyId === allParties[i].id) {
      const party = [allParties[i]];
      return party;
    }
  }

  return [];
};

const viewOffices = () => allOffices;

const viewAnOffice = (officeId) => {
  for (let i = 0; i < allOffices.length; i++) {
    if (allOffices[i].id === officeId) {
      return [allOffices[i]];
    }
  }
  return [];
};

const Db = {
  viewParties,
  addParty,
  addOffice,
  removeParty,
  editParty,
  viewParty,
  viewOffices,
  viewAnOffice,
};

export default Db;
