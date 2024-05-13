
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
   
   console.log(" I am in the backend");
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


// update note using put - "login required" - endpoint - api/notes/updatenote/:id 

router.put('/updatenote/:id', fetchuser, async (req, res) =>{
 
     const {title, description, tag} = req.body;
    
      const newNote = {};
      if(title) (newNote.title  = title);
      if(description) (newNote.description = description);
      if(tag) (newNote.tag = tag);

      let note = await Note.findById(req.params.id);
      if(!note){
        return res.status(400).send("Not found");
      }

      if(note.user.toString() !== req.user.id){
         return res.status(401).send("Not Allowed")
      }

      note = await Note.findByIdAndUpdate(req.params.id, {$set : newNote}, {new : true});
      res.json(note);

})


//  deleting a note using Delete , api/notes/deletenote/:id  - "Login required"

router.delete('/deletenote/:id', fetchuser, async (req, res) =>{
 

    let note = await Note.findById(req.params.id);
    if(!note){
      return res.status(400).send("Not found");
    }

    if(note.user.toString() !== req.user.id){
       return res.status(401).send("Not Allowed")
    }

    note = await Note.findByIdAndDelete(req.params.id);
    res.json({"Success" : "Note has been deleted"});

})


module.exports = router;