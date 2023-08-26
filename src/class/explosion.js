import assets from '../sprites/sprites.js';
import sounds from '../sounds/sounds.js';

class Explosion {
  constructor(x, y, size, hasParticle, ctx) {
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = assets.explosion;
    this.spriteWidth = 200;
    this.spriteheight = 179;
    this.size = size;
    this.x = x;
    this.y = y;
    this.frame = 0;
    this.maxFrame = 5;
    this.sound = new Audio();
    this.sound.src = hasParticle === true ? sounds.explosion : sounds.steam;;
    this.timeSinceLastFrame = 0;
    this.frameInterval = 150;
    this.markedForDeletion = false;
  }

  update(deltaTime) {
    this.timeSinceLastFrame += deltaTime;

    if (this.frame === 0) this.sound.play();

    if (this.timeSinceLastFrame > this.frameInterval) {
      this.timeSinceLastFrame = 0;
      this.frame++;
    }

    if (this.frame > this.maxFrame) {
      this.markedForDeletion = true;
    }
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteheight,
      this.x,
      this.y,
      this.size,
      this.size
    );
  }
}

export default Explosion;
