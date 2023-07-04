
CREATE TABLE Employees(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    profile_picture VARCHAR(255),
    department_id INT,
    salary_id INT,
    pto_id INT,
    phone_number VARCHAR(255),
    gender VARCHAR(255),
    roles VARCHAR(255),
    joined_date VARCHAR(255);
);

-- @block
INSERT INTO employees (first_name, last_name, profile_picture, department_id, salary_id, pto_id, phone_number, gender, roles, joined_date)
VALUES 
-- ("Abdurrachman", "Kamil", NULL, 1, NULL, NULL, "0922718232", "Male", "Fullstack Developer", "2023-03-04" ),
-- ("Ethaniel", "Ravanello", NULL, 1, NULL, NULL, "0812732929", "Male", "Frontend Developer", "2023-07-04" ),
-- ("Rendra", "Andriyansah", NULL, 1, NULL, NULL, "09182838237", "Male", "Frontend Developer", "2023-06-04" ),
-- ("Ghiyats", "Suffy", NULL, 1, NULL, NULL, "0283889932", "Male", "Frontend Developer", "2023-01-04" ),
-- ("Almira", "Mahsa", NULL, 1, NULL, NULL, "028328382", "Female", "Frontend Developer", "2023-04-04" ),
("Jane", "Doe", NULL, 2, NULL, NULL, "0192819232", "Male", "Ui/Ux", "2023-04-04" );



-- @block
ALTER TABLE employees
ADD CONSTRAINT employees_ibfk_1 FOREIGN KEY (department_id) REFERENCES departments(id);

-- @block
SELECT * FROM employees
LEFT JOIN salary
ON salary.employee_id = employees.id;

-- @block
SELECT * FROM employees

-- @block
ALTER TABLE salaries AUTO_INCREMENT = 1;



-- @block
ALTER TABLE Employees
ADD joined_date DATE




-- @block
CREATE TABLE Department(
    id INT AUTO_INCREMENT,
    department_name VARCHAR(255),
    PRIMARY KEY (id),
);

-- @block
INSERT INTO departments (department_name)
VALUES 
( "Engineering"),
( "Design"),
( "Marketing"),
( "Sales"),
( "Customer Service");

-- @block
SELECT * FROM departments


-- @block
SELECT Departments.id, COUNT(Employees.id) AS employee_count
FROM Departments
LEFT JOIN Employees ON Departments.id = Employees.department_id
GROUP BY Departments.id;

-- @block
 SELECT *
      FROM Employees
      WHERE department_id;



-- @block
CREATE TABLE salaries(
    id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT NOT NULL,
    salary_type VARCHAR(255),
    salary_amount VARCHAR(255),
    salary_payday VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (employee_id) REFERENCES employees(id)
);

-- @block
ALTER TABLE salaries
ADD COLUMN employee_id INT NOT NULL,
ADD FOREIGN KEY (employee_id) REFERENCES employees(id);

-- @block
INSERT INTO salaries (employee_id, salary_type, salary_amount, salary_payday)
VALUES
(1, "Gaji Pokok", "6.000.000", "2023-7-30"),
(2, "Gaji Pokok", "10.000.000", "2023-7-30")

-- @block
UPDATE Employees
JOIN salaries ON Employees.id = salaries.employee_id
SET Employees.salary_id = salaries.id;

-- @block
SELECT * FROM salaries

-- @block
ALTER TABLE salary
MODIFY COLUMN salary_payday DATE




-- @block
CREATE TABLE ptos(
    id INT AUTO_INCREMENT,
    employee_id INT NOT NULL,
    pto_type VARCHAR(255),
    starts_date VARCHAR(255),
    end_date VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (employee_id) REFERENCES employees(id)
);

-- @block
INSERT INTO ptos (employee_id, pto_type, starts_date, end_date)
VALUES
(1, 'Healing', '2023-07-01', '2023-07-10'),
(2, 'Nikahan', '2023-07-02', '2023-07-15');

-- @block
SELECT * FROM ptos



-- @block
CREATE TABLE projects(
    id INT PRIMARY KEY AUTO_INCREMENT,
    project_name VARCHAR(255)
);

-- @block
INSERT INTO projects (project_name, project_image, project_description)
VALUES
("Ikuzports", NULL, "A Ground breaking Web Application that can break throught the whole internet"),
("Budgetmate", NULL, "A Ground breaking Web Application that can break throught the whole internet")

-- @block
SELECT * FROM projects

-- @block
ALTER TABLE project
ADD project_description VARCHAR(255);




-- @block
CREATE TABLE employee_project(
    id INT AUTO_INCREMENT,
    project_id INT not NULL,
    employee_id INT not NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (project_id) REFERENCES project(id),
    FOREIGN KEY (employee_id) REFERENCES employees(id)
);

-- @block
INSERT INTO employee_projects (project_id, employee_id)
VALUES
(1, 2),
(1, 3),
(1, 4);

-- @block
SELECT project_id, employee_id, project_name, first_name
FROM employee_project
INNER JOIN project ON project.id = employee_id
WHERE project_id = 1

-- @block
SELECT * FROM employee_projects

-- @block
SELECT employees.first_name, employees.last_name, project.project_name
FROM employees
JOIN employee_Project ON employees.id = employee_Project.employee_id
JOIN project ON employee_project.project_id = project.id;


-- @block
SELECT * FROM employee_projects;

-- @block 
SHOW CREATE TABLE employee_projects

-- @block
ALTER TABLE employee_projects
DROP FOREIGN KEY employee_id,
ADD CONSTRAINT employee_id
FOREIGN KEY (employee_id) REFERENCES employees(id);

-- @block
ALTER TABLE employee_projects
ADD CONSTRAINT fk_projects_id
FOREIGN KEY (project_id) REFERENCES projects(id);