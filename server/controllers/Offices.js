import db from '../models/db';
import Validations from './Validations';

const Offices = {
  createOffice(req, res) {
    const result = Validations.validateOffice(req.body);

    if (result.error) {
      const errMessage = result.error.details[0].message;

      return res.status(400).json({
        status: 400,
        error: errMessage.replace(/[^a-zA-Z ]/g, ""),
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
        return res.status(400).json({
          status: 400,
          message: err.detail,
        });
      }
      return res.status(201).json({
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
        return res.status(400).json({
          status: 400,
          message: err.detail,
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
      return res.status(200).json({
        status: 200,
        data: offices,
      });
    });
  },

  viewOfficeById(req, res) {
    const result = Validations.validateId(req.params.officeId);

    if (result.error) {
      const errMessage = result.error.details[0].message;

      return res.status(400).json({
        status: 400,
        error: errMessage.replace(/[^a-zA-Z ]/g, ""),
      });
    }

    const officeId = parseInt(req.params.officeId, 10);

    db.client.query('SELECT * FROM offices WHERE officeid=$1', [officeId], (err, result) => {
      if (err) {
        return res.status(400).json({
          status: 400,
          message: err.detail,
        });
      }
      if (result.rowCount === 0) {
        return res.status(404).json({
          status: 404,
          error: `Office with ID ${officeId} not found`,
        });
      }

      return res.status(200).json({
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
