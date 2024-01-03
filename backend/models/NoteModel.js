//First, I import the database connection. 
import database from "../database/db.js";
//Import datatypes from Sequelize
import { DataTypes } from "sequelize";

const NoteModel = database.define('notas', {
    nota: {type: DataTypes.STRING},
    contenido: {type: DataTypes.STRING},
})

export default NoteModel