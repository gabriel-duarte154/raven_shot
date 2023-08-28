import components from '../components/components';
import events from '../pubsub/pubsub';

const Dom = (() => {
  const mainContainer = document.querySelector('.container');
  const initialScreen = components.gameStartModal.querySelector('.modal');
  const gameOverScreen = components.gameOverModal.querySelector('.modal');
  const startButton = initialScreen.querySelector('#start-game-btn');
  const resetButton = gameOverScreen.querySelector('#reset-game');
  const scoreElement = gameOverScreen.querySelector('.score');

  function addInitialScreenEvents() {
    startButton.addEventListener('click', startGame);
  }

  function addGameoverScreenEvents() {
    resetButton.addEventListener('click', resetScreen);
  }

  function removeInitialScreenEvents() {
    startButton.removeEventListener('click', startGame);
  }

  function removeGameoverScreenEvents() {
    resetButton.removeEventListener('click', resetScreen);
  }

  function startGame() {
    removeInitialScreenEvents();
    events.emit('stopMenuMusic');
    events.emit('menuSound');
    setTimeout(() => {
      close();
      events.emit('play');
      events.emit('startGame');
    }, 700);
  }

  function resetScreen() {
    removeGameoverScreenEvents();
    events.emit('stopGameOverMusic');
    events.emit('menuSound');
    setTimeout(() => {
      close();
      openInitialScreen();
    }, 700);
  }

  function close() {
    mainContainer.classList.add('hidden');
  }

  function open() {
    mainContainer.classList.remove('hidden');
  }

  function openGameOverScreen(score) {
    events.emit('stop');
    events.emit('gameoverMusic');

    setTimeout(() => {
      mainContainer.innerHTML = '';
      scoreElement.textContent = 'Score: ' + score;
      mainContainer.appendChild(gameOverScreen);
      addGameoverScreenEvents();
      open();
    }, 1000);
  }

  function openInitialScreen() {
    mainContainer.innerHTML = '';
    mainContainer.appendChild(initialScreen);
    events.emit('playMenuMusic');
    addInitialScreenEvents();
    events.emit('resetGame');
    open();
  }

  events.on('openGameOverScreen', openGameOverScreen);

  window.addEventListener('load', () => {
    openInitialScreen();
  });
})();

export default Dom;
