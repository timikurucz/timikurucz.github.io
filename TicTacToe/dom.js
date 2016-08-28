'use strict';

var domOperations = (function(){
  var gameboard;
  var user = 'X';
  var computer = 'O';

  var id = 1;
  var colNum = 0;
  var rowNum = 0;
  var gameCompleted = false;

  var board = document.querySelector('.board');
  var restartButton = document.querySelector('.restart');
  var wrapper = document.querySelector('.wrapper');
  var gameOver = document.querySelector('.game-over');
  var winner = document.querySelector('.winner');

  function createOneCell(cell, parent) {
    var cellDiv = document.createElement('div');
    if(cell === ''){
      cellDiv.classList.add('empty-cell');
    }
    else if (cell === 'X'){
      cellDiv.classList.add('user');
    }
    else if (cell === 'O'){
      cellDiv.classList.add('ai');
    }
    cellDiv.classList.add('cell');
    cellDiv.setAttribute('col-num', colNum);
    cellDiv.setAttribute('row-num', rowNum);
    cellDiv.setAttribute('id', id);
    colNum++;
    id++;
    parent.appendChild(cellDiv);
  }

  function createOneRow(row) {
    var cellRowDiv = document.createElement('div');
    cellRowDiv.classList.add('cell-row');
    row.forEach(function(cell){
      createOneCell(cell, cellRowDiv);
    });
    board.appendChild(cellRowDiv);
    rowNum++;
    colNum = 0;
  }

  function createGameboard() {
    gameboard.forEach(function(row){
      createOneRow(row);
    });
    checkWin(user);
    checkWin(computer);
    if(!gameCompleted) {
      board.addEventListener('click', userMove);
    }
  }

  function saveActualGameState() {
    var currentGameboard = JSON.stringify(gameboard);
    localStorage.setItem('gameState', currentGameboard);
  }

  function getCurrentGameboard() {
    var currentGameboard = localStorage.getItem('gameState');
    gameboard = JSON.parse(currentGameboard);
    if (!gameboard) {
      gameboard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
    }
  }

  function newGame() {
    window.localStorage.removeItem('gameState');
    location.reload();
  }
  function userMove(event) {
    if (event.target.classList.contains('empty-cell')) {
      updateCell(user, event.target);
      event.target.classList.add('user');
      event.target.classList.remove('empty-cell');
      checkWin(user);
      if (!gameCompleted) {
        setTimeout(function(){aiMove();}, 500);
      } else {
        board.removeEventListener('click', userMove);
      }
    }
  }

  function aiMove() {
    var emptyCells = document.querySelectorAll('.empty-cell');
    var randomNum = Math.floor(Math.random() * emptyCells.length);
    var item = emptyCells[randomNum];
    item.classList.add('ai');
    updateCell(computer, item);
    item.classList.remove('empty-cell');
    checkWin(computer);
  }

  function updateCell(letter, item) {
    var row = item.getAttribute('row-num');
    var col = item.getAttribute('col-num');
    gameboard[parseInt(row)][parseInt(col)] = letter;
    saveActualGameState();
  }

  function checkWin(letter) {
    if (gameboard[0][0] === letter && gameboard[1][1] === letter && gameboard[2][2] === letter ||
      gameboard[0][2] === letter && gameboard[1][1] === letter && gameboard[2][0] === letter ||
      gameboard[0][0] === letter && gameboard[0][1] === letter && gameboard[0][2] === letter ||
      gameboard[1][0] === letter && gameboard[1][1] === letter && gameboard[1][2] === letter ||
      gameboard[2][0] === letter && gameboard[2][1] === letter && gameboard[2][2] === letter ||
      gameboard[0][0] === letter && gameboard[1][0] === letter && gameboard[2][0] === letter ||
      gameboard[0][1] === letter && gameboard[1][1] === letter && gameboard[2][1] === letter ||
      gameboard[0][2] === letter && gameboard[1][2] === letter && gameboard[2][2] === letter) {
      wrapper.classList.add('win');
      gameOver.classList.remove('hide');
      winner.innerHTML = 'The ' + letter +  ' won!';
      gameCompleted = true;
    } else {
      if ((gameboard[0][0] === 'X' || gameboard[0][0] === 'O') && (gameboard[0][1] === 'X' || gameboard[0][1]=== 'O')
      && (gameboard[0][2]=== 'X' || gameboard[0][2]=== 'O') && (gameboard[1][0]=== 'X' || gameboard[1][0]=== 'O')
      && (gameboard[1][1]=== 'X' || gameboard[1][1]=== 'O') && (gameboard[1][2]=== 'X' || gameboard[1][2]=== 'O')
      && (gameboard[2][0]=== 'X' || gameboard[2][0]=== 'O') && (gameboard[2][1]=== 'X' || gameboard[2][1]=== 'O')
      && (gameboard[2][2]=== 'X' || gameboard[2][2]=== 'O')) {
        wrapper.classList.add('win');
        gameOver.classList.remove('hide');
        winner.innerHTML = "It's a tie";
        gameCompleted = true;
      }
    }
  }

  return {
    createGameboard:createGameboard,
    board:board,
    restartButton:restartButton,
    newGame:newGame,
    userMove:userMove,
    getCurrentGameboard: getCurrentGameboard,
  };
})();
