class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
  
    getName() {
      return this.name;
    }
  
    getID() {
      return this.id;
    }
  
    getEmail() {
      return this.email;
    }
  
    getRole() {
      return "Employee";
    }
  
    getCardContentHeader() {
      const contentHeader = `<h4 class="card-title">${this.getName()}</h4>
        <h6 class="card-subtitle mb-2">${this.getRole()}</h6>`;
      return contentHeader;
    }
  
    getCardContentBody() {
      const contentBody = `<li class="list-group-item">ID: ${this.getID()}</li>
        <li class="list-group-item">Email: <a href="mailto:${this.getEmail()}"class="card-link">${this.getEmail()}</a></li>`;
      return contentBody;
    }
  }
  
  module.exports = Employee;
