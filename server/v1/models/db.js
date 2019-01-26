let allParties = [
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
        logoUrl: '../assets/images/adc.png',
      },
];

const allOffices = [];

const viewParties = () => {
    return allParties;
}

const editParty = (partyId, partyName) => {
    for(let i = 0; i < allParties.length; i++) {       
        if (partyId === allParties[i].id) {
          allParties[i].name = partyName;
          
          return true;
        }
    }
    return false;
}

const addParty = (party) => {
    allParties.push(party);
}

const addOffice = (office) => {
    allOffices.push(office);
}

const removeParty = (partyId) => {
    for (let i = 0; i < allParties.length; i++) {
        if (partyId === allParties[i].id) {
          allParties.splice(i, 1);
          return true;
        }
      }
    return false;
}

const viewParty = (partyId) => {
    for(let i = 0; i < allParties.length; i++) {       
        if (partyId === allParties[i].id) {
          const party = [allParties[i]];
          return party;
        }
    }

    return [];
}

const Db = {
    viewParties,
    addParty,
    addOffice,
    removeParty,
    editParty,
    viewParty
};

export default Db;