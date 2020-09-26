const {isArrayOf, takeOf, filterMultiplesOf} = require('./task002');


test(`isArrayOf([1,2,3,"4"],"number")`, () => {
  const inArr = [1,2,3,"4"];

  expect(isArrayOf(inArr, "number")).toBe(false);
})

test(`isArrayOf([2,3,5,7,11], "number")`, () => {
  expect(isArrayOf([2,3,5,7,11], "number")).toBe(true);
})

test(`isArrayOf("true", "false", "true", "boolean")`, () => {
  expect(isArrayOf("true", "false", "true", "boolean")).not.toBe(true);
})


test(`isArrayOf(["one", "two", "3"],"string")`, () => {
  const inArr = ["one", "two", "3"];

  expect(isArrayOf(inArr, "string")).toBe(true);
})

test(`takeOf([1,2,3], "number")`, () => {
  const inArr = [1,2,3];
  const res = takeOf(inArr,"number");

  expect(res).toEqual(inArr);
})

test(`takeOf(["1",2,"3"], "number")`, () => {
  const inArr = ["1",2,"3"];
  const res = takeOf(inArr,"number");

  expect(res.length).toBe(1);
  expect(res).toEqual([2]);
})

test(`takeOf(1,2,3,"number")`, () => {
  const res = takeOf(1,2,3,"number");
  expect(res).toEqual(expect.any(Array));
})

test(`isArrayOf(takeOf([1,"2",[1,2,3],3,true,"4"], "number"),"number")`, () => {
  const xs = [1,"2",[1,2,3],3,true,"4"];
  const type = "number";
  expect(isArrayOf(takeOf(xs, type),type)).toBe(true);
})


test(`filterMultiplesOf([1,2,3,4,5,6,7,8,9], 3)`, () => {
  const res = filterMultiplesOf([1,2,3,4,5,6,7,8,9], 3);
  expect(res).toEqual([1,2,4,5,7,8]);
});

test(`filterMultiplesOf([1,2,3,4,5,6,7,8,9], 2)`, () => {
  const res = filterMultiplesOf([1,2,3,4,5,6,7,8,9], 2);
  expect(res).toEqual([1,3,5,7,9]);
});


test(`filterMultiplesOf([1,2,3,4,5,6,7,8,9], "2")`, () => {
  const res = filterMultiplesOf([1,2,3,4,5,6,7,8,9], "2");
  expect(res).toBe(null);
});

test(`filterMultiplesOf([1,2,3,4,5,6,7,8,9,""], 2)`, () => {
  const res = filterMultiplesOf([1,2,3,4,5,6,7,8,9,""], 2);
  expect(res).toBe(null);
});

test(`filterMultiplesOf(10,20,30,10)`, () => {
  expect(filterMultiplesOf(10,20,30,10)).toBe(null);
});

test(`filterMultiplesOf("10","20","30",10)`, () => {
  expect(filterMultiplesOf("10","20","30",10)).toBe(null);
});