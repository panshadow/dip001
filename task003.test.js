const { range, xchg } = require("./task003");

test(`range(0,10)`, () => expect(range(0, 4)).toEqual([0, 1, 2, 3]));

test(`range(0,1000)`, () => expect(range(0, 1000).length).toBe(1000));

test(`range(1,6,2)`, () => expect(range(1, 6, 2)).toEqual([1, 3, 5]));

test(`range(1,2,3)`, () => expect(range(1, 2, 3)).toEqual([1]));

test(`range(0,100,10)`, () =>
  expect(range(0, 100, 10)).toEqual([0, 10, 20, 30, 40, 50, 60, 70, 80, 90]));

test(`range(4,1)`, () => expect(range(4, 1)).toEqual([4, 3, 2]));

test(`range(0,11,-2)`, () =>
  expect(range(0, 11, -2)).toEqual([0, 2, 4, 6, 8, 10]));
