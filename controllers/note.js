const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');
const Note = require('../models/note');

const getAllNotes = async (req, res) => {
 const notes = await Note.find({ownerId: req.user.userId});
 res.status(StatusCodes.OK).json({notes, count: notes.length});
}

const getNote = async (req, res) => {
 const {
  user: {userId},
  params: {id: noteId}
 } = req;
 const note = await Note.findOne({_id: noteId, ownerId: userId});

 if(!note) {
  throw new NotFoundError(`No note with id: ${noteId}`);
 }

 res.status(StatusCodes.OK).json(note);
}

const createNote = async (req, res) => {
 const {title, content} = req.body;

 if(!title || !content) {
  throw new BadRequestError('Please provide title and content');
 }

 const note = await Note.create({title, content, ownerId: req.user.userId});

 res.status(StatusCodes.CREATED).json({note});
}

const updateNote = async (req, res) => {
 const {
  user: {userId},
  params: {id: noteId},
  body: {title, content}
 } = req;

 if(!title || !content) {
  throw new BadRequestError('Please provide title and content');
 }

 const note = await Note.findOneAndUpdate({
  _id: noteId,
  ownerId: userId,
 },
req.body,
{
 new: true,
 runValidators: true
})
 res.status(StatusCodes.OK).json({note});
}

const deleteNote = async (req, res) => {
 const {
  user: {userId},
  params: {id: noteId}
 } = req;
 
 const note = await Note.findOneAndDelete({
  _id: noteId,
  ownerId: userId
 });

 if(!note) {
  throw new NotFoundError(`No note with id: ${noteId}`);
 }
 res.status(StatusCodes.OK).json({'msg': 'Successfully deleted note'});
}

module.exports = {
 getAllNotes,
 getNote,
 createNote,
 updateNote,
 deleteNote
}