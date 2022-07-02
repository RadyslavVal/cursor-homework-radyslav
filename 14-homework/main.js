_apiBase = 'https://swapi.dev/api';
_imgBase = 'https://starwars-visualguide.com/assets/img';

const toggler = document.querySelector('.navbar-toggler');
const collapse = document.querySelector('.collapse');
function toogle() {
    collapse.classList.toggle('show')
    toggler.classList.toggle('collapsed')
};
toggler.addEventListener('click', toogle);

getResourse = async (url) => {
    const res = await fetch(`${_apiBase}${url}`);
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
    };
    return await res.json();
}

getPerson = async (id) => {
    const people = await getResourse(`/people/${id}`);
    return _transformPeople(people);
}

getPersonImage = ({ id }) => {
    return `${_imgBase}/characters/${id}.jpg`
}

let page = 1;
_extractPage = (item) => {
    const idreaexp = /[0-9]/g;
    return item.match(idreaexp);
}

const buttonBlocks = document.getElementById('buttonBlock');

getAllPlanets = async () => {
    if (container.hasChildNodes) {
        container.replaceChildren();
    };
    if (buttonBlocks.hasChildNodes) {
        buttonBlocks.replaceChildren();
    };

    const res = await getResourse(`/planets/?page=${page}`);
    let results = res.results;
    let next = res.next;
    let prev = res.previous;

    buttonBlocks.insertAdjacentHTML('beforeend', `
        <button class="btn btn-primary disabled" id='prev' >PREVIOUS PAGE</button>
        <button class="btn btn-primary disabled" id='next' >NEXT PAGE</button>
                        `)

    const prevPage = document.getElementById('prev');
    const nextPage = document.getElementById('next');
    prevPage.addEventListener('click', () => {
        page = prev[0];
        getAllPlanets();
    });
    nextPage.addEventListener('click', () => {
        page = next[0];
        getAllPlanets();
    });

    if (next != null) {
        next = _extractPage(next);
        nextPage.classList.remove('disabled');
    }
    if (prev != null) {
        prev = _extractPage(prev);
        prevPage.classList.remove('disabled');
    };

    for (let i = 0; i < 10; i++) {
        let planetInfo = _transformPlanet(results[i]);
        let id = planetInfo.id;

        container.insertAdjacentHTML('beforeend', `
                    <div class="planet card">
                        <img class="img" src='${getPlanetImage({ id })}' alt="Image not found" />
                        <div class="card-body d-flex flex-column justify-content-end align-items-center">
                            <h3 class='card-title'>Name: ${planetInfo.name}</h3 >
                            <h5 class='card-subtitle'>Birth Year: ${planetInfo.population}</h5>
                            <h5 class='card-subtitle'>Gender: ${planetInfo.diameter}</h5>
                        </div >
                    </div >
                        `)
    };

}

getPlanet = async (id) => {
    const planet = await getResourse(`/planets/${id}`);
    return _transformPlanet(planet)

}

getPlanetImage = ({ id }) => {
    return `${_imgBase}/planets/${id}.jpg`
}

getFilm = async (id) => {
    const film = await getResourse(`/films/${id}`);
    return _transformFilm(film);
}

getFilmImage = (id) => {
    return `${_imgBase}/films/${id}.jpg`
}

const idReaExp = /\/([0-9]*)\/$/;
_extractId = (item) => {
    return item.url.match(idReaExp)[1];
}

_transformPlanet = (planet) => {
    return {
        id: _extractId(planet),
        name: planet.name,
        diameter: planet.diameter,
        population: planet.population,
    };
}

_transformPeople = (people) => {
    return {
        id: _extractId(people),
        name: people.name,
        gender: people.gender,
        birthYear: people.birth_year,
    };
}

_transformFilm = (film) => {
    const arrIdPeople = [];
    for (let i = 0; i < film.characters.length; i++) {
        arrIdPeople.push(film.characters[i].match(idReaExp)[1])
    }
    return {
        id: film.episode_id,
        title: film.title,
        release_date: film.release_date,
        director: film.director,
        peopleId: arrIdPeople,
    };
}

const container = document.getElementById('container');

getFilms = async () => {
    if (container.hasChildNodes) {
        container.replaceChildren();
    };

    const res = await getResourse(`/films/`);
    let count = res.count;
    let results = res.results.sort(function (a, b) {
        if (a.episode_id > b.episode_id) {
            return 1;
        }
        if (a.episode_id < b.episode_id) {
            return -1;
        }
        return 0;
    }); // Сортую для корректного відобюраження хронології;

    for (let i = 0; i < count; i++) {
        let imgId = 0;
        results[i].episode_id > 3 ? imgId = results[i].episode_id - 3 : imgId = results[i].episode_id + 3;

        const film = document.createElement('div');
        film.className = 'film card';
        film.addEventListener('click', (e) =>
            getFilm(e.target.id).then(data => {
                if (container.hasChildNodes) {
                    container.replaceChildren();
                };
                data.peopleId.forEach(id => getPerson(id).then(person => {
                    container.insertAdjacentHTML('beforeend', `
                    <div class="person card">
                        <img class="img" src='${getPersonImage({ id })}'>
                        <div class="card-body d-flex-wrap align">
                            <h3>Name: ${person.name}</h3 >
                            <h5>Birth Year: ${person.birthYear}</h5>
                            <h5>Gender: ${person.gender}</h5>
                        </div >
                    </div >
                        `)
                })
                )
            })
        );

        const img = document.createElement('img');
        img.className = 'img';
        img.src = getFilmImage(imgId);
        img.alt = 'Image not found';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body d-flex-wrap align';

        const title = document.createElement('h3');
        title.className = 'card-title';
        title.textContent = `${results[i].title} `;

        const releaseDate = document.createElement('h5');
        releaseDate.className = 'card-subtitle';
        releaseDate.textContent = `Release date: ${results[i].release_date} `;

        const director = document.createElement('h5');
        director.className = 'card-subtitle';
        director.textContent = `Director: ${results[i].director} `;

        film.id = img.id = cardBody.id = title.id = releaseDate.id = director.id = imgId;
        cardBody.append(title);
        cardBody.append(releaseDate);
        cardBody.append(director);
        film.append(img);
        film.append(cardBody);
        container.append(film);
    };
};

getFilms();
const home = document.querySelector('#films');
home.addEventListener('click', getFilms);

const planets = document.querySelector('#planets');
planets.addEventListener('click', getAllPlanets);



