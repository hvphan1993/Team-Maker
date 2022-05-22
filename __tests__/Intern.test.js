const Intern = require('../lib/Intern');

// creates Intern object
test('creates Intern', () => {
    const intern = new Intern('Casey Jones', 7, 'hockeyfreak@nopowers.com', 'New York Tech');

    expect(intern.schoolName).toEqual(expect.any(String));
});

// test schoolName()
test('gets school name', () => {
    const intern = new Intern('Casey Jones', 7, 'hockeyfreak@nopowers.com', 'New York Tech');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.schoolName.toString()));
});

// change role to intern
test('get role', () => {
    const intern = new Intern('Casey Jones', 7, 'hockeyfreak@nopowers.com', 'New York Tech');

    expect(intern.getRole()).toEqual('Intern');
});

console.log(new Intern('Casey Jones', 7, 'hockeyfreak@nopowers.com', 'New York Tech'));