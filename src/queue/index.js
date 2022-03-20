// 封装队列结构
class Queue {
    constructor() {
        this.Queue = [];
    }
    // 入队操作
    enQueue(element) {
        this.Queue.push(element);
    }
    // 删除队列前端的元素
    deQueue() {
        return this.Queue.shift();
    }
    // 查看队列的队头元素
    front() {
        return this.Queue[0];
    }
    // 查看队列是否为空
    isEmpty() {
        return this.Queue.length === 0;
    }
    // 查看队列的元素个数
    size() {
        return this.Queue.length;
    }
    // toString方法
    toString() {
        let resultString = '';
        for(let i = 0; i < this.Queue.length; i++) {
            resultString = resultString + this.Queue[i] + ' ';
        }
        return resultString;
    }
}

// 击鼓传花题目实现
// 数数字，从1-n来数，数到n的元素将出队，没数到N的元素加入到队尾当中，将最后一个元素输出并输出他在队列中的位置
function passNum(nameList, num) {
    let queue = new Queue();

    // 将所有元素都入队
    for(let i = 0; i < nameList.length; i++) {
        queue.enQueue(nameList[i]);
    }

    // 开始数数
    while(queue.size() > 1) {
        for(let j = 0; j < num - 1; j++) {
            queue.enQueue(queue.deQueue())
        }
        // 数到数字，刚好到队头的第一个元素
        queue.deQueue();
    }
    
    // 输出元素
    let element = queue.front();
    console.log("元素是: " + element);
    // 找出他原来的位置
    console.log("元素所在位置" + nameList.indexOf(element));
}

let names = ['John','Jack','Camila','Ingrid','Carl'];

passNum(names, 3);