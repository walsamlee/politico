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
    logoUrl: '../assets/images/adc.png',
  },
];

const Parties = {
  deletePartyById(req, res) {
    const partyId = parseInt(req.params.partyId, 10);

    for (let i = 0; i < allParties.length; i++) {
      if (partyId === allParties[i].id) {
        allParties.splice(i, 1);
        return res.json({
          status: 204,
          data: {
            message: `Party with ID ${partyId} has been deleted`,
          },
        });
      }
    }

    return res.json({
      status: 404,
      error: `Party with ID ${partyId} not found`,
    });
  },
};

export default Parties;
