

const Employee = require('./Employee.js');


class intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
    }

    getSchool () {
        return this.school
    }

    getRole () {
        return "intern"
    }
};

module.exports = intern;