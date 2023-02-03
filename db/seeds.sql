INSERT INTO departments (id, name)
VALUES 
        (1, 'Sales'),
        (2, 'Finance'),
        (3, 'Development'),
        (4, 'Marketing'),
        (5, 'Human Resources'),
        (6, 'Customer Service');

INSERT INTO roles (id, title, salary, department_id)
VALUES
        (1, "Sales Manager", 90000, 1),
        (2, "Sales Associate", 50000, 1),
        (3, "Financial Analyst", 75000, 2),
        (4, "Financial Manager", 110000, 2),
        (5, "Software Developer", 80000, 3),
        (6, "Development Manager", 100000, 3),
        (7, "Marketing Manager", 90000, 4),
        (8, "Marketing Associate", 55000, 4),
        (9, "HR Manager", 110000, 5),
        (10, "HR Associate", 60000, 5),
        (11, "Customer Service Manager", 85000, 6),
        (12, "Customer Service Associate", 45000, 6);
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
        (1, "John", "Doe", 1, null),
        (2, "Ashley", "Snow", 2, 1),
        (3, "Jim", "Smith", 3, null),
        (4, "Elon", "Tusk", 4, 3),
        (5, "Michael", "Jackson", 5, null),
        (6, "Kevin", "Johnson", 6, 5),
        (7, "Joe", "Logan", 7, null),
        (8, "Bill", "Furr", 8, 7),
        (9, "Jordan", "Peterson", 9, null),
        (10, "Frank", "Thomas", 10, 9),
        (11, "Richard", "Heart", 11, null),
        (12, "Sophia", "Lamas", 12, 11);