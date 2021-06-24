/**
 * 岛屿问题

    给定一个由 '1'（陆地）和 '0'（水）组成的的二维网格，计算岛屿的数量。一个岛被水包围，并且它是通过水平方向或垂直方向上相邻的陆地连接而成的。你可以假设网格的四个边均被水包围。

    示例 1:

    输入:
    11110
    11010
    11000
    00000

    输出: 1
    示例 2:

    输入:
    11000
    11000
    00100
    00011

    输出: 3
 */
/**
 * 很经典的 dfs 问题，很棒很棒的思路，当找到一个点为1的时候，先记录数量加一。

    然后对于每个点递归的去遍历自己和上下左右的节点，如果值为1就置为0再继续遍历上下左右，这样直到遇到某一边本身就为0的时候停止。

    这样，一片 “值为1的岛屿” 就全部归零了。
 */

var numIslands = function(grid) {
    if(!grid.length){
        return grid;
    }
    let sumLands = {value: 0};
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[0].length; j++){
            if(grid[i][j] === "1"){
                dfs(grid, i, j);
                sumLands.value++;
            }
        }
    }
    return sumLands.value;
};

function dfs(grid, i, j){
    if(i<0 || j<0 || i>=grid.length || j>=grid[0].length || grid[i][j]==="0"){
        return;
    }
    grid[i][j] = "0";
    dfs(grid, i-1, j);
    dfs(grid, i+1, j);
    dfs(grid, i, j-1);
    dfs(grid, i, j+1);
    return;
}
console.log(
    numIslands([
        ["1","1","1","1","0"],
        ["1","1","0","1","0"],
        ["1","1","0","0","0"],
        ["0","0","0","0","0"]
      ])
);
