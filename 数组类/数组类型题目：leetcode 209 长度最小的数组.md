## 数组类型题目：leetcode 209 长度最小的数组

题目描述：

给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。

示例：
输入：s = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。



#### 方法一：暴力解题

```javascript
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let result = 2147483647;
    for (let i = 0; i <= nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum >= target) {
                subLength = j-i+1;
                result = result<subLength ? result:subLength;
                break;
            }
        }
    }

    return result = result === 2147483647 ? 0 : result;
};
```

时间复杂度：O(n^2^)            空间复杂度：O(1)



#### 方法二：滑动窗口

滑动窗口：就是不断的调节子序列的起始位置和终止位置，从而得出我们想要的结果。

```javascript
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let result = 2147483647;
    let start = 0;  //窗口起始位置
    let sum = 0;   //滑动窗口内的元素和
    for (let end = 0; end < nums.length; end++) {   //end表示窗口终止位置
        sum += nums[end];
        while (sum >= target) {
            //获取满足条件的滑动窗口的长度
            let subLength = end - start + 1;
            //更新数组中满足其和 ≥ s 的长度最小的连续子数组的长度值
            result = result < subLength ? result : subLength; 
            //变更滑动窗口的起始位置，体现了滑动窗口的精髓。
            sum -= nums[start++];  
        }
    }

    return result === 2147483647 ? 0 : result;
    
};
```

时间复杂度：O(n)          空间复杂度：O(1)

在本题中，使用滑动窗口的三个关键的问题是：

1、窗口内是什么？或者说希望窗口内的数据是什么？

​	希望窗口内是满足其和>=s的长度最小的连续的子数组

2、窗口的起始位置如何确定，如何移动？

​	当窗口内元素的值大于s了，窗口就要向前移动了。

3、窗口的终止位置如何确定，如何移动？

​	窗口的结束位置就是遍历数组的指针。



**滑动窗口的精髓就是根据当前子序列和大小的情况，不断调节子序列的起始位置，从而将O(n^2^)降为O(n)。**




