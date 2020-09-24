/**
 * Потрібно реалізувати функцію maxInArray, яка буде приймати список чисел (number) і повертати найбільше число.
 * Пошук відбувається серед чисел списку, який передається першим аргументом. Якщо цей аргумент не є списоком чисел, то поверати null
 */
function maxInArray(arr) {
  let max = null
  if (Array.isArray(arr) && arr.length > 0) {
  max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] != "number") {
          return null;
        }
        if (arr[i] > max) {
          max = arr[i];
        }
    }
  }
  return max
}

module.exports = {maxInArray}