let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let image = new Image();

/*image.src = "./img/photo.jpg";
let pattern = context.createPattern(image, "repeat");

context.fillStyle = pattern;
context.fillRect(0, 0, 500, 500);
*/
context.font = "25px Arial";
context.strokeStyle = "red";
context.shadowOffsetX = 5;
context.shadowOffsetY = 5;
context.shadowBlur = 4;
context.shadowColor = "black";
function func() {
  if (context.shadowColor == "black") {
    context.shadowColor = "red";
  } else context.shadowColor == "red";
  setTimeout(func, 500);
}

context.strokeText("Welcome Back Commander", 100, 100);
