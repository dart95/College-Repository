let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let counter = 0;
const getNewStar = () => {
  counter++;
  let x = getRandomX(canvas.width);
  let y = getRandomY(canvas.height);
  let gradient = context.createRadialGradient(x, y, 8, x, y, 2);

  gradient.addColorStop(0, "transparent");
  gradient.addColorStop(1, "white");
  context.fillStyle = gradient;
  context.fillRect(x - 8, y - 8, 16, 16);

  if (counter >= 1000) {
    clearInterval(timer);
  }
};

const getRandomX = (max) => {
  return Math.floor(Math.random() * max);
};

const getRandomY = (max) => {
  return Math.floor(Math.random() * max);
};
const timer = setInterval(getNewStar, 1);
