// 链表的基本操作
/*
    增删查
*/
import { LinkedList } from './封装链表'
let list = new LinkedList();
list.append(1);
list.append(2);
list.insert(1, 3)
list.append(4);
console.log(list.toString());
console.log(list.get(1));