const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'books_db'
    },
    console.log(`Connected to the books_db database.`)
  );

  // could get cute with graphic generator after init nice to have
  // dropdown menu in inquirer
  // dropdown contains 
  // view all employees
    // needs a table for all employees
  // add employee
    // pushes to employee table
  // update employee role
    // updates employee table
  // view all roles
    // needs a table for all roles that relates to employees and departments
  // add role
    // pushes to role table
  // view all departments
    // need a table for departments needs to relate to employees and roles
  // add department
    // pushes to the departments table