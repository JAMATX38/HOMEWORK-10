const fs = require("fs");
const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");

const pageTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <title>Document</title>
    <link rel="stylesheet" href="team.css">
</head>
<body>
<div class="jumbotron">My Team</div>
  <div class="d-flex p-2 bd-highlight">
{{content}}
  </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
</body>
</html>`;

const cardTemplate = `<div class="card" style="width: 18rem">
<div class="card-header">
  {{contentHeader}}
</div>
<div class="card-body">
  <ul class="list-group list-group-flush">
    {{contentBody}}
  </ul>
</div>
</div>`;

async function genTeam(data) {
  //iterate thru data
  const cards = [];
  for (const record of data) {
    let employee = null;
    switch (record.role) {
      case "Engineer":
        employee = new Engineer(
          record.name,
          record.id,
          record.email,
          record.github
        );
        break;
      case "Manager":
        employee = new Manager(
          record.name,
          record.id,
          record.email,
          record.office
        );
        break;
      case "Intern":
        employee = new Intern(
          record.name,
          record.id,
          record.email,
          record.school
        );
        break;
    }
    cards.push(
      cardTemplate
        .replace("{{contentHeader}}", employee.getCardContentHeader())
        .replace("{{contentBody}}", employee.getCardContentBody())
    );
  }
  const HTML = pageTemplate.replace("{{content}}", cards.join("\n"));
  fs.writeFileSync("./dist/team.html", HTML);
}
module.exports = genTeam;