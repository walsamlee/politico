'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var user = {
  email: 'user1@politico.com',
  password: 'admin1234'
};

var user2 = {
  email: 'user2@politico.com',
  password: 'admin1234'
};

var user3 = {
  email: 'user3@politico.com',
  password: 'admin1234'
};

var user4 = {
  email: 'user4@politico.com',
  password: 'admin1234'
};

var userSignup = {
  passportUrl: '../uploads/picture.jpg',
  firstname: 'Yusuf',
  lastname: 'Adekoya',
  othername: 'Joseph',
  phoneNumber: '1234567890',
  email: 'user2@politico.com',
  password: 'admin1234'
};

var userSignup2 = {
  passportUrl: '../uploads/picture.jpg',
  firstname: 'Lateef',
  lastname: 'Alani',
  othername: 'Adio',
  phoneNumber: '1234567890',
  email: 'user3@politico.com',
  password: 'admin1234'
};

var userSignup3 = {
  passportUrl: '../uploads/picture.jpg',
  firstname: 'Lucky',
  lastname: 'Ogodo',
  othername: 'Evans',
  phoneNumber: '1234567890',
  email: 'user4@politico.com',
  password: 'admin1234'
};

var userLogin = {
  firstName: 'Adekunle',
  lastName: 'Oyinda',
  email: 'user1@politico.com',
  password: '6644a19ac656c27203d081e52b281853'
};

var users = [{
  firstName: 'Adekunle',
  lastName: 'Oyinda',
  email: 'user1@politico.com',
  password: '6644a19ac656c27203d081e52b281853'
}, {
  firstName: 'Oluchi',
  lastName: 'Evans',
  email: 'user2@politico.com',
  password: '6644a19ac656c27203d081e52b281853'
}, {
  firstName: 'Sani',
  lastName: 'Hassan',
  email: 'user3@politico.com',
  password: '6644a19ac656c27203d081e52b281853'
}, {
  firstName: 'Albert',
  lastName: 'George',
  email: 'user4@politico.com',
  password: '6644a19ac656c27203d081e52b281853'
}, {
  firstName: 'Ebele',
  lastName: 'Joe',
  email: 'user5@politico.com',
  password: '6644a19ac656c27203d081e52b281853'
}];

var candidates = [{
  officeId: 1,
  candidateId: 4
}, {
  officeId: 1,
  candidateId: 5
}];

var votes = [{
  office: 1,
  candidate: 4
}, {
  office: 1,
  candidate: 4
}, {
  office: 1,
  candidate: 5
}, {
  office: 1,
  candidate: 4
}];

var result = [{
  office: 1,
  candidate: 1,
  result: 3
}, {
  office: 1,
  candidate: 2,
  result: 1
}];

var party = [{
  name: 'Action Peoples Congress',
  hqAddress: 'Wuse Zone II, Abuja, Nigeria',
  logoUrl: '../assets/images/apc.png'
}, {
  name: 'All Democratic Congress',
  hqAddress: 'Wuse Zone I, Abuja, Nigeria',
  logoUrl: '../assets/images/adc.png'
}, {
  name: 'Alliance for Democracy Party',
  hqAddress: 'Gwarinpa, Abuja, Nigeria',
  logoUrl: '../assets/images/adp.jpg'
}, {
  name: 'All Peoples Grand Alliance',
  hqAddress: 'Garki, Abuja, Nigeria',
  logoUrl: '../assets/images/apga.png'
}];

var afterPostParty = [{
  id: 1,
  name: 'Action Peoples Congress',
  hqAddress: 'Wuse Zone II, Abuja, Nigeria',
  logoUrl: '../assets/images/apc.png'
}, {
  id: 2,
  name: 'All Democratic Congress',
  hqAddress: 'Wuse Zone I, Abuja, Nigeria',
  logoUrl: '../assets/images/adc.png'
}, {
  id: 3,
  name: 'Alliance for Democracy Party',
  hqAddress: 'Gwarinpa, Abuja, Nigeria',
  logoUrl: '../assets/images/adp.jpg'
}, {
  id: 4,
  name: 'All Peoples Grand Alliance',
  hqAddress: 'Garki, Abuja, Nigeria',
  logoUrl: '../assets/images/apga.png'
}, {
  id: 5,
  name: 'Labour Party',
  hqAddress: 'Wuse Zone III, Abuja, Nigeria',
  logoUrl: '../assets/images/labour.png'
}];

var partyPost = {
  id: 5,
  name: 'Labour Party',
  hqAddress: 'Wuse Zone III, Abuja, Nigeria',
  logoUrl: '../assets/images/labour.png'
};

var partyPost2 = {
  id: 4,
  name: 'All Peoples Grand Alliance',
  hqAddress: 'Garki, Abuja, Nigeria',
  logoUrl: '../assets/images/apga.png'
};

var partyPut = {
  name: 'National Conscience Party',
  hqAddress: 'Katampe District, Abuja, Nigeria',
  logoUrl: '../assets/images/ncp.jpg'
};

var office = [{
  id: '1',
  type: 'Federal',
  name: 'President'
}, {
  id: '2',
  type: 'Legislative',
  name: 'Senate'
}, {
  id: '3',
  type: 'Legislative',
  name: 'Member, Federal House of Rep'
}, {
  id: '4',
  type: 'State',
  name: 'Governor'
}, {
  id: '5',
  type: 'Local Government',
  name: 'Chairman'
}];

var afterPostOffice = [{
  id: 1,
  type: 'Federal',
  name: 'President'
}, {
  id: 2,
  type: 'Legislative',
  name: 'Senate'
}, {
  id: 3,
  type: 'Legislative',
  name: 'Member, Federal House of Rep'
}, {
  id: 4,
  type: 'State',
  name: 'Governor'
}, {
  id: 5,
  type: 'Local Government',
  name: 'Chairman'
}, {
  id: 6,
  type: 'Local Government',
  name: 'Councillor'
}];

var officePost = {
  id: 6,
  type: 'Local Government',
  name: 'Councillor'
};

var officePut = {
  name: 'Member, Federal House of Rep'
};

exports.default = {
  party: party,
  partyPost: partyPost,
  partyPost2: partyPost2,
  partyPut: partyPut,
  afterPostParty: afterPostParty,
  office: office,
  afterPostOffice: afterPostOffice,
  officePost: officePost,
  officePut: officePut,
  user: user,
  user2: user2,
  user3: user3,
  user4: user4,
  users: users,
  votes: votes,
  result: result,
  userLogin: userLogin,
  candidates: candidates,
  userSignup: userSignup,
  userSignup2: userSignup2,
  userSignup3: userSignup3
};