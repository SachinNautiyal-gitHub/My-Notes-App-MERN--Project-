
const express = require('express');
const Note = require('../models/Note')
const router = express.Router();
const fetchuser = require('../middleware/fetchUser')
const {body , validationResult} = require('express-validator');

//  Fetch all Note of user , /api/Note/fetchNote - "Login required"


router.get('/fetchnote', fetchuser , async(req, res) =>{
      
   try {
      const notes = await Note.find({user : req.user.id});
      res.json(notes);
   } catch (error) {
      console.log(error.massage);
      res.status(500).send("Internal server error");
   }
 
})





// Add a new note using post - api/Note/addnote - " Login required"
router.post('/addnote', fetchuser ,[
  body("title", "Title can note be empty or less then 5 ").isLength({min : 5}),
  body("description", "description must be length of 8").isLength({min : 8}),

], async(req, res) =>{
  
   try {
      
   const {title , description , tag} = req.body;
   const errors = validationResult(req);
   if(!errors.isEmpty()){
      res.status(400).json({error : errors.array()});
   }

   const note = new Note({
     title , description , tag , user: req.user.id
   })

   const savedNote = await note.save();
   res.json(savedNote);
      
   } catch (error) {
      console.log(error.massage);
      res.status(500).send("Internal server error");
   }
   
   
})



module.exports = router;