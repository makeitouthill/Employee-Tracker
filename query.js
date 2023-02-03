const connection = require('./connection');

class Database {
    constructor(){
        this.connection = connection;
    }


viewDepartments(callback) {
    return this.connection.query(
      'SELECT * FROM departments',
      (err, res) => {
        if (err) throw err;
        console.table(res);
        callback();
      }
    );
    }

viewRoles(callback) {
    return this.connection.query(
      'SELECT * FROM roles',
      (err, res) => {
        if (err) throw err;
        console.table(res);
        callback();
      }
    );
    }

viewEmployees(callback) {
    return this.connection.query(
      'SELECT * FROM employee',
      (err, res) => {
        if (err) throw err;
        console.table(res);
        callback();
      }
    );
}
}

module.exports = new Database();