class Particle {
  constructor(x, y, size, color, ctx) {
    this.size = size;
    this.x = x + this.size / 2 + Math.random() * 30 - 20;
    this.y = y + this.size / 3 + Math.random() * 30 - 20;
    this.color = color;
    this.radius = Math.random() * this.size * 0.1;
    this.maxRadius = Math.random() * 20 + 35;
    this.markedForDeletion = false;
    this.speedX = Math.random() * 1 + 0.5;
    this.ctx = ctx;
  }

  update() {
    this.x += this.speedX;
    this.radius += 0.3;
    if (this.radius > this.maxRadius - 5) this.markedForDeletion = true;
  }

  draw() {
    this.ctx.save();
    this.ctx.globalAlpha = 1 - this.radius / this.maxRadius;
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();
  }
}

export default Particle;
