const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }

  getCardContentBody() {
    let contentBody = super.getCardContentBody();
    contentBody += `<li class="list-group-item">School: ${this.getSchool()}</li>`;

    return contentBody;
  }
}

module.exports = Intern;