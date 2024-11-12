// Matrix Effekt
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.querySelector(".matrix-overlay").appendChild(canvas);

canvas.width = window.innerWidth;
canvas.height = 200; // Höhe des Headers

const fontSize = 16;
const columns = canvas.width / fontSize; 
const drops = Array.from({ length: columns }).fill(1);
const matrixChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00FF00";
    ctx.font = `${fontSize}px monospace`;

    drops.forEach((y, index) => {
        const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
        const x = index * fontSize;
        ctx.fillText(text, x, y * fontSize);

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
            drops[index] = 0;
        }
        drops[index]++;
    });
}

setInterval(drawMatrix, 50);

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = 200;
});
