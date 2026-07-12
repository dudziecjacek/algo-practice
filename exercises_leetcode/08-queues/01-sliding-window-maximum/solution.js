export function maxSlidingWindow(nums, k) {
  const result = [];
  const deque = []; // indices, values strictly decreasing front -> back
  let head = 0; // read pointer into deque (avoids O(n) shift)

  for (let i = 0; i < nums.length; i++) {
    // drop the front index if it left the window
    if (head < deque.length && deque[head] <= i - k) head++;
    // drop smaller values from the back
    while (head < deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }
    deque.push(i);
    if (i >= k - 1) result.push(nums[deque[head]]);
  }

  return result;
}
