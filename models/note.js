
const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
 title: {
  type: String,
  required: [true, 'Please provide title'],
  minlength: 2,
  maxlength: 100
 },
 content: {
  type: String,
  required: [true, 'Please provide content'],
  minlength: 2,
  maxlength: 1000
 },
 ownerId: {
  type: mongoose.Types.ObjectId,
  ref: 'User',
  required: [true, 'Please provide user']
 }
}, {timestamps: true});

module.exports = mongoose.model('Note', NoteSchema);