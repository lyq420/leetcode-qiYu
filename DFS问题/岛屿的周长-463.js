/* 题目：
给定一个 row x col 的二维网格地图 grid ，其中：grid[i][j] = 1 表示陆地， grid[i][j] = 0 表示水域。
网格中的格子 水平和垂直 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。
岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */

// 我的题解
// 注：当写成let perimeter = { value: 0 };就可以实现周长增加，但是写成let perimeter=0时就不能实现，原因还不太清楚！！弄清楚原因
var islandPerimeter = function(grid) {
  let perimeter = { value: 0 };
  for(let i=0; i<grid.length; i++){
      for(let j=0; j<grid[i].length; j++){
          if(grid[i][j] === 1){
              dfs(grid, i, j, perimeter);
              break;
          }
      }
  }
  return perimeter.value;
};

function dfs(grid, i, j, perimeter){  
  if(i<0 || j<0  || i>=grid.length || j>=grid[0].length || grid[i][j]=='0'){
      perimeter.value++;
      return;
  }
  if(grid[i][j] == 3){
    return;
  }
  grid[i][j] = 3;
  dfs(grid, i-1, j, perimeter);
  dfs(grid, i+1, j, perimeter);
  dfs(grid, i, j-1, perimeter);
  dfs(grid, i, j+1, perimeter);
  return;
}

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ])
);
