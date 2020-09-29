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

}


/**
 * Filter array `xs` and return only elements which has type `type`
 * @arg {array} xs
 * @arg {string} type
 * @return {array}
 */
const takeOf = (xs, type) => {

}

/**
 * Filter array of numbers `xs` and return array without numbers which multiples `x`
 * @arg {array} xs
 * @arg {number} x
 * @return {array}
 */
const filterMultiplesOf = (xs, x) => {

}

module.exports = {filter, isArrayOf, takeOf, filterMultiplesOf}