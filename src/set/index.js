/**
 * 这里也对应leetcode的349题: 两个数组的交集
 */

let arr = [1, 2, 2, 3, 1];
let arr2 = [2, 7];

let set1 = new Set(arr);
let set2 = new Set(arr2);

let set3 = [...set1].filter(item => set2.has(item));
