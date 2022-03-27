var twoSum = function(nums, target) {
    /**
     * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
     * 使用map是因为数组同一个元素不能再答案重复出现，而且map也可以保存索引，但是set是不能做到这个的
     */
    let map = new Map();
    for(let i = 0; i < nums.length; i++) {
        let first = nums[i];
        // 这里用目标值减去我们当前的值来算出我们需要配对的两个元素是什么
        let second = target - first;
        if(map.has(second)) {
            return [map.get(second), i];
        }else {
            // 值为key, 索引为value主要是为了方便获取元素的时候拿到对应索引
            map.set(first, i);
        }
    }
};