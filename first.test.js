const Strlength = require('./first');

test('string letters number', () => {
    const strlength = new Strlength();
    const string = 'patty';
    const result = strlength.stringlength(string);
    expect(result).toBe(5, 'error');
})

test('string letters number', () => {
    const strlength = new Strlength();
    const string = 'matarajioon';
    const result = strlength.stringlength(string);
    expect(result).toBe(11);
})