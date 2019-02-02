import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const loggedIn = (req, res, next) => {
  const token = req.headers.token;

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.json({
        status: 401,
        message: 'Unauthorized access',
      });
    }

    req.userData = decoded;

    res.status(200);

    next();
  });
};

const Verifications = {
  loggedIn,
};

export default Verifications;
