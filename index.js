const inquirer = require("inquirer");
const fs = require("fs");
const genTeam = require("./src/generateHTML");

async function run() {
  let addNext = true;
  let records = [];
  while (addNext) {
    const { role } = await inquirer.prompt([
      {
        type: "list",
        name: "role",
        message: "What is this employee's role?",
        choices: ["Engineer", "Manager", "Intern"],
      },
    ]);

    const employeeQuestions = [
      {
        type: "input",
        name: "name",
        message: "Enter employee name:",
        validate: (input) => {
          if (input === "") {
            return "Name cannot be empty";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "email",
        message: "Enter employee's email address:",
        validate: (input) => {
          if (input === "") {
            return "Email cannot be empty";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "id",
        message: "Enter employee ID number:",
        validate: (input) => {
          if (input === "") {
            return "ID cannot be empty";
          }
          return true;
        },
      },
    ];

    if (role === "Engineer") {
      employeeQuestions.push({
        type: "input",
        name: "github",
        message: "Enter employee github username:",
        validate: (input) => {
          if (input === "") {
            return "Github username cannot be empty";
          }
          return true;
        },
      });
    }

    if (role === "Intern") {
      employeeQuestions.push({
        type: "input",
        name: "school",
        message: "Enter intern's school:",
        validate: (input) => {
          if (input === "") {
            return "School cannot be empty";
          }
          return true;
        },
      });
    }

    if (role === "Manager") {
      employeeQuestions.push({
        type: "input",
        name: "office",
        message: "Enter manager's office number:",
        validate: (input) => {
          if (input === "") {
            return "Office number cannot be empty";
          }
          return true;
        },
      });
    }

    const data = await inquirer.prompt(employeeQuestions);
    data.role = role;
    records = [data];
    const filename = "./data/team.json";
    if (fs.existsSync(filename)) {
      const json = fs.readFileSync(filename, "utf-8");
      records = [...JSON.parse(json), data];
    }
    fs.writeFileSync(filename, JSON.stringify(records, null, "\t"));

    const response = await inquirer.prompt([
      {
        type: "confirm",
        name: "addNext",
        message: "Would you like to add another team member?",
      },
    ]);
    addNext = response.addNext;
  }
  await genTeam(records);
}

run();