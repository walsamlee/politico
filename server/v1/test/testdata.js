const party = [
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

const afterPostParty = [
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
      {
        id: 5,
        name: 'Labour Party',
        hqAddress: 'Wuse Zone III, Abuja, Nigeria',
        logoUrl: '../assets/images/labour.png'
      },
];

const partyPost = {
    id: 5,
    name: 'Labour Party',
    hqAddress: 'Wuse Zone III, Abuja, Nigeria',
    logoUrl: '../assets/images/labour.png'
}

const partyPut = {
    name: 'National Conscience Party',
    hqAddress: 'Katampe District, Abuja, Nigeria',
    logoUrl: '../assets/images/ncp.jpg'
}

const office = [
    {
        id: 1,
        type: "Federal",
        name: "President"
    },
    {
        id: 2,
        type: "Legislative",
        name: "Senate"
    },
    {
        id: 3,
        type: "Legislative",
        name: "Member, Federal House of Rep"
    },
    {
        id: 4,
        type: "State",
        name: "Governor"
    },
    {
        id: 5,
        type: "Local Government",
        name: "Chairman"
    },
];

const afterPostOffice = [
    {
        id: 1,
        type: "Federal",
        name: "President"
    },
    {
        id: 2,
        type: "Legislative",
        name: "Senate"
    },
    {
        id: 3,
        type: "Legislative",
        name: "Member, Federal House of Rep"
    },
    {
        id: 4,
        type: "State",
        name: "Governor"
    },
    {
        id: 5,
        type: "Local Government",
        name: "Chairman"
    },
    {
        id: 6,
        type: 'Local Government',
        name: 'Councillor'
    }
]

const officePost = {
    id: 6,
    type: 'Local Government',
    name: 'Councillor'
};

const officePut = {
    name: 'Member, Federal House of Rep'
}

export default {
    party,
    partyPost,
    partyPut,
    afterPostParty,
    office,
    afterPostOffice,
    officePost,
    officePut
}