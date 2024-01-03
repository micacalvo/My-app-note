import {Sequelize} from "sequelize"

const database = new Sequelize("db_ensolvers", "root", "", {
    host: 'localhost',
    dialect: 'mysql'
})

export default database