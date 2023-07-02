
CREATE TABLE Employees(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    department_id INT,
    salary_id INT,
    pto_id INT,
    phone_number VARCHAR(255),
    gender VARCHAR(255),
);

-- @block
INSERT INTO employees (first_name, last_name, department_id, salary_id, pto_id, phone_number, gender, marriage)
VALUES (
    "Ghiyas",
    "Shufy",
    1,
    4,
    7,
    "0282392032",
    "Male",
)

-- @block
SELECT * FROM employees
LEFT JOIN salary
ON salary.employee_id = employees.id;

-- @block
SELECT * FROM employees


-- @block
ALTER TABLE Employees
ADD roles VARCHAR(255)




-- @block
CREATE TABLE Department(
    id INT AUTO_INCREMENT,
    employee_id INT NOT NULL,
    department_name VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (employee_id) REFERENCES employees(id)
);

-- @block
INSERT INTO department (employee_id, department_name)
VALUES 
(1, "Engineering"),
(2, "Engineering")

-- @block
SELECT * FROM department




-- @block
CREATE TABLE Salary(
    id INT PRIMARY KEY AUTO_INCREMENT,
    employee_id INT NOT NULL,
    salary_type VARCHAR(255),
    salary_amount VARCHAR(255),
    salary_payday VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (employee_id) REFERENCES employees(id)
);

-- @block
INSERT INTO salary (employee_id, salary_type, salary_amount, salary_payday)
VALUES
(1, "Gaji Pokok", "6.000.000", "2023-7-30"),
(2, "Gaji Pokok", "10.000.000", "2023-7-30")

-- @block
SELECT * FROM salary

-- @block
DELETE FROM salary WHERE id = 2

-- @block
ALTER TABLE salary
MODIFY COLUMN salary_payday DATE




-- @block
CREATE TABLE pto(
    id INT AUTO_INCREMENT,
    employee_id INT NOT NULL,
    pto_type VARCHAR(255),
    starts_date VARCHAR(255),
    end_date VARCHAR(255),
    PRIMARY KEY (id),
    FOREIGN KEY (employee_id) REFERENCES employees(id)
);

-- @block
INSERT INTO pto (employee_id, pto_type, starts_date, end_date)
VALUES
(1, 'Healing', '2023-07-01', '2023-07-10'),
(2, 'Nikahan', '2023-07-02', '2023-07-15');

-- @block
SELECT * FROM pto

-- @block
DELETE FROM pto WHERE id = 4




-- @block
CREATE TABLE project(
    id INT PRIMARY KEY AUTO_INCREMENT,
    project_name VARCHAR(255)
);

-- @block
INSERT INTO project (project_name)
VALUES
("Ikuzports"),
("Budgetmate")

-- @block
SELECT * FROM project

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
INSERT INTO employee_project (project_id, employee_id)
VALUES
(1, 1),
(1, 2)

-- @block
SELECT project_id, employee_id, project_name, first_name
FROM employee_project
INNER JOIN project ON project.id = employee_id
WHERE project_id = 1

-- @block
SELECT * FROM employee_project

-- @block
SELECT employees.first_name, employees.last_name, project.project_name
FROM employees
JOIN employee_Project ON employees.id = employee_Project.employee_id
JOIN project ON employee_project.project_id = project.id;