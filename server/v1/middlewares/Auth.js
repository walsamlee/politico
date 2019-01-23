const Auth = {
    right(req, res, next) {
        req.userData = 1;
      
        res.status(200);
      
        next();
      }
}

export default Auth
