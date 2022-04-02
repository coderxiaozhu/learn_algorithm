let tree = {
    val: "a",
    children: [
        {
            val: "b",
            children: [
                {
                    val: "d",
                    children: []
                },
                {
                    val: "e",
                    children: []
                }
            ]
        },
        {
            val: "c",
            children: [
                {
                    val: "f",
                    children: []
                },
                {
                    val: "g",
                    children: []
                }
            ]
        }
    ]
}

// 广度优先遍历
const bfs = (root) => {
    let queue = [root];
    while(queue.length > 0) {
        // 队列不为空则一直执行入队和出队的操作
        const n = queue.shift();
        console.log(n.val);
        n.children.forEach(item => {
            queue.push(item);
        }) 
    }
}

bfs(tree);