document.addEventListener("DOMContentLoaded", () => {
    drawRectangles();
    drawTriangle();
    drawHappyFace();
    drawLinea();
    drawTriangulos();
    drawFiguras();
    drawCorazon();
    drawPath2();
});

function drawRectangles() {
    const canvas = document.getElementById("canvasRect");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(226, 247, 0)";
    ctx.fillRect(100, 100, 100, 100);
}

function drawTriangle() {
    const canvas = document.getElementById("canvasTriang");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(255, 5, 251)";
    ctx.beginPath();
    ctx.moveTo(150, 80);
    ctx.lineTo(220, 240);
    ctx.lineTo(80, 240);
    ctx.closePath();
    ctx.fill();
}

function drawHappyFace() {
    const canvas = document.getElementById("canvasCara");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Cara
    ctx.beginPath();
    ctx.arc(150, 150, 80, 0, Math.PI * 2);
    ctx.stroke();

    // Ojos
    ctx.beginPath();
    ctx.arc(120, 130, 8, 0, Math.PI * 2);
    ctx.arc(180, 130, 8, 0, Math.PI * 2);
    ctx.fill();

    // Sonrisa
    ctx.beginPath();
    ctx.arc(150, 160, 40, 0, Math.PI);
    ctx.stroke();
}

function drawLinea() {
    const canvas = document.getElementById("canvasLinea");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(50, 150);
    ctx.lineTo(250, 150);
    ctx.stroke();
}

function drawTriangulos() {
    const canvas = document.getElementById("canvasTriangulos");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(255, 5, 118)";
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(200, 100);
    ctx.lineTo(100, 200);
    ctx.closePath();
    ctx.fill();
}

function drawFiguras() {
    const canvas = document.getElementById("canvasFiguras");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "rgb(5, 163, 255)";
    ctx.beginPath();
    ctx.arc(150, 150, 50, 0, Math.PI * 2);
    ctx.stroke();
}

function drawCorazon() {
    const canvas = document.getElementById("canvasCorazon");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    ctx.translate(75, 60);
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 0, 0, 0, 0, 40);
    ctx.bezierCurveTo(0, 80, 75, 120, 75, 140);
    ctx.bezierCurveTo(75, 120, 150, 80, 150, 40);
    ctx.bezierCurveTo(150, 0, 75, 0, 75, 40);
    ctx.fillStyle = "rgb(63, 5, 255)";
    ctx.fill();
}

function drawPath2() {
    const canvas = document.getElementById("canvasPath2D");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const rect = new Path2D();
    rect.rect(125, 125, 50, 50);
    ctx.strokeStyle = "rgb(101, 255, 5)";
    ctx.stroke(rect);
}
