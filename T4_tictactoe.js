const board = document.getElementById('board');
const statusDiv = document.getElementById('status');
const resetBtn = document.getElementById('resetBtn');

let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', '']; // Representing the 3x3 grid
let gameActive = true;

// Winning combinations (index-based for the grid)
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],  // Horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8],  // Vertical
    [0, 4, 8], [2, 4, 6]               // Diagonal
];

// Initialize the board (for both the grid and event listeners)
function initBoard() {
    board.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
    }
}

// Handle cell clicks (placing X or O)
function handleCellClick(event) {
    const index = event.target.dataset.index;

    // If the cell is already filled or the game is over, do nothing
    if (gameBoard[index] !== '' || !gameActive) return;

    // Update the game board
    gameBoard[index] = currentPlayer;
    event.target.textContent = currentPlayer;

    // Check if the current player has won
    if (checkWinner()) {
        statusDiv.textContent = `Player ${currentPlayer} Wins!`;
        gameActive = false;
    } else if (gameBoard.every(cell => cell !== '')) {
        statusDiv.textContent = 'It\'s a Draw!';
        gameActive = false;
    } else {
        // Switch to the next player
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        statusDiv.textContent = `Player ${currentPlayer}'s Turn`;
    }
}

// Check if the current player has won
function checkWinner() {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] === currentPlayer && gameBoard[b] === currentPlayer && gameBoard[c] === currentPlayer) {
            return true;
        }
    }
    return false;
}

// Reset the game
function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;
    statusDiv.textContent = `Player X's Turn`;

    // Clear all cells in the grid
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.textContent = '';
    });
}

// Reset button event listener
resetBtn.addEventListener('click', resetGame);

// Initialize the board when the page loads
initBoard();
