DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE all_employees (
  employee_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  title TEXT,
  department VARCHAR(50),
  salary INT,
  manager VARCHAR(50)
);

CREATE TABLE all_roles (
  job_title VARCHAR(50),
  job_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(50),
  salary INT
);

CREATE TABLE all_departments (
  department_name VARCHAR(50),
  department_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);