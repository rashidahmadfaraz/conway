const gridSize = 5;   // declare the size of the grid
// make the grid
let grid = [];       
for (let i = 0; i < gridSize; i++) {
  grid[i] = [];
  for (let j = 0; j < gridSize; j++) {
    grid[i][j] = null;
  }
}   // print out grid
console.log(grid)