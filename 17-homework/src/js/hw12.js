'use strict';
import '../styles/hw12.css';

const soundsUrl = [
    '../assets/00.mp3',
    '../assets/01.mp3',
    '../assets/02.mp3',
    '../assets/03.mp3',
    '../assets/04.mp3',
    '../assets/05.mp3',
    '../assets/06.mp3',
    '../assets/07.mp3',
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
    audio.src = soundsUrl[i];
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

