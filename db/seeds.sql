
INSERT INTO all_departments(department_name, manager_name)
VALUES ('Engineering', 'Vanessa'),
        ('Accounting', 'Bill'),
        ('Human Resources', 'Teresa');

INSERT INTO all_roles(job_title, salary, department_id)
VALUES ('Project Manager', 125000, 1),
        ('Accounts Manager', 105000, 2),
        ('Human Resources Technician', 95000, 3);

INSERT INTO all_employees(first_name, last_name, role_id)
VALUES ('James', 'Anderson', 1 ),
        ('Lydia', 'Thompson', 2),
        ('Tiffany', 'Smith', 3 );