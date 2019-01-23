const allParties = [
    {
        id: 1,
        name: 'Action Peoples Congress',
        hqAddress: 'Wuse Zone II, Abuja, Nigeria',
        logoUrl: '../assets/images/apc.png'
    },
    {
        id: 2,
        name: 'All Democratic Congress',
        hqAddress: 'Wuse Zone I, Abuja, Nigeria',
        logoUrl: '../assets/images/adc.png'
    },
    {
        id: 3,
        name: 'Alliance for Democracy Party',
        hqAddress: 'Gwarinpa, Abuja, Nigeria',
        logoUrl: '../assets/images/adp.jpg'
    },
    {
        id: 4,
        name: 'All Peoples Grand Alliance',
        hqAddress: 'Garki, Abuja, Nigeria',
        logoUrl: '../assets/images/adc.png'
    }
];

const Parties = {
    viewPartyById(req, res, next) {
        const partyId = parseInt(req.params.partyId);

        allParties.forEach(party => {
            if(party.id === partyId) {
                return res.json({
                    status: 200,
                    data: {
                        id: party.id,
                        name: party.name,
                        logoUrl: party.logoUrl
                    }
                });              
            }
        });

        res.json({
            status: 404,
            error: `Party with ID ${partyId} not found`
        });
      }
};

export default Parties;