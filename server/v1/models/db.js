let allOffices = [
    {
        id: 1,
        type: "Federal",
        name: "President"
    },
    {
        id: 2,
        type: "Legislative",
        name: "Senate"
    },
    {
        id: 3,
        type: "Legislative",
        name: "Member, Federal House of Rep"
    },
    {
        id: 4,
        type: "State",
        name: "Governor"
    },
    {
        id: 5,
        type: "Local Government",
        name: "Chairman"
    },
];

const viewOffices = () => {
    return allOffices;
}

const Db = {
    viewOffices
}

export default Db;