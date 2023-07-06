

const express = require('express');
const User = require("../models/User");
const router = express.Router();



//  create a user using Post; endPoint - /api/auth/ , doesn't require auth 


 router.post('/' , (req, res) =>{
    console.log(req.body);
    res.json(req.body);
    const user = User(req.body);
    user.save();
 })

module.exports = router;