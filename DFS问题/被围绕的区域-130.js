// 题目：
// 给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' ，找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。

// 思路：遍历四个边界上的节点，遇到 O 的边界点才开始蔓延遍历，并且把遍历到的节点都标记为 M（防止重复遍历），最后再一次性遍历整个二维数组，遇到 M 的标记都转为 O（因为是从边界蔓延的，一定是不符合 X 的条件的）。

var solve = function(board) {
  let m = board.length;
  for(let i=0; i<m; i++){
      let n = board[i].length;
      for(let j=0; j<n; j++){
          if(board[i][j] === 'O' && (i==0 || i==m-1 || j==0 || j== n-1)){
              dfs(board, i, j)
          }
      }
  }

  for(let i=0; i<m; i++){
      for(let j=0; j<board[i].length; j++){
          if(board[i][j] === 'W'){
              board[i][j] = 'O';
          }else{
              board[i][j] = 'X';
          }
      }
  }

  return board;
};

function dfs(board, i, j){
  if(board[i][j] == 'X' || board[i][j] == 'W' || i<0 || i>board.length-1 || j<0 || j>board[i].length-1){
      return;
  }
  board[i][j] = 'W';
  dfs(board, i-1, j);
  dfs(board, i+1, j);
  dfs(board, i, j+1);
  dfs(board, i, j-1);
  return;
}

console.log(
  solve([
    ["X", "X", "X", "X"],
    ["X", "O", "O", "X"],
    ["X", "X", "O", "X"],
    ["X", "O", "X", "X"],
  ])
);
