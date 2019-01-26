import db from '../models/db';

const Offices = {
  createOffice(req, res) {
    const newOfficeId = req.body.id;
    const newOfficeType = req.body.type;
    const newOfficeName = req.body.name;

    const newOffice = {
      id: newOfficeId,
      type: newOfficeType,
      name: newOfficeName,
    };
    
    db.addOffice(newOffice);

    return res.json({
      status: 201,
      data: {
        id: newOffice.id,
        type: newOffice.type,
        name: newOffice.name,
      },
    });
  },
  
  viewOffices(req, res) {
      const allOffices = Db.viewOffices();

      return res.json({
          status: 200,
          data: allOffices
      });
  },
  
  viewOfficeById(req, res) {
        const officeId = parseInt(req.params.officeId, 10);

        const allOffices = Db.viewAnOffice(officeId);

        if(allOffices.length === 1) {
            return res.json({
                status: 200,
                data: allOffices
            });
        } else {
            return res.json({
                status: 404,
                error: `Office with ID ${officeId} not found`
            });
        }
    },
};

export default Offices;
