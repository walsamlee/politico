import Db from '../models/db';

const Offices = {
    viewOfficeById(req, res) {
        const officeId = parseInt(req.params.officeId, 10);

        const allOffices = Db.viewAnOffice(officeId);

        if(allOffices.length === 1) {
            return res.json({
                status: 200,
                data: allOffices
            });
        } else {
            return res.json({
                status: 404,
                error: `Office with ID ${officeId} not found`
            });
        }
    }
}

export default Offices;