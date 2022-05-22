const inquirer = require('inquirer');
const fs = require('fs');

// reference html template
const HTMLtemplate = require('./src/HTMLtemplate');

// team member classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// team members array
const membersArray = [];

// prompt user for manager info
const addManager = () => {
    return inquirer.prompt ([
       {
        type: 'input',
        name: 'name',
        message: 'What is the name of the manager? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the manager's name!");
                return false;
            }
        }   
       },
       {
           type: 'input',
           name: 'id',
           message: "Enter the manager's ID.",
           validate: idInput => {
               if (idInput) {
                   return true;
               } else {
                   console.log('Please enter an ID for the manager!');
                   return false;
               }
           }
       },
       {
           type: "input",
           name: "email",
           message: "Enter the manager's email.",
           validate: email => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
               if (valid) {
                   return true;
               } else {
                   console.log("Please enter the manager's email!");
                   return false;
               }
           }
       },
       {
           type: "input",
           name: "officeNumber",
           message: "Please enter the manager's office number.",
           validate: officeNumberInput => {
               if (officeNumberInput) {
                   return true;
               } else {
                   console.log("Please enter the manager's office number!");
               }
           }
       }
    ])
    .then(managerInfo => {
        const { name, id, email, officeNumber } = managerInfo;
        const manager = new Manager (name, id, email, officeNumber);

        membersArray.push(manager);
        console.log(manager);
    })
};

// ask for other members and prompt user

const addEmployee = () => {
    console.log(`
    ==================
    Adding more employees to the team
    ==================
    `);

    return inquirer.prompt ([
        {
            type: "list",
            name: "role",
            message: "Please select your employee's role.",
            choices: ["Engineer", "Intern", "Finished"],
            
        },
        {
            type: "input",
            name: "name",
            message: "What is your employee's name?",
            when: (input) => input.role != "Finished",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your employee's name.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "What is your employee's ID number?",
            when: (input) => input.role != "Finished",
            validate: idInput => {
                if (isNaN(idInput)) {
                    console.log("Please enter your employee's ID.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your employee's email address?",
            when: (input) => input.role != "Finished",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
               if (valid) {
                   return true;
               } else {
                   console.log("Please enter the manager's email!");
                   return false;
               }
           }
        },
        {
            type: "input",
            name: "github",
            message: "What is your employee's github username?",
            when: (input) => input.role === "Engineer",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter your employee's github username.");
                }
            }
        },
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school.",
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school.");
                }
            }
        },
        {
            type: "confirm",
            name: "confirmAddEmployees",
            message: "Would you like to add more members to your team?",
            default: false
        }
    ])
    .then(employeeInfo => {
        // deconstruct employee class info
        let { name, id, email, role, github, school, confirmAddEmployees } = employeeInfo;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer(name, id, email, github);

            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern(name, id, email, school);

            console.log(employee);
        }

        membersArray.push(employee);

        if (confirmAddEmployees) {
            return addEmployee(membersArray);
        } else {
            return membersArray;
        }
    })
};

// create html page using fs
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("The team's profile has been successfully generated! Check out index.html to view your team!")
        }
    })
};

addManager()
    .then(addEmployee)
    .then(membersArray => {
        return HTMLtemplate(membersArray);
    })
    .then(HTMLpage => {
        return writeFile(HTMLpage);
    })
    .catch(err => {
        console.log(err);
    });