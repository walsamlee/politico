import Db from '../models/db';
import Validations from './Validations';

const Parties = {
  viewParties(req, res) {
    Db.client.query('SELECT * FROM parties', (err, result) => {
      if (err) {
        return res.status(404).json({
          error: 404,
          message: err.detail,
        });
      }
      const allParties = [];

      for (let i = 0; i < result.rows.length; i++) {
        const row = {
          id: result.rows[i].partyid,
          name: result.rows[i].name,
          logoUrl: result.rows[i].logourl,
        };

        allParties.push(row);
      }
      return res.status(200).json({
        status: 200,
        data: allParties,
      });
    });
  },

  editPartyById(req, res) { 
    const result = Validations.validateEdit(req.params.partyId, req.body.name);

    if (result.error) {
      const errMessage = result.error.details[0].message;

      return res.status(400).json({
        status: 400,
        error: errMessage.replace(/[^a-zA-Z ]/g, ""),
      });
    }

    const partyId = parseInt(req.params.partyId, 10);
    const partyName = req.body.name;

    const query = {
      text: 'SELECT * FROM parties WHERE partyid=$1',
      values: [partyId],
    };

    Db.client.query(query, (err, result) => {
      if (err) {
        return res.status(400).json({
          status: 400,
          error: err.detail,
        });
      }
      if (result.rowCount === 0) {
        return res.status(404).json({
          status: 404,
          error: `Party with ID ${partyId} not found`,
        });
      }

      Db.client.query('UPDATE parties SET name=$1 WHERE partyid=$2', [partyName, partyId], (err, result) => {
        if (err) {
          return res.status(400).json({
            status: 400,
            error: err.detail,
          });
        }
        return res.status(200).json({
          status: 200,
          data: [
            {
              id: partyId,
              name: partyName,
            },
          ],
        });
      });
    });
  },

  deletePartyById(req, res) {
    const result = Validations.validateId(req.params.partyId);

    if (result.error) {
      const errMessage = result.error.details[0].message;

      return res.status(400).json({
        status: 400,
        error: errMessage.replace(/[^a-zA-Z ]/g, ""),
      });
    }

    const partyId = parseInt(req.params.partyId, 10);

    Db.client.query('DELETE FROM parties WHERE partyid=$1', [partyId], (err, result) => {
      if (err) {
        return res.status(400).json({
          status: 400,
          message: err.detail,
        });
      }
      if (result.rowCount === 0) {
        return res.status(404).json({
          status: 404,
          data: {
            message: `Party with ID ${partyId} not found`,
          },
        });
      }
      return res.status(200).json({
        status: 200,
        data: [
          {
            message: `Party with ID ${partyId} has been deleted`,
          },
        ],
      });
    });
  },

  createParty(req, res) {
    const result = Validations.validateParty(req.body);

    if (result.error) {
      const errMessage = result.error.details[0].message;

      return res.status(400).json({
        status: 400,
        error: errMessage.replace(/[^a-zA-Z ]/g, ""),
      });
    }

    const query = {
      text: 'INSERT INTO parties(name, hqaddress, logourl) VALUES($1, $2, $3) RETURNING *',
      values: [req.body.name, req.body.hqAddress, req.body.logoUrl],
    };

    Db.client.query(query, (err, result) => {
      if (err) {
        return res.status(400).json({
          status: 400,
          error: err.detail,
        });
      }
      return res.status(201).json({
        status: 201,
        data: [
          {
            id: result.rows[0].partyid,
            name: result.rows[0].name,
          },
        ],
      });
    });
  },

  viewPartyById(req, res) {
    const result = Validations.validateId(req.params.partyId);

    if (result.error) {
      const errMessage = result.error.details[0].message;

      return res.status(400).json({
        status: 400,
        error: errMessage.replace(/[^a-zA-Z ]/g, ""),
      });
    }
    const partyId = parseInt(req.params.partyId, 10);

    Db.client.query('SELECT * FROM parties WHERE partyid=$1', [partyId], (err, result) => {
      if (err) {
        return res.status(400).json({
          status: 400,
          message: err.detail,
        });
      }
      if (result.rowCount === 0) {
        return res.status(404).json({
          error: 404,
          message: `Party with ID ${partyId} could not be found`,
        });
      }
      return res.status(200).json({
        status: 200,
        data: [
          {
            id: result.rows[0].partyid,
            name: result.rows[0].name,
            logoUrl: result.rows[0].logourl,
          },
        ],
      });
    });
  },
};

export default Parties;
