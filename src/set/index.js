/**
 * 集合的简单练习
 */
let arr = [1, 1, 2, 2, 4, 3];
let set = new Set([...arr]);

// 集合是否存在此元素用has方法
console.log(set.has(3)); // true
console.log(set.has(5)); // false

// 求交集
let set2 = new Set([2, 3]);
let set3 = [...set].filter(item => set2.has(item));
console.log(set3);