const { Router } = require('express');
const router = Router();

const { renderNoteForm, createNewNote, renderNotes, renderEditForm,
    updateNote, deleteNote } = require('../controllers/notes.controller');

const {isAuthenticated} = require ('../helpers/auth')

//get to take data
//post to receive data from server
// put method to update


//New notes or messages
router.get('/notes/add', isAuthenticated, renderNoteForm); //this link show form to user
router.post('/notes/new-note', isAuthenticated, createNewNote); //this is method post to use with jaav

//get new notes or messages

router.get('/notes', isAuthenticated, renderNotes);

//edit notes or messages
router.get('/notes/edit/:id', isAuthenticated, renderEditForm); //to show form

router.put('/notes/edit/:id', isAuthenticated,  updateNote); //update data

//delete notes
router.delete('/notes/delete/:id', isAuthenticated, deleteNote); //to delete notes 

module.exports = router;