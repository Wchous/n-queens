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
window.findNRooksSolution = function(n, startR = 0, startC = 0) {
  
  var board = new Board({'n': n});
  var piecesPlaced = 0;

  board.togglePiece(startR, startC);
  piecesPlaced++;

  

  while (piecesPlaced < n) {
    for (var rows = 0; rows < n; rows++) {
      for (var cols = 0; cols < n; cols++) {
        if (board.rows()[rows][cols] !== 1) {
          board.togglePiece(rows, cols)
          piecesPlaced++;  
          if (board.hasAnyRooksConflicts()) {
            board.togglePiece(rows, cols);
            piecesPlaced--;
          }
        }
      }
    } 
    if (rows === n && cols === n) {
      break;
    }
  }
  
  return board.rows();

// if pieces placed === n, then return solution
// loop for rows
//   loop for cols
//     if no conflicts
//       place piece
// if nested loops finished without placing a piece, then no solution found, return empty board
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  console.log(`__________ begin countNRooksSolutions for ${n}`);
  var solutionCount = 0;
  
  // Checks for a valid solution by counting pieces
  var isValid = function(n,solutionMatrix){  var numberOfPieces = 0
    for (var i = 0; i < n; i++){
      for(var j = 0; j < n; j++){
        if(solutionMatrix[i][j] === 1){
          numberOfPieces = numberOfPieces+1

        }
      }
    }    

  if(numberOfPieces === n){
    console.log(`*** This was counted as a solution`);
      return true
    }else{
      return false
    }
  }
  
  var storedSolutions = []

  var Tree = function(value) {
    var newTree = {};
    newTree.value = value;
    newTree.children = []; 
    _.extend(newTree,treeMethods)

    return newTree;
  };

    var treeMethods = {};

    treeMethods.addChild = function(value) {
      var newNode = Tree(value);
      this.children.push(newNode);
    };

  var treeBoard = Tree(null)

  var makeBoard = function(n, treeVal){
    var depth = 0
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        if (depth >= n){
          return
        }
        depth++ 
        console.log(depth + 'is our depth')
        if(treeVal === null){
          console.log(treeVal + 'is our treeval')
          treeBoard.addChild(new Board ({'n':n}))
          treeBoard.children[treeBoard.children.length-1].value.togglePiece(row,col)
      //   }else{
      //     debugger
      //     if (treeBoard.value.rows()[row][col] !== 1) {
      //       treeBoard.addChild(treeVal)
      //       treeBoard.children.forEach(function(elem){
      //         elem.value.togglePiece(row,col)
      //     })
      //   }
      // }
    }
    makeBoard(n, treeBoard.value)
  }
}
makeBoard(n)

  

  // Find solutions from top left to bottom right
  //     var solutionMatrix = findNRooksSolution(n,row,col)
  //     if (isValid(n,solutionMatrix)){
  //       solutionCount++
  //       return 
  //     }
  //   }
  //}
  
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
