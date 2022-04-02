/**
 * 
 * @param {*} s 
 * @param {*} t 
 * @returns 
 * 输入: s = "anagram", t = "nagaram"
   输出: true
   输入: s = "rat", t = "car"
   输出: false
 * 
 * 这道题求的是两个字符串的异同之处，用了一个比较巧妙地方法就是，声明一个length为26的数组
 * 先检查s的字符串，把s字符串中出现的元素在26个数组中+1(初始化都是为0),然后t字符串是做-1的操作，如果所有元素还是都为0，那么我们就
 * 认为两个字符串是异同字符串
 */
var isAnagram = function(s, t) {
    let res = new Array(26).fill(0);
    let base = 'a'.charCodeAt();
    for(let i = 0; i < s.length; i++) {
        res[s[i].charCodeAt() - base]++;
    }
    for(let j = 0; j < t.length; j++) {
        res[t[j].charCodeAt() - base]--;
    }
    const isZero = (current) => current == 0;
    return res.every(isZero);
};