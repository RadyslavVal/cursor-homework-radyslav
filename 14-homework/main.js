_apiBase = 'https://swapi.dev/api';
_imgBase = 'https://starwars-visualguide.com/assets/img';

const toggler = document.querySelector('.navbar-toggler');
const collapse = document.querySelector('.collapse');
function toogle() {
    collapse.classList.toggle('show')
    toggler.classList.toggle('collapsed')
};
toggler.addEventListener('click', toogle);

const container = document.getElementById('container');
const buttonBlocks = document.getElementById('buttonBlock');

clearContext = function () {
    if (container.hasChildNodes) {
        container.replaceChildren();
    };
    if (buttonBlocks.hasChildNodes) {
        buttonBlocks.replaceChildren();
    };
}

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

getAllPlanets = async () => {
    clearContext();

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

let filmsCount = 0;
getFilms = async () => {
    clearContext();

    const res = await getResourse(`/films/`);
    filmsCount = res.count;
    let results = res.results.sort(function (a, b) {
        if (a.episode_id > b.episode_id) {
            return 1;
        }
        if (a.episode_id < b.episode_id) {
            return -1;
        }
        return 0;
    }); // Сортую для корректного відобюраження хронології;

    for (let i = 0; i < filmsCount; i++) {
        let imgId;
        results[i].episode_id > 3 ? imgId = results[i].episode_id - 3 : imgId = results[i].episode_id + 3;

        container.insertAdjacentHTML('beforeend', `
                    <div class="film card" id=${imgId}>
                        <img class="img" src='${getFilmImage(imgId)}' alt="'Image not found'" id=${imgId}/>
                        <div class="card-body d-flex-wrap align" id=${imgId}>
                            <h3 class="card-title id=${imgId}>Name: ${results[i].title}</h3 >
                            <h5 class="card-subtitle" id=${imgId}>Release date: ${results[i].release_date}</h5>
                            <h5 class="card-subtitle" id=${imgId}>Director: ${results[i].director}</h5>
                        </div >
                    </div >`);

        const film = document.getElementById(imgId);

        film.addEventListener('click', (e) =>
            getFilm(e.target.id).then(data => {
                clearContext();
                data.peopleId.forEach(id => searchPerson(id))
            })
        );
    };
};

const searchPerson = function (id) {
    getPerson(id).then(person => {
        container.insertAdjacentHTML('beforeend', `
        <div class="person card">
            <img class="img" src='${getPersonImage({ id })}'>
            <div class="card-body d-flex-wrap align">
                <h3 >Name: ${person.name}</h3 >
                <h5 class="card-subtitle">Birth Year: ${person.birthYear}</h5>
                <h5 class="card-subtitle">Gender: ${person.gender}</h5>
            </div >
        </div >
            `)
    })
};

getFilms();
const home = document.querySelector('#films');
home.addEventListener('click', getFilms);

const planets = document.querySelector('#planets');
planets.addEventListener('click', getAllPlanets);

const form = document.querySelector('#searchForm');
const input = document.querySelector('#searchInput');
const button = document.querySelector('#searchButton');

const searchByForm = () => {
    const inputId = Math.floor(input.value);
    if (inputId < 0 || inputId > filmsCount || !Number(inputId)) {
        console.log('Enter a movie number no larger than their number')
    }
    getFilm(inputId).then(data => {
        clearContext();
        data.peopleId.forEach(id => searchPerson(id))
    });
};

const onFormSubmit = (e) => {
    e.preventDefault();
    searchByForm();
    form.reset();
};

form.addEventListener('submit', onFormSubmit);

