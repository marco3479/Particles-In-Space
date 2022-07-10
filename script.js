const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const gravity = document.getElementById('gravity');
const color = document.getElementById('color');
const mouse = document.getElementById('mouse');

const W = 500
const H = 500

canvas.width = W
canvas.height = H

let particles = [];

function genRandomColor() {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  const randomColor = `rgb(${r}, ${g}, ${b})`
  return randomColor
}


function drawCircle(particle) {
  ctx.beginPath();
  ctx.arc(particle.x, particle.y, particle.size, 0, 2*Math.PI);
  ctx.fillStyle = particle.color;
  ctx.fill();
  ctx.closePath();
}

function clearScreen() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, W, H)
}

function getMousePos(canvas, event) {
  let rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  }
}

canvas.onmousemove = (event) => {
  mousePos = getMousePos(canvas, event);
}

function updateParticle(particle) {
   if (gravity.checked) {
    particle.yVel += 0.2
  }
  particle.x += particle.xVel;
  particle.y += particle.yVel;
  particle.size *= .95;
}

function update() {  
  let particle = {
  x: W / 2,
  y: H / 2,
  size: 10,
  xVel: (Math.random() - 0.5) * 10,
  yVel: (Math.random() - 0.5) * 10,
  color: "red"
}
  if (mouse.checked) {
    particle.x = mousePos.x;
    particle.y = mousePos.y;
  }0
  if (color.checked) {
   particle.color = genRandomColor() 
  }
  particles.push(particle);
  clearScreen();
  particles.map((particle, i) => {
    updateParticle(particle);
    drawCircle(particle);
  })

}


setInterval(update, 16.6)