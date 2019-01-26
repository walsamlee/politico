import db from '../models/db';
import Validations from './Validations';

const Offices = {
  createOffice(req, res) {
    const result = Validations.validateOffice(req.body);

    if (result.error) {
      return res.json({
        status: 400,
        error: `${result.error.details[0].context.value} is an invalid value`,
      });
    }

    db.addOffice(req.body);

    return res.json({
      status: 201,
      data: {
        id: req.body.id,
        type: req.body.type,
        name: req.body.name,
      },
    });
  },

  viewOffices(req, res) {
    const allOffices = db.viewOffices();

    return res.json({
      status: 200,
      data: allOffices,
    });
  },

  viewOfficeById(req, res) {
    const result = Validations.validateId(req.params.officeId);

    if (result.error) {
      return res.json({
        status: 400,
        error: `${result.error.details[0].context.value} is an invalid value`,
      });
    }

    return res.json({
      status: 200,
      data: db.viewAnOffice(parseInt(req.params.officeId, 10)),
    });
  },
};

export default Offices;
