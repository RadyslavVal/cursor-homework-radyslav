'use strict';

const soundsUrl = [
    'sounds/00.mp3',
    'sounds/01.mp3',
    'sounds/02.mp3',
    'sounds/03.mp3',
    'sounds/04.mp3',
    'sounds/05.mp3',
    'sounds/06.mp3',
    'sounds/07.mp3',
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

