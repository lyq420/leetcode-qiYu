/* 
    这里有一个非负整数数组 arr，你最开始位于该数组的起始下标 start 处。当你位于下标 i 处时，你可以跳到 i + arr[i] 或者 i - arr[i]。

    请你判断自己是否能够跳到对应元素值为 0 的 任一 下标处。

    注意，不管是什么情况下，你都无法跳到数组之外。

    来源：力扣（LeetCode）
    链接：https://leetcode-cn.com/problems/jump-game-iii
    著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */

var canReach = function(arr, start) {
    if(!arr) return false;
    if(arr[start] === 0) return true;
    let queue = [start];
    let visited = [];
    while(queue.length){
        let index = queue[0];
        queue.shift();
        let val = arr[index];
        if(val === 0){
            return true;
        }
        let left = index - val;
        let right = index + val;
        if(left >= 0 && !visited[left]){
            queue.push(left);
        }
        if(right < arr.length && !visited[right]){
            queue.push(right);
        }
        visited[index] = true;
    }
    return false;
};

console.log(canReach([0,1], 1))