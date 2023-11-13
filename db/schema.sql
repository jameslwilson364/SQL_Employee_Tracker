DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE all_departments (
  department_name VARCHAR(50),
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  manager_name VARCHAR(50) 
);

CREATE TABLE all_roles (
  job_title VARCHAR(50),
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  salary INT,
  department_id INT,
  FOREIGN KEY (department_id)
  REFERENCES all_departments(id)
  ON DELETE SET NULL
);

CREATE TABLE all_employees (
  employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  role_id INT,
  FOREIGN KEY (role_id) 
  REFERENCES all_roles(id) 
  ON DELETE SET NULL
);



