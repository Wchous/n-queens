/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n,startRow = 0,startCol = 0) {
  //var solution = undefined;
  var conflictingRows = [];
  var conflictingCols = [];
  var board = new Board({'n':n})

  for (let col = startCol; col < n; col++) {
    for (let row = startRow; row < n; row++) {
      if (!conflictingCols.includes(col) && !conflictingRows.includes(row)) {
        board.togglePiece(row, col);      
        conflictingCols.push(col);
        conflictingRows.push(row);  
      }
    }
  }

  solution = board.rows();

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var isValid = function(n,solutionMatrix) {
    
    var numberOfPieces = 0
    for (var i = 0; i < n; i++){
      for(var j = 0; j<n;j++){
        if(solutionMatrix[i][j] === 1){
          numberOfPieces = numberOfPieces+1
        }
      }
    }    

      if(numberOfPieces === n){
        return true
      }else{
        return false
      }
    }

  for (let col = 0; col < n; col++) {
    for (let row = 0; row < n; row++) {
      var solutionMatrix = findNRooksSolution(n,row,col)
      if (isValid(n,solutionMatrix)){
        solutionCount++
      }
    }
  }
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined;

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined;

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
