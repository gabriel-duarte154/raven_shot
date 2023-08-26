const gameStartModal = document.createElement('div');
gameStartModal.innerHTML = ` 
      <div class="modal">
          <h1 class="title-special title">Raven</h1>
        <button class="button" id="start-game-btn">Start Game</button>
      </div>
`;

const gameOverModal = document.createElement('div');

gameOverModal.innerHTML = `
      <div class="modal">
        <h1 class="title">Game Over</h1>
        <span class="score"></span>
        <button class="button" id="reset-game">Main Menu</button>
      </div>
`;

const components = {
  gameStartModal: gameStartModal,
  gameOverModal: gameOverModal,
};

export default components;
