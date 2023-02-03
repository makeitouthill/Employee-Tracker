const connection = require('./connection');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');
const db = require('./query');

const prompts = [
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
];

function start(){
inquirer.prompt(prompts)
  .then(answer => {
    switch (answer.action) {
      case 'View all departments':
        db.viewDepartments(start);
        inquirer.prompt(prompts);
        break;
      case 'View all roles':
        db.viewRoles(start);
        inquirer.prompt(prompts);
        break;
      case 'View all employees':
        db.viewEmployees(start);
        inquirer.prompt(prompts);
        break;
      case 'Add a department':
        db.addDepartment(start);
        inquirer.prompt(prompts);
        break;
      case 'Add a role':
        db.addRole(start);
        inquirer.prompt(prompts);
        break;
      case 'Add an employee':
        db.addEmployee(start);
        inquirer.prompt(prompts);
        break;
      case 'Update an employee role':
        db.updateEmployeeRole(start);
        inquirer.prompt(prompts);
        break;
    }
  });
}

start();