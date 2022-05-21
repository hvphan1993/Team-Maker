const Employee = require('../lib/Employee.js');

// Employee class needs 3 common features: name, id, email
test('create employee object', () => {
    const employee = new Employee('Splinter', 100, 'datrat@kungfu.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

// test get name from getName()
test('gets employee name', () => {
    const employee = new Employee('Splinter', 100, 'datrat@kungfu.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// test get id from getId()
test('gets employee id',() => {
    const employee = new Employee('Splinter', 100, 'datrat@kungfu.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// test get email from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Splinter', 100, 'datrat@kungfu.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

// test get role from getRole()
test('gets employee role', () => {
    const employee = new Employee('Splinter', 100, 'datrat@kungfu.com');

    expect(employee.getRole()).toEqual('Employee');
});

console.log(new Employee('Splinter', 100, 'datrat@kungfu.com'));


