const user = {
  email: 'user1@politico.com',
  password: 'admin1234',
};

const user2 = {
  email: 'user2@politico.com',
  password: 'admin1234',
};

const user3 = {
  email: 'user3@politico.com',
  password: 'admin1234',
};

const user4 = {
  email: 'user4@politico.com',
  password: 'admin1234',
};

const userSignup = {
  passportUrl: '../uploads/picture.jpg',
  firstname: 'Yusuf',
  lastname: 'Adekoya',
  othername: 'Joseph',
  phoneNumber: '1234567890',
  email: 'user2@politico.com',
  password: 'admin1234',
};

const userSignup2 = {
  passportUrl: '../uploads/picture.jpg',
  firstname: 'Lateef',
  lastname: 'Alani',
  othername: 'Adio',
  phoneNumber: '1234567890',
  email: 'user3@politico.com',
  password: 'admin1234',
};

const userSignup3 = {
  passportUrl: '../uploads/picture.jpg',
  firstname: 'Lucky',
  lastname: 'Ogodo',
  othername: 'Evans',
  phoneNumber: '1234567890',
  email: 'user4@politico.com',
  password: 'admin1234',
};

const userLogin = {
  firstName: 'Adekunle',
  lastName: 'Oyinda',
  email: 'user1@politico.com',
  password: '6644a19ac656c27203d081e52b281853',
};

const users = [
  {
    firstName: 'Adekunle',
    lastName: 'Oyinda',
    email: 'user1@politico.com',
    password: '6644a19ac656c27203d081e52b281853',
  },
  {
    firstName: 'Oluchi',
    lastName: 'Evans',
    email: 'user2@politico.com',
    password: '6644a19ac656c27203d081e52b281853',
  },
  {
    firstName: 'Sani',
    lastName: 'Hassan',
    email: 'user3@politico.com',
    password: '6644a19ac656c27203d081e52b281853',
  },
  {
    firstName: 'Albert',
    lastName: 'George',
    email: 'user4@politico.com',
    password: '6644a19ac656c27203d081e52b281853',
  },
  {
    firstName: 'Ebele',
    lastName: 'Joe',
    email: 'user5@politico.com',
    password: '6644a19ac656c27203d081e52b281853',
  },
];

const candidates = [
  {
    officeId: 1,
    candidateId: 4,
  },
  {
    officeId: 1,
    candidateId: 5,
  },
];

const votes = [
  {
    office: 1,
    candidate: 4,
  },
  {
    office: 1,
    candidate: 4,
  },
  {
    office: 1,
    candidate: 5,
  },
  {
    office: 1,
    candidate: 4,
  },
];

const result = [
  {
    office: 1,
    candidate: 1,
    result: 3,
  },
  {
    office: 1,
    candidate: 2,
    result: 1,
  },
];

const party = [
  {
    name: 'Action Peoples Congress',
    hqAddress: 'Wuse Zone II, Abuja, Nigeria',
    logoUrl: '../assets/images/apc.png',
  },
  {
    name: 'All Democratic Congress',
    hqAddress: 'Wuse Zone I, Abuja, Nigeria',
    logoUrl: '../assets/images/adc.png',
  },
  {
    name: 'Alliance for Democracy Party',
    hqAddress: 'Gwarinpa, Abuja, Nigeria',
    logoUrl: '../assets/images/adp.jpg',
  },
  {
    name: 'All Peoples Grand Alliance',
    hqAddress: 'Garki, Abuja, Nigeria',
    logoUrl: '../assets/images/apga.png',
  },
];

const afterPostParty = [
  {
    id: 1,
    name: 'Action Peoples Congress',
    hqAddress: 'Wuse Zone II, Abuja, Nigeria',
    logoUrl: '../assets/images/apc.png',
  },
  {
    id: 2,
    name: 'All Democratic Congress',
    hqAddress: 'Wuse Zone I, Abuja, Nigeria',
    logoUrl: '../assets/images/adc.png',
  },
  {
    id: 3,
    name: 'Alliance for Democracy Party',
    hqAddress: 'Gwarinpa, Abuja, Nigeria',
    logoUrl: '../assets/images/adp.jpg',
  },
  {
    id: 4,
    name: 'All Peoples Grand Alliance',
    hqAddress: 'Garki, Abuja, Nigeria',
    logoUrl: '../assets/images/apga.png',
  },
  {
    id: 5,
    name: 'Labour Party',
    hqAddress: 'Wuse Zone III, Abuja, Nigeria',
    logoUrl: '../assets/images/labour.png',
  },
];

const partyPost = {
  id: 5,
  name: 'Labour Party',
  hqAddress: 'Wuse Zone III, Abuja, Nigeria',
  logoUrl: '../assets/images/labour.png',
};

const partyPost2 = {
  id: 4,
  name: 'All Peoples Grand Alliance',
  hqAddress: 'Garki, Abuja, Nigeria',
  logoUrl: '../assets/images/apga.png',
};

const partyPut = {
  name: 'National Conscience Party',
  hqAddress: 'Katampe District, Abuja, Nigeria',
  logoUrl: '../assets/images/ncp.jpg',
};

const office = [
  {
    id: '1',
    type: 'Federal',
    name: 'President',
  },
  {
    id: '2',
    type: 'Legislative',
    name: 'Senate',
  },
  {
    id: '3',
    type: 'Legislative',
    name: 'Member, Federal House of Rep',
  },
  {
    id: '4',
    type: 'State',
    name: 'Governor',
  },
  {
    id: '5',
    type: 'Local Government',
    name: 'Chairman',
  },
];

const afterPostOffice = [
  {
    id: 1,
    type: 'Federal',
    name: 'President',
  },
  {
    id: 2,
    type: 'Legislative',
    name: 'Senate',
  },
  {
    id: 3,
    type: 'Legislative',
    name: 'Member, Federal House of Rep',
  },
  {
    id: 4,
    type: 'State',
    name: 'Governor',
  },
  {
    id: 5,
    type: 'Local Government',
    name: 'Chairman',
  },
  {
    id: 6,
    type: 'Local Government',
    name: 'Councillor',
  },
];

const officePost = {
  id: 6,
  type: 'Local Government',
  name: 'Councillor',
};

const officePut = {
  name: 'Member, Federal House of Rep',
};

export default {
  party,
  partyPost,
  partyPost2,
  partyPut,
  afterPostParty,
  office,
  afterPostOffice,
  officePost,
  officePut,
  user,
  user2,
  user3,
  user4,
  users,
  votes,
  result,
  userLogin,
  candidates,
  userSignup,
  userSignup2,
  userSignup3,
};
