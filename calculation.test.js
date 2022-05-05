const Calculation = require('./calculation');

describe('Calculation test', () => {
  test('adding 10 + 10 should be 20', () => {
     const calculation = new Calculation();
     const result = calculation.sum(10, 10)
     expect(result).toBe(20);
  })

  test('adding 0.2 + 10 should be 10.2', () => {
    const calculation = new Calculation();
    const result = calculation.sum(10, 0.2)
    expect(result).toBe(10.2);
 })

 test('adding 0.2 + 0.8 should be 1', () => {
    const calculation = new Calculation();
    const result = calculation.sum(0.8, 0.2)
    expect(result).toBe(1);
 })
 // minus tests
  test('minus 10 - 5 should be 5', () => {
    const calculation = new Calculation();
    const result = calculation.minus(10, 5)
    expect(result).toBe(5);
 })

 test('minus 0.2 - 5 should be -4.8', () => {
    const calculation = new Calculation();
    const result = calculation.minus(0.2, 5)
    expect(result).toBe(-4.8);
 })

 test('minus -10 - 5 should be 5', () => {
    const calculation = new Calculation();
    const result = calculation.minus(-10, 5)
    expect(result).toBe(-15);
 })
 // multiplying tests
 test('multiply 10 * 5 should be 50', () => {
    const calculation = new Calculation();
    const result = calculation.multiply(10, 5)
    expect(result).toBe(50);
 })

 test('multiply 1.5 * 5 should be 7.5', () => {
    const calculation = new Calculation();
    const result = calculation.multiply(1.5, 5)
    expect(result).toBe(7.5);
 })

 test('multiply -10 * 5 should be -50', () => {
    const calculation = new Calculation();
    const result = calculation.multiply(-10, 5)
    expect(result).toBe(-50);
 })
// devision test
 test('multiply 10 / 5 should be 2', () => {
    const calculation = new Calculation();
    const result = calculation.devide(10, 5)
    expect(result).toBe(2);
 })

 test('multiply -10 / 5 should be -2', () => {
    const calculation = new Calculation();
    const result = calculation.devide(-10, 5)
    expect(result).toBe(-2);
 })

 test('multiply 0.12 / 5 should be o.024', () => {
    const calculation = new Calculation();
    const result = calculation.devide(0.12, 5)
    expect(result).toBe(0.024);
 })
})