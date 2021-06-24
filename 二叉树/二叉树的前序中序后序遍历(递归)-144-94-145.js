/* 
    给定一个二叉树的根节点 root ，返回它的 前序、中序、后序 遍历。

    在leetcode中的题号是144、94、145
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(!root){
        return [];
    }

    let numNode = [];
    getNode(root, numNode);
    return numNode;
    
};

function getNode(node, numNode){
    if(node == null){
        return;
    }
    // 前序
    numNode.push(node.val);
    getNode(node.left, numNode);
    getNode(node.right, numNode);
    // 中序
    getNode(node.left, numNode);
    numNode.push(node.val);
    getNode(node.right, numNode);
    // 后序
    getNode(node.left, numNode);
    getNode(node.right, numNode);
    numNode.push(node.val);
}

function TreeNode(val, left, right){
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

let root = new TreeNode(1);
//root.left = new TreeNode(null);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

console.log(
    inorderTraversal(root)
)