const allParties = [];
const allOffices = [];

const addParty = (party) => {
    allParties.push(party);
}

const addOffice = (office) => {
    allOffices.push(office);
}

const Db = {
    addParty,
    addOffice
};

export default Db;