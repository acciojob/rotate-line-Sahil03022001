const rotatingDiv = document.getElementById('line');
let rotation = 0;

function rotateDiv() {
    rotation += 1;
    rotatingDiv.style.transform = `rotate(${rotation}deg)`;
}

setInterval(rotateDiv, 10);
