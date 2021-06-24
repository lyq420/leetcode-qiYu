## 数组类型题目：leetcode 35 搜索插入位置

题目描述：

给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。

示例 1:

	输入: [1,3,5,6], 5
	输出: 2
示例 2:

	输入: [1,3,5,6], 2
	输出: 1
示例 3:

	输入: [1,3,5,6], 7
	输出: 4
示例 4:

	输入: [1,3,5,6], 0
	输出: 0


### 方法一：暴力解题

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
           return i; 
        }
    }
    return nums.length;
    
};
```

时间复杂度：O(n)          空间复杂度：O(1)



### 方法二：二分法

**二分法第一种写法：**target是在一个[left,right]左闭右闭的区间内

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
   let left = 0;
   let right = nums.length - 1;
   while (left <= right) {
       let middle = parseInt(left + ((right - left)/2));
       if (nums[middle] < target) {
           left = middle + 1;
       }else if (nums[middle] > target) {
           right = middle - 1;
       }else {
           return middle;
       }
   }

   return right + 1;
};
```

时间复杂度：O(logn)          空间复杂度：O(1)



**二分法第二种写法：**target是在一个[left,right)左闭右开的区间内

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
   let left = 0;
   let right = nums.length;
   while (left < right) {
       //let middle = parseInt(left + ((right - left)/2));
       let middle 
       if (nums[middle] < target) {
           left = middle + 1;
       }else if (nums[middle] > target) {
           right = middle;
       }else {
           return middle;
       }
   }

   return right;
};
```

时间复杂度：O(logn)         空间复杂度：O(1)



### 总结：

1、全面考虑情况——>将边界定义清晰——>确定查找区间

2、为什么二分法中使用 mid = left + (right-left)/2  而不使用mid = (left+right)/2 ？

答：为了防止栈溢出，假如定义的是int类型，left+right如果超过int所能表示的最大值，则会变为负数，从而导致计算错误。（注：但是javascript是弱类型语言，应该不存在这个问题呀，为什么也这么用呢）

3、为什么使用 mid = left + (right-left) >> 1 ？

答：（right-left） >> 1和  (right-left)/2效果一样，但是前者运行速度更快。

#### 补充知识点盲区：

**js移位运算符（<<、>>、>>>）：**

（1）<< 左移运算符

​	“<<”运算符执行左移位运算。在移位运算过程中，符号位始终保持不变。如果右侧空出位置，则自动填充为 0；超出 32 位的值，则自动丢弃。

例如：把数字5向左移动2位，返回值为20 ，其实相当于扩大了2的2次方倍。

（2）>>  有符号右移运算符

​	“>>”运算符执行有符号右移位运算。与左移运算操作相反，它把 32 位数字中的所有有效位整体右移，再使用符号位的值填充空位。移动过程中超出的值将被丢弃。

例如：把数字1000向右移8位，返回值为3，当为正数的时候，其实相当于缩小了2的8次方倍，只缩小后的整数。

```javascript
console.log(1000 >> 8);  //返回值3
```

![1615363669953](C:\Users\ya琪琦儿\AppData\Roaming\Typora\typora-user-images\1615363669953.png)

把数值 -1000 向右移 8 位，则返回值为 -4。

```javascript
console.log(-1000  >> 8);  //返回值 -4
```

![1615363723414](C:\Users\ya琪琦儿\AppData\Roaming\Typora\typora-user-images\1615363723414.png)

符号位值为 1 时，则有效位左侧的空位全部使用 1 进行填充。

（3）>>> 无符号右移运算符

“>>>”运算符执行无符号右移位运算。它把无符号的 32 位整数所有数位整体右移。对于无符号数或正数右移运算，无符号右移与有符号右移运算的结果是相同的。

```javascript
console.log(1000 >> 8);  //返回值3
console.log(1000 >> 8);  //返回值3
```

对于负数来说，无符号右移将使用 0 来填充所有的空位，同时会把负数作为正数来处理，所得结果会非常大，所以，使用无符号右移运算符时要特别小心，避免意外错误。

```javascript
console.log(-1000 >> 8);  //返回值 -4
console.log(-1000 >>> 8);  //返回值 16777212
```

![1615363899816](C:\Users\ya琪琦儿\AppData\Roaming\Typora\typora-user-images\1615363899816.png)

