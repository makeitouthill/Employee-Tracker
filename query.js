const connection = require('./connection');
const inquirer = require('inquirer');
const prompts = require('./index')
const start = require('./index')
 
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

 addDepartment(departmentName, start) {
    inquirer.prompt([
      {
        type: 'input',
        name: 'departmentName',
        message: 'Enter department name:',
      }
    ]).then(answers => {
      this.connection.query(
        'INSERT INTO departments SET ?',
        {
          name: answers.departmentName,
        },
        (err, res) => {
          if (err) throw err;
          console.log(`Added department: ${answers.departmentName}`);
          start();
        }
      );
    });
}
}


module.exports = new Database();