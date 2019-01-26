import Db from '../models/db';

const Parties = {
  viewParties(req, res) {
    const allParties = Db.viewParties();
    
    return res.json({
      status: 200,
      data: allParties,
    });
  },
};

export default Parties;
