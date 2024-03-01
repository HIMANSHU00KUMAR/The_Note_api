// controllers/notes.js

import Note from '../models/note.js';

// Get all notes
export const getNotes = async (req, res) => {
  try {
    console.log("Hiiii")
    // const notes = await Note.find();
    // res.status(200).json(notes);
    res.status(200).json({"Hello":"Hii"})
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new note
export const createNote = async (req, res) => {
  const note = req.body;
  try {
    const newNote = await Note.create(note);
    res.status(201).json(newNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a note
export const updateNote = async (req, res) => {
  const { id } = req.params;
  const note = req.body;

  try {
    const updatedNote = await Note.findByIdAndUpdate(id, note, { new: true });
    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a note
export const deleteNote = async (req, res) => {
  const { id } = req.params;

  try {
    // Use findOneAndDelete to find and remove the note by its ID
    const deletedNote = await Note.findOneAndDelete({ _id: id });
    if (!deletedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};