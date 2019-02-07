import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const loggedIn = (req, res, next) => {
  const token = req.headers.token;

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        status: 401,
        message: err.message,
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
      return res.status(401).json({
        status: 401,
        message: err.message,
      });
    }

    if(decoded.isAdmin !== 'true') {
      return res.status(403).json({
        status: 403,
        message: "Access forbidden"
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
