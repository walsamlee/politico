import Db from '../models/db';
import Validations from './Validations';

const Parties = {
  viewParties(req, res) {
    Db.client.query('SELECT * FROM parties', (err, result) => {
      if (err) {
        return res.json({
          error: 404,
          message: 'Data not retrieived',
        });
      }
      const allParties = [];

      for (let i = 0; i < result.rows.length; i++) {
        const row = {
          id: result.rows[i].partyid,
          name: result.rows[i].name,
        };

        allParties.push(row);
      }
      return res.json({
        status: 200,
        data: allParties,
      });
    });
  },

  editPartyById(req, res) {
    const result = Validations.validateEdit(req.params.partyId, req.body.name);

    if (result.error) {
      return res.json({
        status: 400,
        error: `${result.error.details[0].context.value} is an invalid value`,
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
        return res.json({
          status: 400,
          error: 'Data could not be retireved',
        });
      }
      if (result.rowCount === 0) {
        return res.json({
          status: 404,
          error: `Party with ID ${partyId} not found`,
        });
      }

      Db.client.query('UPDATE parties SET name=$1 WHERE partyid=$2', [partyName, partyId], (err, result) => {
        if (err) {
          return res.json({
            status: 400,
            error: 'Unable to Update row',
          });
        }
        return res.json({
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
      return res.json({
        status: 400,
        error: `${result.error.details[0].context.value} is an invalid value`,
      });
    }

    const partyId = parseInt(req.params.partyId, 10);

    Db.client.query('DELETE FROM parties WHERE partyid=$1', [partyId], (err, result) => {
      if (err) {
        return res.json({
          status: 400,
          message: 'Row cannot be deleted',
        });
      }
      if (result.rowCount === 0) {
        return res.json({
          status: 404,
          data: {
            message: `Party with ID ${partyId} not found`,
          },
        });
      }
      return res.json({
        status: 202,
        data: [
          {
            message: `Party with ID ${partyId} has been deleted`,
          },
        ],
      });
    });
  },

  createParty(req, res) {
    if(!req.file) {
      return res.json({
        status: 400,
        message: 'Please upload a party logo'
      });
    }
    
    const partyData = {
      name: req.body.name,
      hqAddress: req.body.hqAddress,
      logoUrl: req.file.path
    }
    const result = Validations.validateParty(partyData);

    if (result.error) {
      return res.json({
        status: 400,
        error: `${result.error.details[0].context.value} is an invalid value`,
      });
    }
    const party = req.body;

    const partyId = req.body.id;
    const partyName = party.name;
    const partyHqAddress = party.hqAddress;

    const query = {
      text: 'INSERT INTO parties(name, hqaddress, logourl) VALUES($1, $2, $3) RETURNING *',
      values: [partyName, partyHqAddress, req.file.path],
    };

    Db.client.query(query, (err, result) => {
      if (err) {
        return res.json({
          status: 400,
          error: err,
        });
      }
      return res.json({
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
      return res.json({
        status: 400,
        error: `${result.error.details[0].context.value} is an invalid value`,
      });
    }
    const partyId = parseInt(req.params.partyId, 10);

    Db.client.query('SELECT * FROM parties WHERE partyid=$1', [partyId], (err, result) => {
      if (err) {
        return res.json({
          status: 400,
          message: 'Data could not be retrieved',
        });
      }
      if (result.rowCount === 0) {
        return res.json({
          error: 404,
          message: `Party with ID ${partyId} could not be found`,
        });
      }
      return res.json({
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
