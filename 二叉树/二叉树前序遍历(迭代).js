/* 
    利用迭法实现前序遍历
    思路：借助栈，先将根元素放入栈中，然后取出，依次将该根元素的右子树和左子树放入到栈中，
    先放右后方左的原因是这样出栈的时候顺序就是左右了，符合前序遍历的中左右的顺序。
*/

let inorderTraversal = function(root){
    if(!root) return [];
    let stack = [root];
    let result = [];
    while(stack.length>0){
        let node = stack.pop();
        result.push(node.val)
        if(node.right !== null){
            stack.push(node.right);
        }
        if(node.left !== null){
            stack.push(node.left);
        }
    }
    return result;
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
