/* 
    利用迭法实现后序遍历

    思路：后序遍历是左右中，前序遍历是中左右，迭代法中的前序遍历很容易得到中右左，即将左右子树入栈的顺序改变下就可以了，
        得到中右左，再将其进行反转即可得到左右中。
*/

let inorderTraversal = function(root){
    if(!root) return [];
    let stack = [root];
    let resultTra = [];
    while(stack.length>0){
        let node = stack.pop();
        resultTra.push(node.val)
        if(node.left !== null){
            stack.push(node.left);
        }
        if(node.right !== null){
            stack.push(node.right);
        }   
    }
    let result = resultTra.reverse();
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
