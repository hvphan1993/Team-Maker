const Engineer = require('../lib/Engineer');

// creates Engineer object
test('creates Engineer object', () => {
    const engineer = new Engineer('Leo', 1, 'squadleader@turtlepower.com', 'katanatime');

    expect(engineer.github).toEqual(expect.any(String));
});

// get github from getGithub()
test('get github', () => {
    const engineer = new Engineer('Leo', 1, 'squadleader@turtlepower.com', 'katanatime');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// change role to engineer
test('gets role', () => {
    const engineer = new Engineer('Leo', 1, 'squadleader@turtlepower.com', 'katanatime');

    expect(engineer.getRole()).toEqual('Engineer');
});

console.log(new Engineer('Leo', 1, 'squadleader@turtlepower.com', 'katanatime'));