/**
 * 
 * 977. 有序数组的平方
 */
// 新建一个数组用于存放我们比对好的数组
let newArr = new Array(nums.length);
// 这个指向数组最左边的指针
let front = 0;
// 这个指向数组最后边的指针
let last = nums.length - 1;
// 其实就是用于排序，将大的直接放在最后面
let k = newArr.length - 1;
// 这里的主要逻辑是两个指针从左右两端开始扫描，大的直接追加到数组最后面
while(front <= last) {
    // 从左边开始扫描
    if((nums[front] * nums[front]) >= (nums[last] * nums[last])) {
        newArr[k--] = nums[front] * nums[front];
        front++;
    }else if((nums[last] * nums[last]) > (nums[front] * nums[front])) {
        // 从右边开始扫描
        newArr[k--] = nums[last] * nums[last];
        last--;
    }
}

// 娱乐解法
var sortedSquares = function(nums) {
    // 这里就是使用数组的api进行操作，但是执行效率堪忧
    return nums.map(item => item * item).sort((a, b) => a - b)
};