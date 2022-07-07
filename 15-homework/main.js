'use strict';

function* createIdGenerator() {
    let value = 0;
    while (true) {
        value++;
        yield value;
    };
};

const idGenerator = createIdGenerator();

console.log(idGenerator.next().value)
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)

let fontSize = 0;
function* newFontGenerator(value) {
    if (typeof (value) == 'number') {
        fontSize = value;
    }
    else { return console.log('Enter a number for the font size') };
    while (true) {
        let command = yield fontSize
        while (command === "up" || command === "down") {
            command == "up" ? command = yield fontSize += 2 : command = yield fontSize -= 2;
        };
    }
};

const fontGenerator = newFontGenerator(30);

console.log(fontGenerator.next("up").value)
console.log(fontGenerator.next("up").value)
console.log(fontGenerator.next("up").value)
console.log(fontGenerator.next().value)
console.log(fontGenerator.next("down").value)
console.log(fontGenerator.next("down").value)
console.log(fontGenerator.next().value)

const text = document.getElementById('text');
const smallerBtn = document.getElementById('smaller');
smallerBtn.addEventListener('click', () => text.style.fontSize = `${fontGenerator.next("down").value}px`);
const bigerBtn = document.getElementById('biger');
bigerBtn.addEventListener('click', () => text.style.fontSize = `${fontGenerator.next("up").value}px`);


