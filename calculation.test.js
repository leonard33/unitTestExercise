const Calculation = require('./calculation');

describe('Calculation test', () => {
  test('adding 10 + 10 should be 20', () => {
     const calculation = new Calculation();
     const result = calculation.sum(10, 10)
     expect(result).toBe(20);
  })

  test('minus 10 - 5 should be 5', () => {
    const calculation = new Calculation();
    const result = calculation.minus(10, 5)
    expect(result).toBe(5);
 })

 test('multiply 10 * 5 should be 50', () => {
    const calculation = new Calculation();
    const result = calculation.multiply(10, 5)
    expect(result).toBe(50);
 })

 test('multiply 10 / 5 should be 2', () => {
    const calculation = new Calculation();
    const result = calculation.devide(10, 5)
    expect(result).toBe(2);
 })
})