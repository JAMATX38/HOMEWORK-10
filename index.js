const path = require("path");
const inquirer = require("inquirer");
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Employee = require('./LIB/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { start } = require("repl");
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

function generateEngineer () {
    inquirer.prompt ([
        {
            type: "input",
            message: "What is the Engineers name?",
            name: 'engineername',
        },
        {
            type: "input",
            message: "What is the Engineers id?",
            name: 'engineerid',
        },
        {
            type: "input",
            message: "What is your Engineers email?",
            name:'engineersemail',
        },
        {
            type: "input",
            message: "What is the Engineers Github?",
            name: 'engineergit',
        }
    ]).then(function (res) {
        let newEngineer = new Engineer(res.engineername, res.engineerid, res.engineersemail, res.engineergit);
        employees.push(newEngineer);
        console.log(employees);
        begin()
    }) 
    
}

function generateIntern() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is your Intern's name?",
            name: "Intern",
        },
        {
            type: "input",
            message: "What is your Intern's id?",
            name: "Internid",
        },
        {
            type: "input",
            message: "What is your Intern's email?",
            name: "Internemail",
            
        },
        {
            type: "input",
            message: "What is your Intern's school name?",
            name: 'Internschool',
        },
        ]).then(function (res) {
            let newIntern = new Intern(res.Intern, res.Internid, res.Internemail, res.Internschool);
            employees.push(newIntern);
            console.log(employees);
            start()
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
            start()
        })
};


function stop() {
    fs.writeFile('./dist/index.html', generateHTML(employees), err => {
        err ? console.log(err) : console.log('YOU DID IT!!');
    });
}

begin();
