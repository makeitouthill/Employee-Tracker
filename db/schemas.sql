CREATE DATABASE empoylee_db;

USE empoylee_db;

CREATE TABLE departments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255)
);

CREATE TABLE roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  salary INT,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(id)
);