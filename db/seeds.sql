INSERT INTO all_employees(first_name, last_name, title, department, salary, manager)
VALUES ('James', 'Anderson', 'Project Manager', 'Engineering', 125000, 'Vanessa'),
        ('Tiffany', 'Smith', 'Human Resources Technician', 'Human Resources', 95000, 'Amber' );

INSERT INTO all_roles(job_title, department_name, salary)
VALUES ('Project Manager', 'Engineering', 125000),
        ('Human Resources Technician', 'Human Resources', 95000);

INSERT INTO all_departments(department_name)
VALUES ('Engineering'),
        ('Human Resources');