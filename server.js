const mysql = require("mysql");
const inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "caballero28",
    database: "employee_db"
});

connection.connect(function (err) {
    if (err) throw err;
    run();
});

function run() {
    inquirer.prompt({
        name: "start",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View all Employees",
            "View all Employees By Department",
            "View all Employees By Manager",
            "Add Employee",
            "Remove Employee",
            "Update Employee's Role",
            "Update Employee's Manager",
            // -----------------------------------
            "View Roles",
            "Add Role",
            "Remove Role",
            // -----------------------------------
            "View Department",
            "Add Department",
            "Remove Department",
            // -----------------------------------
            "View the total utilized budget of a department",
            // -----------------------------------
            "Exit"
        ]
    })

        .then(answer => {
            switch (answer.start) {
                case "View all Employees": // DONE
                    viewEmp();
                    break;

                case "View all Employees By Department": // DONE
                    viewEmpDep();
                    break;

                case "View all Employees By Manager": // DONE
                    viewEmpMan();
                    break;

                case "Add Employee":
                    addEmp();
                    break;

                case "Remove Employee":
                    remEmp();
                    break;

                case "Update Employee's Role":
                    updEmpRole();
                    break;

                case "Update Employee's Manager":
                    updEmpMan();
                    break;

                case "View Roles": // DONE
                    viewRole();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "Remove Role":
                    remRole();
                    break;

                case "View Department": // DONE
                    viewDep();
                    break;

                case "Add Department":
                    addDep();
                    break;

                case "Remove Department":
                    remDep();
                    break;

                case "View the total utilized budget of a department":
                    viewTotBudget();
                    break;

                case "Exit":
                    connection.end();
                    break;
            };
        });
};