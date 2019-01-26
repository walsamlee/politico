import Db from '../models/db';

const Parties = {
    viewPartyById(req, res, next) {
        const partyId = parseInt(req.params.partyId);
        
        const party = Db.viewParty(partyId);

        if(party.length === 1) {
          return res.json({
            status: 200,
            data: {
              id: partyId,
              name: party[0].name,
              logoUrl: party[0].logoUrl
            }
          })
        } else {
            return res.json({
              status: 404,
              error: `Party with ID ${partyId} not found`
          });
        }        
      }
};

export default Parties;