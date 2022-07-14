import '../styles/hw11.css';

const getRandomValues = (min, max) => {
    return Math.floor(Math.random() * (Math.floor(Math.max(min, max)) - Math.ceil(Math.min(min, max)) + 1)) + min;
};


let app = document.querySelector('.app');
let square = document.createElement('div');
square.id = 'square';
let buttonBlock = document.createElement('div');
buttonBlock.className = "d-flex";
app.appendChild(buttonBlock)

let buttonBlocks = document.createElement('button');
buttonBlocks.className = "btn btn-success";
buttonBlocks.textContent = 'generateBlocks()';
buttonBlocks.onclick = generateBlocks;

let buttonBlocksInterval = document.createElement('button');
buttonBlocksInterval.className = "btn btn-warning";
buttonBlocksInterval.textContent = 'generateBlocksInterval()';
buttonBlocksInterval.onclick = generateBlocksInterval;

buttonBlock.appendChild(buttonBlocks);
buttonBlock.appendChild(buttonBlocksInterval);


let nIntervId;
function stopColor() {
    clearInterval(nIntervId);
    nIntervId = null;
};


function blocks() {
    app.appendChild(square);
    let squareBlock = document.querySelector('#square');

    if (squareBlock.hasChildNodes) {
        squareBlock.replaceChildren();
    };

    for (i = 0; i < 25; i++) {
        let squares = document.createElement('div');
        squares.id = 'square__element';
        squares.style.backgroundColor = `rgb(${getRandomValues(0, 255)}, ${getRandomValues(0, 255)}, ${getRandomValues(0, 255)})`;
        squareBlock.append(squares);
    };
};


function generateBlocks() {
    stopColor();
    blocks();
};


function generateBlocksInterval() {
    if (!nIntervId) {
        nIntervId = setInterval(blocks, 1000);
    };
};

