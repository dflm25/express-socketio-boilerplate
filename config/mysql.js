/**
 * Mysql connect
 */
import Sequelize from 'sequelize';
import fs from 'fs';
import path from 'path';
import config from './';

const basename = path.basename(module.filename);
const databases = Object.keys(config.MYSQL);
const db = {};
const sequelize = {};

for(let i = 0; i < databases.length; ++i) {
    let database = databases[i];
    let dbPath = config.MYSQL[database];
    //Store the database connection in our db object
    db[database] = new Sequelize( dbPath.database, dbPath.username, dbPath.password, dbPath );
}

// Add models
for(let i = 0; i < databases.length; ++i) {
    let folderName = databases[i];
    fs
    .readdirSync(__dirname + '/../app/models/' + folderName)
    .filter(file => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach(file => {
        const model = db[folderName].import(path.join(__dirname + '/../app/models/' + folderName, file));
        db[folderName][model.name] = model;
    });
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db