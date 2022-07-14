import '../styles/hw11.css';

const getRandomValues = (min, max) => {
    return Math.floor(Math.random() * (Math.floor(Math.max(min, max)) - Math.ceil(Math.min(min, max)) + 1)) + min;
};


const app = document.querySelector('.app');
const square = document.createElement('div');
square.id = 'square';
const buttonBlock = document.createElement('div');
buttonBlock.className = "d-flex";
app.appendChild(buttonBlock)

const buttonGenerate = document.createElement('button');
buttonGenerate.className = "btn btn-success";
buttonGenerate.textContent = 'generateBlocks()';
buttonGenerate.onclick = () => generateBlocks();

const buttonInterval = document.createElement('button');
buttonInterval.className = "btn btn-warning";
buttonInterval.textContent = 'generateBlocksInterval()';
buttonInterval.onclick = () => generateBlocksInterval();

buttonBlock.appendChild(buttonGenerate);
buttonBlock.appendChild(buttonInterval);

let nIntervId;
const stopColor = () => {
    clearInterval(nIntervId);
    nIntervId = null;
};


const blocks = () => {
    app.appendChild(square);
    const squareBlock = document.querySelector('#square');

    if (squareBlock.hasChildNodes) {
        squareBlock.replaceChildren();
    };

    for (let i = 0; i < 25; i++) {
        const squares = document.createElement('div');
        squares.id = 'square__element';
        squares.style.backgroundColor = `rgb(${getRandomValues(0, 255)}, ${getRandomValues(0, 255)}, ${getRandomValues(0, 255)})`;
        squareBlock.append(squares);
    };
};


const generateBlocks = () => {
    stopColor();
    blocks();
};


const generateBlocksInterval = () => {
    if (!nIntervId) {
        nIntervId = setInterval(blocks, 1000);
    };
};

