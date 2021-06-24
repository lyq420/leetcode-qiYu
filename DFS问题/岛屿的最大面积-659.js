// 题目：
/* 给定一个包含了一些 0 和 1 的非空二维数组 grid 。
一个 岛屿 是由一些相邻的 1 (代表土地) 构成的组合，这里的「相邻」要求两个 1 必须在水平或者竖直方向上相邻。你可以假设 grid 的四个边缘都被 0（代表水）包围着。
找到给定的二维数组中最大的岛屿面积。(如果没有岛屿，则返回面积为 0 。) */

/**
 * @param {number[][]} grid
 * @return {number}
 */

var maxAreaOfIsland = function(grid) {
  if(!grid.length){
    return grid;
  }
  let areaArr = [];
  for(let i=0; i<grid.length; i++){
      for(let j=0; j<grid[i].length; j++){
          if(grid[i][j] === 1){
              let area = {value: 0};
              dfs(grid, i, j, areaArr, area);
          }
      }
  }
  return Math.max(...areaArr);
};

function dfs(grid, i, j, areaArr, area){
  if(i<0 || j<0 || i>=grid.length || j>=grid[0].length || grid[i][j]===0 || grid[i][j]===2){
    return;
  }
  grid[i][j] = 2;
  area.value++;
  dfs(grid, i-1, j, areaArr, area);
  dfs(grid, i+1, j, areaArr, area);
  dfs(grid, i, j-1, areaArr, area);
  dfs(grid, i, j+1, areaArr, area);
  areaArr.push(area.value);
  return;
}

console.log(
  maxAreaOfIsland([
    [0,0,1,0,0,0,0,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,1,1,0,1,0,0,0,0,0,0,0,0],
    [0,1,0,0,1,1,0,0,1,0,1,0,0],
    [0,1,0,0,1,1,0,0,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0,0],
    [0,0,0,0,0,0,0,1,1,0,0,0,0]
  ])
);