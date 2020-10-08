/**
 * Filter xs by using `predicate` and return new array
 * which contains only elements for which pred(el) == true
 * @param {Array} xs
 * @param {Function} pred
 */
function filter(xs, pred) {
  let result = [];
  for(let i=0;i<xs.length;i++) {
    if (pred(xs[i])) {
      result.push(xs[i]);
    }
  }
  return result;
}

/**
 * Test if `xs` is array of elements each of them is type of `type`
 * @arg {array} xs
 * @arg {string} type
 * @return {boolean}
 */
const isArrayOf = (xs, type) => {
  if(Array.isArray(xs)){
    for(let i=0;i<xs.length;i++) {
      if (typeof xs[i] != type) {
        return false;
      }
    }
    return true;
  }
  return false
}


function hasType(y, type) {
  return (typeof y === type);
}
/**
 * Filter array `xs` and return only elements which has type `type`
 * @arg {array} xs
 * @arg {string} type
 * @return {array}
 */
const takeOf = (xs, type) => {
  return filter(xs, (y) => hasType(y, type))
}

function isntMultiplesOf(x){
  function f(y){
    return y % x
  }
  return f
}
/**
 * Filter array of numbers `xs` and return array without numbers which multiples `x`
 * @agr {array} xs
 * @arg {number} x
 * @return {array}
 */
const filterMultiplesOf = (xs, x) => {
  let result = null
  if(isArrayOf(xs, "number") && typeof x === "number"){
    result = xs.filter(isntMultiplesOf(x))
  }
  return result
}

module.exports = {filter, isArrayOf, takeOf, filterMultiplesOf}