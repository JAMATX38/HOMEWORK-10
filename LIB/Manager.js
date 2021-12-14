const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }

  getCardContentBody() {
    let contentBody = super.getCardContentBody();
    contentBody += `<li class="list-group-item">Office Number: ${this.getOfficeNumber()}</li>`;

    return contentBody;
  }
}

module.exports = Manager;
