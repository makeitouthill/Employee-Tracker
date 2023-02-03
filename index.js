const connection = require('./connection');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role'
      ]
    }
  ]);