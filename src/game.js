/** @type {HTMLCanvasElement} */

import './style.css';
import Raven from './class/raven.js';
import Particle from './class/particle.js';
import Explosion from './class/explosion.js';
import events from './pubsub/pubsub.js';
import musicController from './sounds/musicController.js';
import Dom from './dom/dom';

const canvas = document.querySelector('#canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colisionCanvas = document.querySelector('#colisionCanvas');
const colisionCtx = colisionCanvas.getContext('2d');
colisionCanvas.width = window.innerWidth;
colisionCanvas.height = window.innerHeight;

const ravenInterval = 500;
let timeToNextRaven = 0;
let lastTime = 0;
let score = 0;
let gameOver = false;
let isPause = false;
let ravens = [];
let explosions = [];
let particles = [];

function animate(timestamp = 0) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;
  timeToNextRaven += deltaTime;

  if (timeToNextRaven > ravenInterval) {
    timeToNextRaven = 0;
    ravens.push(new Raven(ctx, canvas, colisionCtx));
    ravens.sort((a, b) => a.width - b.width);
  }

  clearCanvas();
  drawScore();
  updateElements(deltaTime);
  drawELements();
  removeElements();

  if (!isPause && !gameOver) requestAnimationFrame(animate);
  if (gameOver) {
    events.emit('openGameOverScreen', score);
    return;
  }
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  colisionCtx.clearRect(0, 0, colisionCanvas.width, colisionCanvas.height);
}

function drawScore() {
  ctx.font = '40px impact';
  ctx.fillStyle = '#444449';
  ctx.fillText('Score: ' + score, 54, 75);
  ctx.fillStyle = '#555';
  ctx.fillText('Score: ' + score, 53, 76);
}

function updateElements(deltaTime) {
  [...particles, ...ravens, ...explosions].forEach((obj) => {
    obj.update(deltaTime);
  });
}

function drawELements() {
  [...particles, ...ravens, ...explosions].forEach((obj) => {
    obj.draw();
  });
}

function removeElements() {
  ravens = ravens.filter((obj) => !obj.markedForDeletion);
  explosions = explosions.filter((obj) => !obj.markedForDeletion);
  particles = particles.filter((obj) => !obj.markedForDeletion);
}

window.addEventListener('keypress', (ev) => {
  if (ev.key === 'p') {
    isPause === true ? (isPause = false) : (isPause = true);
    resumeGame();
  }

  if (ev.key === 'm') {
    events.emit('mute');
  }
});

function resumeGame() {
  if (!isPause && !gameOver) {
    animate();
  }
}

window.addEventListener('click', (ev) => {
  if (isPause) return;
  detectColision(ev);
});

window.addEventListener('resize', () => {
  reziseCanvas();
});

function detectColision(ev) {
  const detecPixelColor = colisionCtx.getImageData(ev.x, ev.y, 1, 1);
  const pc = detecPixelColor.data;

  for (let i in ravens) {
    if (
      pc[0] === ravens[i].randomColors[0] &&
      pc[1] === ravens[i].randomColors[1] &&
      pc[2] === ravens[i].randomColors[2]
    ) {
      ravens[i].markedForDeletion = true;
      explosions.push(
        new Explosion(
          ravens[i].x,
          ravens[i].y,
          ravens[i].width,
          ravens[i].hasParticle,
          ctx
        )
      );

      if (ravens[i].hasParticle) score += 2;
      else score++;

      break;
    }
  }
}

function reziseCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  colisionCanvas.width = window.innerWidth;
  colisionCanvas.height = window.innerHeight;
  drawELements();
}

function newParticle({ x, y, width, color }) {
  particles.push(new Particle(x, y, width, color, ctx));
}

function setGameOver() {
  gameOver = true;
}

function reset() {
  lastTime = 0;
  score = 0;
  gameOver = false;
  isPause = false;
  ravens = [];
  explosions = [];
  particles = [];
  timeToNextRaven = 0;
  clearCanvas();
}

function startGame() {
  animate();
}

events.on('new Particle', newParticle);
events.on('animate', animate);
events.on('gameover', setGameOver);
events.on('resetGame', reset);
events.on('clearCanvas', clearCanvas);
events.on('startGame', startGame);
