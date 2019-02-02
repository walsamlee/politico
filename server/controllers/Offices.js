import db from '../models/db';
import Validations from './Validations';

const Offices = {
  createOffice(req, res) {
    if(req.userData.privilege !== 1) {
      return res.json({
        status: 401,
        message: 'Unauthorized access'
      });
    }
    const result = Validations.validateOffice(req.body);

    if (result.error) {
      return res.json({
        status: 400,
        error: `${result.error.details[0].context.value} is an invalid value`,
      });
    }

    const officeId = parseInt(req.body.id, 10);
    const officeType = req.body.type;
    const officeName = req.body.name;

    const query = {
      text: 'INSERT INTO offices(officeid, type, name) VALUES($1, $2, $3)',
      values: [officeId, officeName, officeType],
    };

    db.client.query(query, (err, result) => {
      if (err) {
        return res.json({
          status: 400,
          message: 'Data cannot be added to database',
        });
      }
      return res.json({
        status: 201,
        data: [
          {
            id: officeId,
            type: officeType,
            name: officeName,
          },
        ],
      });
    });
  },

  viewOffices(req, res) {
    db.client.query('SELECT * FROM offices', (err, result) => {
      if (err) {
        return res.json({
          status: 400,
          message: 'Data could not be retrieved',
        });
      }

      const offices = [];
      for (let i = 0; i < result.rowCount; i++) {
        const office = {
          id: result.rows[i].officeid,
          type: result.rows[i].type,
          name: result.rows[i].name,
        };

        offices.push(office);
      }
      return res.json({
        status: 200,
        data: offices,
      });
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

    const officeId = parseInt(req.params.officeId, 10);

    db.client.query('SELECT * FROM offices WHERE officeid=$1', [officeId], (err, result) => {
      if (err) {
        return res.json({
          status: 400,
          message: 'Data cannot be retrieved',
        });
      }
      if (result.rowCount === 0) {
        return res.json({
          status: 404,
          message: `Office with ID ${officeId} not found`,
        });
      }

      return res.json({
        status: 200,
        data: {
          id: result.rows[0].officeid,
          type: result.rows[0].type,
          name: result.rows[0].name,
        },
      });
    });
  },
};

export default Offices;
