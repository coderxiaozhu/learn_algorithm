class QueueElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PriorityQueue extends QueueElement {
    constructor() {
        super();
        this.priorityQueue = [];
    }
    // 入队
    enqueue(element, priority) {
        const queueElement = new QueueElement(element, priority);
        // 先判断队列是否为空
        if(this.priorityQueue.length === 0) {
            this.priorityQueue.push(queueElement);
        }else {
            let add = false;
            for(let i = 0; i < this.priorityQueue.length; i++) {
                if(queueElement.priority < this.priorityQueue[i].priority) {
                    this.priorityQueue.splice(i, 0, queueElement);
                    add = true;
                    break;
                }
            }
            if(!add) {
                this.priorityQueue.push(queueElement);
            }        
        }
    }
    // 出队
    dequeue() {
        return this.priorityQueue.shift();
    }
    // 查看队头元素
    front() {
        return this.priorityQueue[0];
    }
    // 查看队列是否为空
    isEmpty() {
        return this.priorityQueue.length === 0;
    }
    // 查看队列长度
    size() {
        return this.priorityQueue.length;
    }
    // toString
    toString() {
        let resultString = '';
        for(let i = 0; i < this.priorityQueue.length; i++) {
            resultString += this.priorityQueue[i].element + '-' + this.priorityQueue[i].priority + ' '
        };
        return resultString;
    }
}

// 新建队列
let priorityQueue = new PriorityQueue();
priorityQueue.enqueue('abc', 100);
priorityQueue.enqueue('cba', 91);
priorityQueue.enqueue('nba', 120);
const res = priorityQueue.toString();
console.log(res);