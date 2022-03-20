var removeElements = function(head, val) {
    if(head == []) { return [] }
    let left = head;
    let right = null;
    while(left) {
        if(left !== null && left.val === val) {
            if(left === head) {
                // 如果是头结点的话
                left = left.next;
                head = left;
            }else {
                // 不是头结点的话
                right.next = left.next;
                left = left.next;
            }
        }else {
            right = left;
            left = left.next;
        }
    }
    return head;
};

let head = [1,2,6,3,4,5,6];
let val = 6;
let res = removeElements(head, val);
console.log(res);