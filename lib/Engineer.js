// use Employee class
const Employee = require('./Employee');

// engineer extends from employee
class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);

        this.github = github;
    }

    // get github info
    getGithub () {
        return this.github;
    }

    // overwrite role to be engineer
    getRole () {
        return 'Engineer';
    }
}

// exports
module.exports = Engineer;