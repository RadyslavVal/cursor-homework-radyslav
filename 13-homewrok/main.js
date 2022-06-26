'use strict';

const app = document.querySelector('.app');

const funcBlock = document.createElement('div');
funcBlock.className = 'funcBlock';

const input = document.createElement('input');
input.className = 'input';
input.placeholder = 'Enter the numb of length';

const button = document.createElement('button');
button.textContent = `getRandomChinese(length)`;
button.addEventListener('click', () => getRandomChinese(input.value));

const textBlock = document.createElement('div');
textBlock.className = 'textBlock';

app.append(funcBlock);
funcBlock.append(input);
funcBlock.append(button);
app.append(textBlock);


async function getRandomChinese(length) {
    if (textBlock.hasChildNodes) {
        textBlock.replaceChildren();
    };

    while (length > 0) {
        const chinChar = document.createElement('div');
        chinChar.className = 'chinChar';
        chinChar.textContent = String.fromCharCode(new Date().valueOf().toString().slice(-5));
        await new Promise((res) => {
            setTimeout(() => res(), 50)
        });
        textBlock.append(chinChar);
        length--;
    };
};

