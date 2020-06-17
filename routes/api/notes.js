const express = require("express");
const validateNotesInput = require("../../validations/notes");
const router = express.Router();

//Load Model
const Note = require("../../models/Note");

// @routes     GET api/notes/healthcheck
// @desc       Tests notes routes
// @access     Public
router.get("/healthcheck", (req, res) => res.json({ notes: "Notes Working" }));

// @routes     GET api/notes
// @desc       Get all notes
// @access     Public
router.get("/", (req, res) => {
    Note.find()
      .sort({ date: -1 })
      .then(notes => res.json(notes))
      .catch(err => res.status(404).json({ notfound: "No Notes found" }));
  });

// @routes     POST api/notes
// @desc       Create Note
// @access     Public
router.post(
    "/",
    (req, res) => {
      //Validation
      const { errors, isValid } = validateNotesInput(req.body);
  
      if (!isValid) {
        //Return with status 400 along with errors
        return res.status(400).json(errors);
      }
      
      // Create Note Object
      const newNote = new Note({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author
      });
      
      // Save Note to database
      newNote
        .save()
        .then(note => res.json(note))
        .catch(err => {
            console.log(err);
            res.status(400).json({error: 'Could not able to save note.'})
        });
    }
  );
  module.exports = router;