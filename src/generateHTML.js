const Employee = require('../lib/Employee')
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function generateCards(employees) {
    let HTMLCard;
    for (const employee of employees) {
      switch (employee.constructor) {
        case Manager:
          HTMLCard += `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">Manager</h5>
                <p class="card-text">
                Name: ${employee.name}<br>
                ID: ${employee.id}<br>
                E-Mail: ${employee.email}<br>
                Office Number: ${employee.officeNumber}
                </p>
            </div>`;
          break;
        case Intern:
          HTMLCard += `<div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Intern</h5>
              <p class="card-text">
              Name: ${employee.name}<br>
              ID: ${employee.id}<br>
              E-Mail: ${employee.email}<br>
              School Name: ${employee.schoolName}
              </p>
          </div>`;
          break;
        case Engineer:
          HTMLCard += `<div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Engineer</h5>
              <p class="card-text">
              Name: ${employee.name}<br>
              ID: ${employee.id}<br>
              E-Mail: ${employee.email}<br>
              Github: ${employee.github}
              </p>
          </div>`;
          break;
        default:
          console.log('idk');
          break;
      }
    }
    return HTMLCard;
  }
  
  function generateHTML(employees) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid"> Employees
        <div class="container">
          ${generateCards(employees)}
          </div>  
      </div>
    </body>
    </html>`
  };

  module.exports = generateHTML;