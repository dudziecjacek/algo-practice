export function canJump(nums) {
  let reach = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > reach) return false; // can't even stand here
    if (i + nums[i] > reach) reach = i + nums[i];
  }

  return true;
}
