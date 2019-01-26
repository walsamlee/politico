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
  createParty(req, res) {
        const newParty = req.body;
        
        Db.addParty(newParty);
    
        return res.json({
          status: 200,
          data: newParty,
        });
    }
};

export default Parties;
