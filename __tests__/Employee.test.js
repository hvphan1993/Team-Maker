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
})


