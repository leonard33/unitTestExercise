const Reverse = require('./revese');

test('the string should be reversed', () => {
    const reverse = new Reverse();
    const string = 'hello';
    const result = reverse.reversestring(string);
    expect(result).toBe('olleh');
})