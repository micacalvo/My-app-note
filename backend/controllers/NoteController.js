//I import the NoteModel
import NoteModel from "../models/NoteModel.js";

//Methods for CRUD

//Show ALL notes
export const getAllNotes = async (req, res) => {
    try {
        const notes = await NoteModel.findAll()
        res.json(notes)
    } catch (error) {
        res.json({message: error.message})
    }
}

//Show ONE note
export const getNote = async (req, res) => {
    try {
        const note = await NoteModel.findAll({
            where: {id:req.params.id}
        })
        res.json(note)
    } catch (error) {
        res.json("--")
    }
}

//Create a note
export const createNote = async(req, res) => {
    try {
        await NoteModel.create(req.body)
        res.json({"message": "Your note has been successfully created"})
    } catch (error) {
        res.json({message: error.message})
    }
}

//Update a note
export const updateNote = async(req, res) => {
    try {
        await NoteModel.update(req.body, {
            where: {id: req.params.id}
        })
        res.json({"message": "Your note has been successfully updated"})
    } catch (error) {
        res.json({message: error.message})
    }
}

//Delete a note
export const deleteNote = async (req, res) => {
    try {
        await NoteModel.destroy({
            where: {id: req.params.id}
        })
        res.json({"message": "Your note has been successfully deleted"})
    } catch (error) {
        res.json({message: error.message})
    }
}