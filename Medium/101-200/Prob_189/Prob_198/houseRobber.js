/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let a = 0,
    b = 0;

  for (i = 0; i < nums.length; i++) {
    if (i % 2 == 0) {
      a = Math.max(a + nums[i], b);
    } else {
      b = Math.max(b + nums[i], a);
    }
  }

  return Math.max(a, b);
};
