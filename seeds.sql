USE employe_db;

INSERT INTO departments
    (department)
VALUES
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal");

INSERT INTO role
    (role, salary, departments_id)
VALUES
    -- Sales
    ("Sales Lead", 100000.00, 1),
    ("Salesperson", 45000.00, 1),
    -- Engineering
    ("Lead Engineer", 150000.00, 2),
    ("Software Engineer", 120000.00, 2),
    -- Finance
    ("Account Manager", 80000.00, 3),
    ("Accountant", 60000.00, 3),

    -- Legal
    ("Legal Team Lead", 250000.00, 4),
    ("Lawyer", 190000.00, 4);

INSERT INTO employees
    (first_name, last_name, role_id, manager_id)

VALUES
    -- Sales
    ("Jim", "Halpert", 1, 1),
    ("Dwight", "Shrute", 2, 1),

    -- Engineering
    ("Michael", "Scott", 3, 2);
