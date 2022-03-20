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
        return true;
    }
    // 获取对应位置的元素
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
    // 返回元素在列表中的索引，不存在返回-1
    indexOf(element) {
        let current = this.head;
        let index = 0;
        while(current) {
            if(current.data === element) {
                return index;
            }
            index++;
            current = current.next;
        }
        return -1;
    }
    // 修改某个位置的元素
    update(position, element) {
        // 判断越界
        if(position < 0 || position > this.length) {
            return null;
        }
        let current = this.head;
        let index = 0;
        while(index++ < position) {
            current = current.next;
        }
        current.data = element;
    }
    // 从列表的特定位置移除一项
    removeAt(position) {
        if(position < 0 || position >= this.length) {
            return null;
        }
        let current = this.head;
        let index = 0;
        // 如果删除的是头节点
        if(position === 0) {
            this.head = current.next;
        }else {
            let pre = null;
            while(index++ < position) {
                pre = current;
                current = current.next;
            }
            pre.next = current.next;
        }
        this.length--;
        return current.data;
    }
    // 从列表中移除一项
    remove(index) {
        let element = this.indexOf(index);
        if(element !== -1) {
            return this.removeAt(element);
        }
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