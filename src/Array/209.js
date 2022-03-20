var minSubArrayLen = function(target, nums) {
    let arr = [];
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        if((nums[left] + nums[right]) >= target) {
            arr.push(nums[left]);
            arr.push(nums[right]);
        }
        left++;
        right--;
    }
    return arr.length;
};

let target = 7;
let nums = [2,3,1,2,4,3];
let index = minSubArrayLen(target, nums);
console.log(index);