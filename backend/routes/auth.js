

const express = require('express');
const User = require("../models/User");
const router = express.Router();
const {body, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken');
const fetchuser = require('../middleware/fetchUser')

const JWT_SECRET = "goodEnoughString";


// Route 1 - creating a user using Post; endPoint - /api/auth/ , doesn't require auth 


 router.post('/createuser',[
   body('name', 'Enter a valid name').isLength({min : 3}),
   body('email', 'Enter a valid email').isEmail(),
   body('password', 'Enter a valid Password').isLength({min : 8})
 ], async (req, res) =>{

   const errors = validationResult(req);
   if(!errors.isEmpty()){
      return res.status(400).json({errors : errors.array()});
   }
    try{
      let user = await User.findOne({email : req.body.email});
      if(user){
         return res.status(400).json({error : "user with this email already exits"});
      }
      
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);


      user = await User.create({
         name : req.body.name,
         email : req.body.email,
         password : secPass
      })
  
      const data = {
         user:{
            id : user.id
         }
      }
      const authToken =  jwt.sign(data, JWT_SECRET);
      console.log(authToken);
      
      res.json({authToken});

    }
    catch(error){

      console.log(error.massage);
      res.status(500).send("Internal server error");

    }

 })



// Route  2 - Authenticating a user using post ; api/auth/login - login endpoint // doesn't require login


router.post('/login',[
   body('email', 'Enter a valid email').isEmail(),
   body('password', 'Password can not be blank').exists(),
], async(req, res) =>{
   
   const errors = validationResult(req);
   if(!errors.isEmpty()){
      return res.status(400).json({error: errors.array})
   }

  const {email, password} = req.body;

  try {
    
     let user = await User.findOne({email});
     if(!user){
        return res.status(400).json({error : "Please try to login with correct credential"})
     }

     const passwordCompare = await bcrypt.compare(password, user.password);
     if(!passwordCompare){
        return res.status(400).json({error : "Please try to login with correct credential"})
     }

       const data = {
         user:{
            id : user.id
         }
      }
      const authToken =  jwt.sign(data, JWT_SECRET);
      console.log(authToken);
      
      res.json({authToken});

  }  catch(error){

      console.log(error.massage);
      res.status(500).send(" Internal server Error ");

    }
})



// Route - 3 - Get loggedInUser Details using  get - api/auth/getuser  " Login Required" 

router.post('/getuser', fetchuser, async(req, res) =>{

try {
   userId = req.user.id;
   const user = await User.findById(userId).select("-password");
   res.send(user);
} catch (error) {
   console.log(error.massage);
   res.status(500).send(" Internal server Error ");
}

})
// *******************************************************************************************

module.exports = router;