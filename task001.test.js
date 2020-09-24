const { maxInArray } = require("./task001");

test(`maxInArray([1,2,3])`, () => {
  expect(maxInArray([1, 2, 3])).toBe(3);
});

test(`maxInArray([1,2,2])`, () => {
  expect(maxInArray([1, 2, 2])).toBe(2);
});

test(`maxInArray([1,1])`, () => {
  expect(maxInArray([1, 1])).toBe(1);
});

test(`maxInArray([4])`, () => {
  expect(maxInArray([4])).toBe(4);
});

test(`maxInArray([])`, () => {
  expect(maxInArray([])).toBe(null);
});

test(`maxInArray()`, () => {
  expect(maxInArray()).toBe(null);
});

test(`maxInArray(1, 2, 3)`, () => {
  expect(maxInArray(1, 2, 3)).toBe(null);
});

test(`maxInArray("1001", 2, 3)`, () => {
  expect(maxInArray("1001", 2, 3)).toBe(null);
});


test(`maxInArray([1, "2", 3])`, () => {
  expect(maxInArray([1, "2", 3])).toBe(null);
});
