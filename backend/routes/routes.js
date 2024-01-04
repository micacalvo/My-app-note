//I use express router
import express from "express"
import { createNote, deleteNote, getAllNotes, getNote, updateNote } from "../controllers/NoteController.js"

const router = express.Router()

//I generate the routes
router.get('/', getAllNotes)
router.get('/:id', getNote)
//router.get('/', tagNote)
router.post('/', createNote)
router.put('/:id', updateNote)
router.delete('/:id', deleteNote)

export default router