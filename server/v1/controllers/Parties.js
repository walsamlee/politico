import Db from '../models/db';

const Parties = {
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
