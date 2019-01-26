import Db from '../models/db';

const Parties = {
  deletePartyById(req, res) {
    const partyId = parseInt(req.params.partyId, 10);
    
    if (Db.removeParty(partyId)) {     
      return res.json({
        status: 204,
        data: {
          message: `Party with ID ${partyId} has been deleted`,
        },
      });
    } else {
      return res.json({
        status: 404,
        error: `Party with ID ${partyId} not found`,
      });
    }
  },
};

export default Parties;
