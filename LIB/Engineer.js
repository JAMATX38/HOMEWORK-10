const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }

  getCardContentBody() {
    let contentBody = super.getCardContentBody();
    contentBody += `<li class="list-group-item">GitHub: <a href="https://github.com/${this.getGithub()}" class="card-link">${this.getGithub()}</a></li>`;
    return contentBody;
  }
}

module.exports = Engineer;