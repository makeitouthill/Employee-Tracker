const connection = require('./connection');

connection.query('SELECT 1', function (error, results) {
  if (error) throw error;
  console.log('Connection to database is working:', results);
});