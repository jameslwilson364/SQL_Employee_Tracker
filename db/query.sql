   
SELECT 
    e.employee_id AS employee_id,
    e.first_name AS first_name,
    e.last_name AS last_name,
    r.id AS role_id,
    r.job_title AS job_title,
    r.salary AS salary,
    d.id AS department_id,
    d.department_name AS department_name,
    d.manager_name AS manager_name
FROM 
    (all_employees AS e 
    JOIN all_roles AS r
    ON e.role_id = r.id)
    JOIN all_departments AS d 
    ON r.department_id = d.id;