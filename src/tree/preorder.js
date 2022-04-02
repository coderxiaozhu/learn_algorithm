const { bt } = require("./bt");

/**
 * 先序遍历的口诀，先访问根节点，在访问左子树，在访问右子树
 * 根 -> 左 -> 右的顺序
 * @param {*} root 
 * @returns 
 */

const preorder = (root) => {
    if(!root) { return; }
    console.log(root.val);
    preorder(root.left);
    preorder(root.right);
}

preorder(bt);