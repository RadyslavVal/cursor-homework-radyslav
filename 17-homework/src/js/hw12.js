'use strict';
import '../styles/hw12.css';
import a00 from '../assets/00.mp3';
import a01 from '../assets/01.mp3';
import a02 from '../assets/02.mp3';
import a03 from '../assets/03.mp3';
import a04 from '../assets/04.mp3';
import a05 from '../assets/05.mp3';
import a06 from '../assets/06.mp3';
import a07 from '../assets/07.mp3';

const soundsUrl = [
    a00,
    a01,
    a02,
    a03,
    a04,
    a05,
    a06,
    a07,
];

const app = document.querySelector('.app');
const keysBlock = document.createElement('div');
keysBlock.className = "buttons";
app.appendChild(keysBlock)

const keysId = [
    'KeyA',
    'KeyS',
    'KeyD',
    'KeyF',
    'KeyG',
    'KeyH',
    'KeyJ',
    'KeyK',
];

for (let i = 0; i < keysId.length; i++) {
    const key = document.createElement('div');
    const audio = document.createElement('audio');
    key.id = audio.id = keysId[i];
    audio = new Audio(soundsUrl[i]);
    key.className = "btn btn-primary";
    key.textContent = keysId[i][3];
    key.addEventListener('click', () => audio.play());
    keysBlock.append(key);
    app.appendChild(audio);
};

document.addEventListener('keydown', (event) => {
    if (keysId.includes(event.code)) {
        document.getElementById(event.code).click();
    }
});

