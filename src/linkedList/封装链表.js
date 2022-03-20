// 封装节点类
// export class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
// }
  
  // 单向链表结构的封装
//   export class LinkedList {
  
//     constructor() {
//       // 初始链表长度为 0
//       this.length = 0;
  
//       // 初始 head 为 null，head 指向链表的第一个节点
//       this.head = null;
//     }
  
//     // ------------ 链表的常见操作 ------------ //
  
//     // append(data) 往链表尾部追加数据
//     append(data) {
//       // 1、创建新节点
//       const newNode = new Node(data);
  
//       // 2、追加新节点
//       if (this.length === 0) {
//         // 链表长度为 0 时，即只有 head 的时候
//         this.head = newNode;
//       } else {
//         // 链表长度大于 0 时，在最后面添加新节点
//         let currentNode = this.head;
  
//         // 当 currentNode.next 不为空时，
//         // 循序依次找最后一个节点，即节点的 next 为 null 时
//         while (currentNode.next !== null) {
//           currentNode = currentNode.next;
//         }
  
//         // 最后一个节点的 next 指向新节点
//         currentNode.next = newNode;
//       }
  
//       // 3、追加完新节点后，链表长度 + 1
//       this.length++;
//     }
  
//     // insert(position, data) 在指定位置（position）插入节点
//     insert(position, data) {
//       // position 新插入节点的位置
//       // position = 0 表示新插入后是第一个节点
//       // position = 1 表示新插入后是第二个节点，以此类推
  
//       // 1、对 position 进行越界判断，不能小于 0 或大于链表长度
//       if (position < 0 || position > this.length) return false;
  
//       // 2、创建新节点
//       const newNode = new Node(data);
  
//       // 3、插入节点
//       if (position === 0) {
//         // position = 0 的情况
//         // 让新节点的 next 指向 原来的第一个节点，即 head
//         newNode.next = this.head;
  
//         // head 赋值为 newNode
//         this.head = newNode;
//       } else {
//         // 0 < position <= length 的情况
  
//         // 初始化一些变量
//         let currentNode = this.head; // 当前节点初始化为 head
//         let previousNode = null; // head 的 上一节点为 null
//         let index = 0; // head 的 index 为 0
  
//         // 在 0 ~ position 之间遍历，不断地更新 currentNode 和 previousNode
//         // 直到找到要插入的位置
//         while (index++ < position) {
//           previousNode = currentNode;
//           currentNode = currentNode.next;
//         }
  
//         // 在当前节点和当前节点的上一节点之间插入新节点，即它们的改变指向
//         newNode.next = currentNode;
//         previousNode.next = newNode;
//       }
  
//       // 更新链表长度
//       this.length++;
//       return newNode;
//     }
  
//     // getData(position) 获取指定位置的 data

  
//     // toString() 链表数据以字符串形式返回
//     toString() {
//       let currentNode = this.head;
//       let result = '';
  
//       // 遍历所有的节点，拼接为字符串，直到节点为 null
//       while (currentNode) {
//         result += currentNode.data + ' ';
//         currentNode = currentNode.next;
//       }
  
//       return result;
//     }
//   }
  
export class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }
    append(element) {
        // 尾部插入一个元素
        // 需要插入的节点
        let newNode = new Node(element);
        if(this.length === 0) {
            this.head = newNode;
        }else {
            let current = this.head;
            // 遍历链表，当前扫描的节点next指针指向null的话，就代表他是链表后面的最后一个节点
            // 接着我们的节点直接插入就可以了
            while(current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        // 插入完,链表长度要加1
        this.length++;
    }
    // 在指定位置插入指定元素
    insert(position, data) {
        // 判断越界
        if(position < 0 || position > this.length) {
            return false;
        }
        let insertNode = new Node(data);
        if(position === 0) {
            insertNode.next = this.head;
            this.head = insertNode;
        }else {
            let current = this.head;
            let pre = null;
            let index = 0;
            while(index++ < position) {
                pre = current;
                current = current.next;
            }

            insertNode.next = current;
            pre.next = insertNode;
        }
        this.length++;
        return insertNode;
    }
    get(position) {
        // 越界情况
        if(position < 0 || position >= this.length) return null;
        
        let current = this.head;
        let index = 0;
        
        while(index++ < position) {
            current = current.next;            
        }

        return current.data;
    }
    toString() {
      let currentNode = this.head;
      let result = '';
  
      // 遍历所有的节点，拼接为字符串，直到节点为 null
      while (currentNode) {
        result += currentNode.data + ' ';
        currentNode = currentNode.next;
      }
  
      return result;
    }
}