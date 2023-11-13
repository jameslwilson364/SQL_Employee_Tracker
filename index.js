const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  );

  // capture collects user inputs for db queries and displays results
  function capture() {
    
    console.log("Welcome to your not so creepy Employee Tracker!");
    // setup inquirer to capture user input
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'userSelection',
            choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Exit'],
            
        },
    ])
    .then((response) => {
        console.log(response.userSelection);
        const userSelection = response.userSelection
        console.log(userSelection);

        if (userSelection == 'View All Employees') {
            console.info("You selected View All Employees");
            viewAllEmployees();
            // console.log('Returning you to the main menu');
            // capture();
        } else if (userSelection == 'Add Employee') {
            console.info(userSelection);
            addEmployee();
            // capture();
        } else if (userSelection == 'Update Employee Role') {
            console.info(userSelection);
            updateRole();
            // capture();            
        } else if (userSelection == 'View All Roles') {
            console.info(userSelection);
            viewAllRoles();
            // capture();
        } else if (userSelection == 'Add Role') {
            console.info(userSelection);
            addRole();
            // capture();
        } else if (userSelection == 'View All Departments') {
            console.info(userSelection);
            viewAllDepartments();
            // capture();            
        } else if (userSelection == 'Add Department') {
            console.info(userSelection);
            addDepartment();
            // capture();
        } else if(userSelection == 'Exit'){
          console.log('Thanks for using the not so creepy Employee Tracker');
          return;
        }
    }); 
    
    
  }
  
  // view all employees
  function viewAllEmployees() {
    db.query(`SELECT * FROM all_employees;`, function (err, results) {
      console.table(results);
    });
  }

  // function to add an employee to the db WIP
  function addEmployee() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is their first name?',
            name: 'employeeFirstName',
        },
        {
            type: 'input',
            message: 'What is their last name?',
            name: 'employeeLastName',
        },
        {
            type: 'list',
            message: 'What is their role?',
            name: 'employeeRole',
            choices: ['Project Manager', 'Human Resources Technician'],
        },
    ])
    .then((response) => {
        let employeeFirstName = response.employeeFirstName;
        let employeeLastName = response.employeeLastName;
        let employeeRole = response.employeeRole;
        console.log(employeeFirstName);
        console.log(employeeLastName);
        console.log(employeeRole);
        db.query(`INSERT INTO all_employees(first_name, last_name, title, department, salary, manager)
            VALUES ('${employeeFirstName}', '${employeeLastName}', '${employeeRole}', 'Engineering', 125000, 'Vanessa');`, function (err, results) {
                console.table(results);
            });
        db.query('SELECT * FROM all_employees', function (err, results) {
            console.table(results);
        });  
    })
  }

  // update an employees role
  function updateRole() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'Whose role do you want to update? Please enter their employee_id number',
            name: 'employeeId',
        },
        {
          type: 'list',
          message: 'Please select from the following roles?',
          name: 'employeeNewRole',
          choices: ['Project Manager', 'Human Resources Technician', 'HVAC Technician', 'Mechanical Engineer', 'Administrative Assistant'],
      },
    ])
    .then((response) => {
        let employeeId = response.employeeId;
        let employeeNewRole = response.employeeNewRole;
        console.log(employeeNewRole);
        console.log(employeeId);
        db.query(`UPDATE all_employees
                  SET title = "${employeeNewRole}"
                  WHERE employee_id = ${employeeId}`, function (err, results) {
                console.table(results);
            });
        db.query('SELECT * FROM all_employees', function (err, results) {
            console.table(results);
        });  
    })
  }

  // view all roles
  function viewAllRoles() {
    db.query(`SELECT * FROM all_roles;`, function (err, results) {
      console.table(results);
  });
  }
  // add a role
  function addRole() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What role would like to add?',
            name: 'roleInput',
        },
        {
            type: 'list',
            message: 'What department does this role work in?',
            name: 'roleDepartment',
            choices: ['Engineering', 'Human Resources'],
        },
        {
          type: 'input',
          message: 'What is the salary of this role?',
          name: 'roleSalary',
        },
    ])
    .then((response) => {
        let roleInput = response.roleInput;
        let roleDepartment = response.roleDepartment;
        let roleSalary = response.roleSalary;
        console.log(roleInput);
        console.log(roleDepartment);
        console.log(roleSalary);
        db.query(`INSERT INTO all_roles(job_title, department_name, salary)
            VALUES ('${roleInput}', '${roleDepartment}', '${roleSalary}');`, function (err, results) {
                console.table(results);
            });
        db.query('SELECT * FROM all_roles', function (err, results) {
            console.table(results);
        });  
    })
  }

  // view all departments
  function viewAllDepartments() {
    db.query(`SELECT * FROM all_departments;`, function (err, results) {
      console.table(results);
  });
  }
  
  // add a department
  function addDepartment() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: 'What department would like to add?',
            name: 'departmentInput',
        },
    ])
    .then((response) => {
        let departmentInput = response.departmentInput;
        console.log(departmentInput);
        db.query(`INSERT INTO all_departments(department_name)
            VALUES ('${departmentInput}');`, function (err, results) {
                console.table(results);
            });
        db.query('SELECT * FROM all_departments', function (err, results) {
            console.table(results);
        });  
    })
  }
  
  // launch the app
  function init() {
    capture();
  }

  init();
 