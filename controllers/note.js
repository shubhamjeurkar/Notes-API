const { StatusCodes } = require('http-status-codes');

const getAllNotes = async (req, res) => {
 res.status(StatusCodes.OK).send('get All Notes');
}

const getNote = async (req, res) => {
 res.status(StatusCodes.OK).send('get single Note');
}

const createNote = async (req, res) => {
 res.status(StatusCodes.OK).send('Create note');
}

const updateNote = async (req, res) => {
 res.status(StatusCodes.OK).send('Update note');
}

const deleteNote = async (req, res) => {
 res.status(StatusCodes.OK).send('Delete note');
}

module.exports = {
 getAllNotes,
 getNote,
 createNote,
 updateNote,
 deleteNote
}