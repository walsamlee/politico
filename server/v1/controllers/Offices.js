import Db from '../models/db';

const Offices = {
    viewOffices(req, res) {
        const allOffices = Db.viewOffices();

        return res.json({
            status: 200,
            data: allOffices
        });
    }
}

export default Offices;