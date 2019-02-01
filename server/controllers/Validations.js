import Joi from 'joi';

const validateParty = (party) => {
  const schema = {
    id: Joi.number().integer().required(),
    name: Joi.string().required(),
    hqAddress: Joi.string().required(),
    logoUrl: Joi.string().required(),
  };

  return Joi.validate(party, schema);
};

const validateOffice = (office) => {
  const schema = {
    id: Joi.number().integer().positive().required(),
    type: Joi.string().required(),
    name: Joi.string().required(),
  };

  return Joi.validate(office, schema);
};

const validateId = (id) => {
  const officeId = {
    id,
  };

  const schema = {
    id: Joi.number().integer().required(),
  };

  return Joi.validate(officeId, schema);
};

const validateEdit = (id, name) => {
  const partyDetails = {
    id,
    name,
  };
  const schema = {
    id: Joi.number().integer().required(),
    name: Joi.string().required(),
  };

  return Joi.validate(partyDetails, schema);
};

const validateUser = (user) => {
  const schema = {
    email: Joi.string().email({ minDomainAtoms: 2 }).required(),
    password: Joi.required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
  };

  return Joi.validate(user, schema);
};

const validateCandidate = (candidate) => {
  const schema = {
    office: Joi.number().integer().required(),
    user: Joi.number().integer().required(),
  };

  return Joi.validate(candidate, schema);
};

const validateVote = (vote) => {
  const schema = {
    office: Joi.number().integer().required(),
    candidate: Joi.number().integer().required(),
    voter: Joi.number().integer().required(),
  }

  return Joi.validate(vote, schema);
}

const Validatitions = {
  validateParty,
  validateOffice,
  validateId,
  validateEdit,
  validateUserLogin,
  validateUser,
  validateCandidate,
  validateVote
};

export default Validatitions;
