const { bt } = require("./bt");

/**
 * 后序遍历的口诀: 先访问左子树，在访问右子树，最后访问根节点
 * 左 -> 右 -> 根
 */
const postorder = (root) => {
    if(!root) { return; };
    postorder(root.left);
    postorder(root.right);
    console.log(root.val);
}

postorder(bt);