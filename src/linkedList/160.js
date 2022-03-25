/**
 * 
 * @param {ListNode} headA 
 * @param {ListNode} headB 
 * @returns ListNode
 * 
 * 
 * 这个是leetcode160题相交链表，这道题困扰了很久，最后还是看着题解找到了思路做出来了。。。现在总结一下
 * 测试函数会传入两个链表，然后编写程序去判断两条链表相交的部分
 * 这里我一直卡住的是想到去遍历链表，遍历到相同的值就返回，但是要知道链表有可能一长一短
 * 按照我之前的思路会一直卡住
 * 有一种思路，我们一开始应该都会想到使用两个不同的指针指向A, B两条链表
 * 如果我们两个指针遍历自己的链表没有找到相交点的话，我们就让指针换位置，指向另外一条链表，在重新遍历
 * 如果是一长一短的情况，我们两个指针就会形成快慢指针，最后会相遇，这样就解决了
 */

var getIntersectionNode = function(headA, headB) {
    let p1 = headA;
    let p2 = headB;
    while(p1 !== p2) {
        if(p1 === null) {
            p1 = headB;
        }else {
            p1 = p1.next;
        }

        if(p2 === null) {
            p2 = headA;
        }else {
            p2 = p2.next;
        }
    }
    return p1
};