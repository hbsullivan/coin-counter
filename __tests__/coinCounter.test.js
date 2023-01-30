import { TestScheduler } from 'jest'
import Counter from './../src/coinCounter.js'

describe('Counter', () => {

test('should create a counter object with money values', () => {
  const counter = new Counter(4.50);
  expect(counter.money).toEqual(4.50);
})

test('should return money parameter if function is called successfully', () => {
  const counter = new Counter(4.52);
  expect(counter.convertMoney()).toEqual(4.52)
})

test('should check that the input is a number', () => {
  const counter = new Counter("hello");
  expect(counter.convertMoney()).toEqual("Not a number")
})

test('should return quarters if money % .25 equals 0', () => {
  const counter = new Counter(4.50);
  expect(counter.convertMoney()).toEqual(18);
})

test('should return quarters', () => {
  const counter = new Counter(4.52);
  expect(counter.convertMoneys()).toEqual(('Quarters: ' + 18 + ' Dimes: ' + 0 + ' Nickles ' + 0 + ' Pennies: ' + 2));
})
})