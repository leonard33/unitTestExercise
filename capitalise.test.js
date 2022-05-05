const Capitalise = require('./capitalise');

test('capitalise the first letter in lenny', () => {
    const capitalise = new Capitalise();
    const string = 'lenny';
    const result = capitalise.firstletter(string);
    expect(result).toBe('Lenny');
})