import Db from '../models/db';
import Validations from './Validations';

const Parties = {
  viewParties(req, res) {
    const allParties = Db.viewParties();

    const data = [];

    for(let i = 0; i < allParties.length; i++) {
      data.push({
        id: allParties[i].id,
        name: allParties[i].name,
        logoUrl: allParties[i].logoUrl
      });
    }

    return res.json({
      status: 200,
      data: data,
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
          },
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
    } else {
      return res.json({
        status: 404,
        error: `Party with ID ${partyId} not found`,
      });
    }
  },

  createParty(req, res) {
    const result = Validations.validateParty(req.body);

    if (result.error) {
      return res.json({
        status: 400,
        error: `${result.error.details[0].context.value} is an invalid value`,
      });
    }
    let newPartyId = req.body.id;
    if(typeof newPartyId === 'string') newPartyId = parseInt(newPartyId, 10);

    const newPartyName = req.body.name;
    const newPartyHq = req.body.hqAddress;
    const newPartyLogo = req.body.logoUrl;

    const newParty = {
      id: newPartyId,
      name: newPartyName,
      hqAddress: newPartyHq,
      logoUrl: newPartyLogo
    };

    Db.addParty(newParty);

    return res.json({
      status: 200,
      data: [
        {
          id: newParty.id,
          name: newParty.name
        }
      ],
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
        data: [
          {
            id: party[0].id,
            name: party[0].name,
            logoUrl: party[0].logoUrl
          }
        ]
      });
    }
    return res.json({
      status: 404,
      error: `Party with ID ${partyId} not found`,
    });
  },
};

export default Parties;
