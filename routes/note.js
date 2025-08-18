const express = require('express');

const router = express.Router();

const {getAllNotes, getNote, createNote, updateNote, deleteNote} = require('../controllers/note');

router.get('/', getAllNotes).post('/', createNote);
router.get('/:id', getNote).patch('/:id', updateNote).delete('/:id', deleteNote);

module.exports = router;