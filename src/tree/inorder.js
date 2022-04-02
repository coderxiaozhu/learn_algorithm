const { bt } = require('./bt');

/**
 * 中序遍历的口诀，先访问左子树，在访问根节点，最后访问右子树
 * 左 -> 根 -> 右
 */

const inorder = (root) => {
    if(!root) { return; }
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
}

inorder(bt);