## 数组类型题目：leetcode 27 移除元素

题目描述：

给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并**「原地」**修改输入数组。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

示例 1:
给定 nums = [3,2,2,3], val = 3,
函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。
你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。

示例 2:
给定 nums = [0,1,2,2,3,0,4,2], val = 2,
函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。

**「你不需要考虑数组中超出新长度后面的元素。」**



方法一：

```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i = i - 1;
            len = len - 1;
        }
    }
    return nums.length;
};
```

该方法其实就是暴力解题法，看似只有一个循环，但是里面的splice方法内部其实还有一个循环，所以该方法的时间复杂度为O(n2).



方法二：双指针法（快慢指针法）

```javascript
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let len = nums.length;
    let slow = 0;
    for (let fast = 0; fast < len; fast++) {
        if (nums[fast] != val) {
            nums[slow] = nums[fast];
            slow++;
        }
    }
    return slow;
}
```

时间复杂度：O(n)

双指针法直接将时间复杂度降了一个数量级了。

**注意：双指针法在很多考察数组和链表操作的题目中都需要使用，所以当看到关于操作数组和链表的题目中一定要考虑双指针法。**



#### **<u>双指针法！！！很是重要呀！</u>**

