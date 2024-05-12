

const jwt = require('jsonwebtoken');
const JWT_SECRET = "goodEnoughString";

const fetchuser = (req,res, next) =>{
   const token = req.header('auth-token');
   if(!token) {
    return  res.status(401).send({error : " Access denied"});
   }

   try {
      const data = jwt.verify(token , JWT_SECRET);
      return req.user = data.user;
      next();
   } catch (error) {
    return  res.status(401).send({error : "Accesss denied : Invalid token"})
   }
}


module.exports = fetchuser;