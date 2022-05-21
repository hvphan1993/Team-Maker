const Manager = require('../lib/Manager.js');

// create Manager object
test('creates Manager object', () => {
    const manager = new Manager('Splinter', 100, 'datrat@kungfu.com', 5);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// get role from getRole()
test('gets role', () => {
    const manager = new Manager('Splinter', 100, 'datrat@kungfu.com', 5);

    expect(manager.getRole()).toEqual('Manager');
});

console.log(new Manager('Splinter', 100, 'datrat@kungfu.com', 5));