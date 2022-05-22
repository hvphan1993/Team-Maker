// use employee class
const Employee = require('./Employee');

// Intern extends from Employee
class Intern extends Employee {
    constructor (name, id, email, schoolName) {
        super (name, id, email);

        this.schoolName = schoolName;
    }

    // get school name
    getSchool () {
        return this.schoolName;
    }

    // set intern as role
    getRole () {
        return 'Intern';
    }
}

// exports
module.exports = Intern;