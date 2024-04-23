const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
let isDrawing = false;
let lastX = 0, lastY = 0, hue = 0, direction = true;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 5;
// ctx.globalCompositeOperation = "multiply";

function draw(e){
    if(!isDrawing) return;    // Stop this function from running when they are not moused down
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if(hue >= 360)
        hue = 0;
    // if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1)
    //     direction = !direction;
    // if(direction)
    //   ctx.lineWidth++;
    // else
    //   ctx.lineWidth--;
}
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);