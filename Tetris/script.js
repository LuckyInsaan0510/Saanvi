document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector("#grid");
    const scoreDisplay = document.querySelector("#score");
  
    const gridWidth = 10;
    const gridHeight = 20;
    const gridSize = gridWidth * gridHeight;
    const cells = [];
    let currentTetromino;
    let currentPosition = 4;
    let timer;
    let score = 0;
  
    const tetrominoes = [
      [0, 1, gridWidth, gridWidth + 1], // O
      [1, gridWidth, gridWidth + 1, gridWidth + 2], // T
      [1, 2, gridWidth, gridWidth + 1], // S
      [0, 1, gridWidth + 1, gridWidth + 2], // Z
      [0, gridWidth, gridWidth * 2, gridWidth * 3], // I
    ];
  
    // Create the grid
    for (let i = 0; i < gridSize; i++) {
      const cell = document.createElement("div");
      cell.classList.add("grid-cell");
      grid.appendChild(cell);
      cells.push(cell);
    }
  
    function draw() {
      currentTetromino.forEach((index) => {
        cells[currentPosition + index].classList.add("active");
      });
    }
  
    function erase() {
      currentTetromino.forEach((index) => {
        cells[currentPosition + index].classList.remove("active");
      });
    }
  
    function collision(offset) {
      return currentTetromino.some(index => {
        const newPos = currentPosition + index + offset;
        const newColumn = (newPos % gridWidth);
        const currentColumn = (currentPosition + index) % gridWidth;
    
        return (
          newPos >= gridWidth * gridHeight || // Check if it's beyond the bottom
          (offset === 1 && newColumn === 0) || // Check for right boundary collision
          (offset === -1 && newColumn === gridWidth - 1) || // Check for left boundary collision
          cells[newPos]?.classList.contains('occupied') // Check for already occupied cells
        );
      });
    }    
  
    function freeze() {
      currentTetromino.forEach((index) => {
        cells[currentPosition + index].classList.add("occupied");
      });
      checkRows();
      currentPosition = 4;
      currentTetromino = tetrominoes[Math.floor(Math.random() * tetrominoes.length)];
      if (collision(0)) {
        alert("Game Over!");
        clearInterval(timer);
      }
    }
  
    function checkRows() {
      for (let row = 0; row < gridHeight; row++) {
        const rowStart = row * gridWidth;
        const rowEnd = rowStart + gridWidth;
        const isFull = cells
          .slice(rowStart, rowEnd)
          .every((cell) => cell.classList.contains("occupied"));
  
        if (isFull) {
          cells.slice(rowStart, rowEnd).forEach((cell) => {
            cell.classList.remove("occupied", "active");
          });
  
          cells.splice(rowStart, gridWidth).forEach((cell) => grid.removeChild(cell));
  
          for (let i = 0; i < gridWidth; i++) {
            const newCell = document.createElement("div");
            newCell.classList.add("grid-cell");
            grid.insertBefore(newCell, grid.firstChild);
            cells.unshift(newCell);
          }
  
          score += 10;
          scoreDisplay.textContent = score;
        }
      }
    }
  
    function moveDown() {
      erase();
      if (!collision(gridWidth)) {
        currentPosition += gridWidth;
      } else {
        freeze();
      }
      draw();
    }
  
    function moveLeft() {
      erase();
      if (!collision(-1) && currentPosition % gridWidth !== 0) {
        currentPosition -= 1;
      }
      draw();
    }
  
    function moveRight() {
      erase();
      if (
        !collision(1) &&
        (currentPosition + currentTetromino.length) % gridWidth !== 0
      ) {
        currentPosition += 1;
      }
      draw();
    }
  
    function rotate() {
      erase();
      const newTetromino = currentTetromino.map(index => {
        const x = index % gridWidth;
        const y = Math.floor(index / gridWidth);
        return y + x * gridWidth;
      });
    
      // Check if the new rotation is valid
      if (!newTetromino.some(index => {
        const newPos = currentPosition + index;
        return (
          newPos % gridWidth === 0 || // Check left boundary
          newPos % gridWidth === gridWidth - 1 || // Check right boundary
          newPos >= gridWidth * gridHeight || // Check bottom boundary
          cells[newPos]?.classList.contains('occupied') // Check occupied cells
        );
      })) {
        currentTetromino = newTetromino; // Only apply the rotation if valid
      }
      draw();
    }    
  
    function control(e) {
      if (e.key === "ArrowLeft") moveLeft();
      if (e.key === "ArrowRight") moveRight();
      if (e.key === "ArrowDown") moveDown();
      if (e.key === "ArrowUp") rotate();
    }
  
    function startGame() {
      currentTetromino = tetrominoes[Math.floor(Math.random() * tetrominoes.length)];
      draw();
      document.addEventListener("keydown", control);
      timer = setInterval(moveDown, 500);
    }
  
    startGame();
  });  