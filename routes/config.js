const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'campus-bordeaux.ovh',
  user: 'passport',
  password: 'passport',
  database: ' 0219_js_cp4_loupcircus',
});

module.exports = connection;
