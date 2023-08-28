import assets from '../sprites/sprites.js';
import events from '../pubsub/pubsub.js';

class Raven {
  constructor(ctx, canvas, colisionCtx) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.colisionCtx = colisionCtx;
    this.spriteWidth = 271;
    this.spriteheight = 194;
    this.sizeModifier = canvas.height > 400 ? Math.random() * 0.4 + 0.4 : Math.random() * 0.3 + 0.2;
    this.width = this.spriteWidth * this.sizeModifier;
    this.height = this.spriteheight * this.sizeModifier;
    this.x = this.canvas.width;
    this.y = Math.random() * (this.canvas.height - this.height);
    this.directionX = Math.random() * 3 + 3;
    this.directionY = Math.random() * 2 - 1.5;
    this.markedForDeletion = false;
    this.image = new Image();
    this.image.src = assets.raven;
    this.flapSpeed = Math.random() * 8 + 5;
    this.frame = 0;
    this.maxFrame = 6;
    this.timeSinceflap = 0;
    this.flapInterval = Math.random() * 50 + 50;
    this.randomColors = [
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
      Math.floor(Math.random() * 255),
    ];
    this.color = `rgb(${this.randomColors[0]}, ${this.randomColors[1]}, ${this.randomColors[2]}, 30)`;
    this.hasParticle = Math.random() * 10 > 7;
  }

  update(deltaTime) {
    this.x -= this.directionX;
    this.y += this.directionY;

    if (this.y < 0 || this.y > this.canvas.height - this.width) {
      this.directionY = this.directionY * -1;
    }

    this.timeSinceflap += deltaTime;

    if (this.timeSinceflap > this.flapInterval) {
      this.timeSinceflap = 0;
      this.frame++;

      if (this.hasParticle) {
        for (let i = 0; i < 7; i++) {
          events.emit('new Particle', {
            x: this.x,
            y: this.y,
            width: this.width,
            color: this.color,
          });
        }
      }
    }

    if (this.frame >= this.maxFrame) this.frame = 0;

    if (this.x < -this.width) {
      this.markedForDeletion = true;
      events.emit('gameover');
    }
  }

  draw() {
    this.colisionCtx.fillStyle = this.color;
    this.colisionCtx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteheight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

export default Raven;
