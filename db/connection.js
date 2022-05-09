
const db = require('mysql2-promise')();

db.configure({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'Bas2022@!',
  database: 'cms_employee'
});

module.exports = db;