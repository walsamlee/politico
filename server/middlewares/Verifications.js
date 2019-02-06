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

    next();
  });
};

const isAdmin = (req, res, next) => {
  const token = req.headers.token;

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.json({
        status: 401,
        message: 'Unauthorized access',
      });
    }

    if(decoded.privilege !== 1) {
      return res.json({
        status: 401,
        message: 'Unauthorized access'
      })
    }

    req.userData = decoded;

    next();
  });

}

const Verifications = {
  loggedIn,
  isAdmin,
};

export default Verifications;
