/* 
    利用迭法实现中序遍历
*/

let inorderTraversal = function(root){
    if(!root) return [];
    let node = root;
    let stack = [];
    let result = [];
    while(node != null || stack.length>0){
        if(node != null){
            stack.push(node);
            node = node.left;
        }else{
            node = stack.pop();
            result.push(node.val);
            node = node.right;
        }
        
    }
    console.log(result);
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
