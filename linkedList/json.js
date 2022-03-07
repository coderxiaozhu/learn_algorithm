// 使用链表指针获取JSON的节点值
let json = {
    a: {
        b: {
            c: 1
        }
    },
    d: {
        e: 2
    }
}

let path = ['a', 'b', 'c'];

let p = json;
console.log(p);

path.forEach(key => {
    // 这里的操作其实就等于json[a], json[b]... 
    p = p[key]
})
