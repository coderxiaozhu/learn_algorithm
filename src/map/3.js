var lengthOfLongestSubstring = function(s) {
    let l = 0;
    let map = new Map();
    // "abbcdea"特殊用例
    // 记录字串长度
    let res = 0;
    for(let r = 0; r < s.length; r++) {
        // map.get(s[r]) >= l，其实就是预防特殊用例，特殊用例其实会导致左边的指针往回走，所以要加上条件限制
        if(map.has(s[r]) && map.get(s[r]) >= l) {
            // 有重复的元素，让左指针移动到重复元素的下一位，建立滑动窗口
            l = map.get(s[r]) + 1;
        }
        // 这里记录有几个字串元素
        res = Math.max(res, r - l + 1);
        // 使用map做一次去重
        map.set(s[r], r);
    }
    return res;
};