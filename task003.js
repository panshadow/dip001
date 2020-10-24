/**
 * Generate range as array of number from `from` to `to` with step `step`
 * @arg {number} from
 * @arg {number} to
 * @arg {number} [step=1]
 * @return {number[]}
 */
function range(from,to,step=1) {
  let result = [];
  const check_fwd = (x, y) => x < y;
  const check_bck = (x, y) => x > y;
  let check;
  if(from > to) {
    check = check_bck;
    step = Math.abs(step) * -1;
  } else {
    check = check_fwd;
    step = Math.abs(step);
  }
  for (let x = from; check(x, to); x += step) {
    result.push(x)
  }
  return result
}

module.exports = {range};