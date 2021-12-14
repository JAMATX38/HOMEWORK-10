const path = require("path");
const inquirer = require("inquirer");
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const { start } = require("repl");
const employees = [];

// const { countReset } = require("console");
// const { create } = require("domain");
// const { lookup } = require("dns");

let begin = () => {
    inquirer.prompt([
        {
            message: "Who will you be adding?",
            name:" role",
            type: "list",
            choices: ["Manager", "Engineer", "Intern", "stop"]
        }
    ])
    .then(function (response) {
        switch (response.role) {
            case "Manager":
                generateManager()
                break;
            case "Intern":
                generateIntern()
                break;
            case "Engineer":
                generateEngineer()
                break;
            default:
                stop()
                break;            
        }
    })
    .catch(function (err) {
        console.log(err);
    })
}

function generateEngineer() {
    inquirer.prompt ([
        {
            type: "input",
            message: "What is the Engineers name?",
            name: 'name',
        },
        {
            type: "input",
            message: "What is the Engineers id?",
            name: 'id',
        },
        {
            type: "input",
            message: "What is your Engineers email?",
            name:'email',
        },
        {
            type: "input",
            message: "What is the Engineers Github?",
            name: 'github',
        }
    ]).then(function (res) {
        let engi = new Engineer(res.engineername, res.engineerid, res.engineersemail, res.engineergit);
        employees.push(engi);
        console.log(employees);
        begin()
    }) 
    
}

function generateIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your Intern's name?",
            name: "name",
        },
        {
            type: "input",
            message: "What is your Intern's id?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your Intern's email?",
            name: "email",
            
        },
        {
            type: "input",
            message: "What is your Intern's school name?",
            name: 'school',
        },
        ]).then(function (res) {
            let intern = new Intern(res.name, res.id, res.email, res.school);
            employees.push(intern);
            console.log(employees);
            begin()
        })
};

function generateManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your Manager's name?",
            name: "Manager",
        },
        {
            type: "input",
            message: "What is your Manager's id?",
            name: "Managerid",
        },
        {
            type: "input",
            message: "What is your Manager's email?",
            name: "Manageremail",
            
        },
        {
            type: "input",
            message: "What is your Manager's office number?",
            name: 'Managerofficenumber',
        },
        ]).then(function (res) {
            let newManager = new Manager(res.Manager, res.Managerid, res.Manageremail, res.Managerofficenumber);
            employees.push(newManager);
            console.log(employees);
            begin()
        })
};


function stop() {
    fs.writeFile('./dist/index.html', generateHTML(employees), err => {
        err ? console.log(err) : console.log('YOU DID IT!!');
    });
}

begin();
