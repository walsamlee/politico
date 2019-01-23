const allParties = [];

const Parties = {
    createParty(req, res) {
        if (req.userData === 1) {
          const newParty = req.body;
      
          allParties.push(newParty);
      
          return res.json({
            status: 200,
            data: newParty,
          });
        } else {
          return res.json({
            status: 401,
            error: 'Access denied',
          });
        }
      }
};

export default Parties;
