// use Employee class
const Employee = require('./Employee');

// Manager extends from Employee- add office number, change role
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // call employee constructor
        super (name, id, email);

        this.officeNumber = officeNumber;
    }

    // Employee role overruled
    getRole () {
        return 'Manager';
    }
}


// exports
module.exports = Manager;