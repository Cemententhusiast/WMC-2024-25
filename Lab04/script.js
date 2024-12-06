document.addEventListener('DOMContentLoaded', () => {
  class TicTacToe {
    constructor(board, cells, winText) {
      this.board = board;
      this.cells = cells;
      this.winText = winText;
      this.currentPlayer = 'X';
      this.gameBoard = ['', '', '', '', '', '', '', '', ''];
      this.gameActive = true;
      this.winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];

      this.cells.forEach(cell => cell.addEventListener('click', this.handleCellClick.bind(this)));
    }

    handleCellClick(event) {
      const cell = event.target;
      const cellIndex = parseInt(cell.getAttribute('data-index'));

      if (this.gameBoard[cellIndex] !== '' || !this.gameActive) {
        return;
      }

      this.gameBoard[cellIndex] = this.currentPlayer;
      cell.innerText = this.currentPlayer;

      if (this.checkWin()) {
        this.winText.innerText = `${this.currentPlayer} won!`;
        this.gameActive = false;
        return;
      }

      if (this.gameBoard.every(cell => cell !== '')) {
        this.winText.innerText = 'Draw!';
        this.gameActive = false;
        return;
      }

      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }

    checkWin() {
      return this.winningConditions.some(condition => {
        return condition.every(index => {
          return this.gameBoard[index] === this.currentPlayer;
        });
      });
    }
  }

  const board = document.getElementById('board');
  const cells = document.querySelectorAll('.cell');
  const winText = document.getElementById('win-text');

  new TicTacToe(board, cells, winText);
});
