## leetcode刷题思路记录

### 第一题：

**给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。**

**你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。**

示例：

​	给定 nums = [2, 7, 11, 15], target = 9

​	因为 nums[0] + nums[1] = 2 + 7 = 9
​	所以返回 [0, 1]



**使用语言：**javascript

**解题思路：**

第一种：

​	看到这个题的第一反应就是暴力解题，利用循环嵌套来进行解题。

​	循环遍历数组中的每一个数，让其与它之后的数进行循环相加，判断是否等于目标值，等于则输出即可。

提交代码：

```javascript
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j] === target){
              return [i,j];  
            }
        }
    }
};
```

执行用时：144ms；内存消耗：38.6MB

时间复杂度：O(N^2)，其中N是数组中的元素数量

空间复杂度：O(1)



第二种：

​	哈希表方法。

​	显而易见，第一种方法在寻找target-nums[i]的时候耗时过久，用了O(n)，可以利用哈希表的方式，减少寻找target-nums[i]的耗时，将耗时从O(n)减少至O(1)。

​	创建一个哈希表，对于每一个nums[i]，从哈希表中去寻找与其对应的target-nums[i]，若不存在，则将自己插入到哈希表中，继续寻找；若存在，则返回这两个值所对应的索引值。

提交代码：

```javascript
var twoSum = function(nums, target) {
    let numsHash = {};
    for(let i=0;i<nums.length;i++){
        const numsNow = nums[i];
        const numsTarget = target - numsNow;
        const numsTargetIndex = numsHash[numsTarget];
        if(numsTargetIndex === undefined){
            numsHash[numsNow] = i;
        }else{
            return [numsTargetIndex,i];
        }
    }
};
```

执行用时：84ms；内存消耗：39.2MB

时间复杂度：O(n)，n是数组中元素的数量

空间复杂度：O(n)，n是数组中元素的数量。主要为哈希表的开销。