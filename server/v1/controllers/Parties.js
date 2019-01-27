import Db from '../models/db';
import Validations from './Validations';

const Parties = {
  viewParties(req, res) {
    const allParties = Db.viewParties();

    return res.json({
      status: 200,
      data: allParties,
    });
  },

  editPartyById(req, res) {
    const result = Validations.validateEdit(req.params.partyId, req.params.name);

    if (result.error) {
      return res.json({
        status: 400,
        error: `${result.error.details[0].context.value} is an invalid value`,
      });
    }

    const partyId = parseInt(req.params.partyId, 10);
    const partyName = req.params.name;

    if (Db.editParty(partyId, partyName)) {
      return res.json({
        status: 204,
        data: [
          {
            id: partyId,
            name: partyName,
          }
        ],
      });
    }
    return res.json({
      status: 404,
      error: `Party with ID ${partyId} not found`,
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

    if (Db.removeParty(partyId)) {
      return res.json({
        status: 204,
        data: [
          {
            message: `Party with ID ${partyId} has been deleted`,
          }
        ],
      });
    }

    return null;
  },

  createParty(req, res) {
    const result = Validations.validateParty(req.body);

    if (result.error) {
      return res.json({
        status: 400,
        error: `${result.error.details[0].context.value} is an invalid value`,
      });
    }
    const newParty = req.body;

    Db.addParty(newParty);

    return res.json({
      status: 200,
      data: [newParty],
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

    const party = Db.viewParty(partyId);

    if (party.length === 1) {
      return res.json({
        status: 200,
        data: party,
      });
    }
    return res.json({
      status: 404,
      error: `Party with ID ${partyId} not found`,
    });
  },
};

export default Parties;
