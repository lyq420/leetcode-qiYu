## 数组类型题目：leetcode 57 螺旋矩阵II

题目描述：给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵。
示例：
	输入：n = 3
	输出：[[1,2,3],[8,9,4],[7,6,5]]

#### 思路：

	模拟顺时针画矩阵的过程：
	
	上行 从左至右 ——>  右列 从上至下 ——> 下行 从右至左 ——> 左列 从下至上
	
	坚持循环不变量原则。代码中是使用左闭右开。

#### 具体代码：

```javascript
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    //定义并初始化二维数组
    let arr = new Array();
    for (let i = 0; i < n; i++) {
        arr[i] = new Array();
        for (let j = 0; j < n; j++) {
            arr[i][j] = "";
        }
    }
    let loop = n>>1;    //需要循环的圈数
    let starX = 0;    //每一圈循环的起始点
    let starY = 0; 
    let num = 1;  //每个空要填充的值
    let mid = n>>1;   //矩阵中心
    let i;
    let j;
    while (loop--) {
        i = starX;
        j = starY;
        // 从左至右   左闭右开
        for (j = starY; j < n-1-starY; j++ ) {
            arr[i][j] = num++;
        } 
        // 从上至下   左闭右开
        for (i = starX; i < n-1-starX; i++) {
            arr[i][j] = num++;
        }
        // 从右至左   左闭右开
        for (; j > starX; j--) {
            arr[i][j] = num++;
        }
        //从下至上    左闭右开
        for (; i > starY; i--) {
            arr[i][j] = num++;
        }

        starX++;
        starY++;

    }
    if (n%2) {
        arr[mid][mid] = n*n;   //当n是奇数的时候，填充矩阵最中心
    }
    return arr;
};
```



#### 总结：

	这道题并没有什么算法或者技巧，但是在面试中出现频率较高，主要考察对代码的掌控能力。
	
	注意循环不变量原则，这样才能在写代码时不乱。



#### js中定义二维数组的方法

js中本身只支持一维数组，不支持二维，所以我们在使用二维数组时就不像其他语言那样简便。

方法一：直接定义并初始化，在数组数据已知并且数据量少的情况下使用。

```javascript
	let arr = [["0-1","0-2"],["1-1","1-2"],["2-1","2-2"]]
```



方法二：用一维数组套一维数组的方法，适用于不知道数组数据的情况下。

```javascript
//定义并初始化二维数组
    let arr = new Array();   //创建一维数组
    for (let i = 0; i < n; i++) {
        arr[i] = new Array();    //上面创建数组中的每个元素都是一个数组
        for (let j = 0; j < n; j++) {
            arr[i][j] = "";   //将二维数组中的元素进行初始化
        }
    }
```



方法三：将多个一维数组进行组合，适用于已知几个数组，需要将其整合成一个二维数组的情况

```javascript
	let arr = new Array(); 
	for (let i = 0; i < n; i++) {
		arr[i] = [arr1[i], arr2[i], arr3[i]]
	}
```