// routes/notes.js
import express from 'express';
import { getNotes, createNote,updateNote ,deleteNote } from '../controllers/notes.js';

const router = express.Router();

// Get all notes
router.get('/', getNotes);

// Create a new note
router.post('/', createNote);

// Update a note
router.put('/:id', updateNote);

// Delete a note
router.delete('/:id', deleteNote);

export default router;
