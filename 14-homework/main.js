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

const wookiee = true;

clearContext = function () {
    if (container.hasChildNodes) {
        container.replaceChildren();
    };
    if (buttonBlocks.hasChildNodes) {
        buttonBlocks.replaceChildren();
    };
}

getResourse = async (url) => {
    const res = wookiee ? await fetch(`${_apiBase}${url}?format=wookiee`) : await fetch(`${_apiBase}${url}`)
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`)
    };
    return await wookiee ? res.text() : res.json();
}

getPerson = async (id) => {
    const people = await getResourse(`/people/${id}`);
    return _transformPeople(people);
}

getPersonImage = ({ id }) => {
    return `${_imgBase}/characters/${id}.jpg`
}

_transformPeople = (people) => {
    return wookiee ? {
        id: _extractId(people),
        name: people.whrascwo,
        gender: people.rrwowhwaworc,
        birthYear: people.rhahrcaoac_roworarc,
    } : {
        id: _extractId(people),
        name: people.name,
        gender: people.gender,
        birthYear: people.birth_year,
    };
}

const idReaExp = /\/([0-9]*)\/$/;
_extractId = async (item) => {
    return wookiee ? await item.hurcan.match(idReaExp)[1] : await item.url.match(idReaExp)[1];
}

let page = 1;
_extractPage = (item) => {
    const idreaexp = /[0-9]/g;
    return item.match(idreaexp);
}

getAllPlanets = async () => {
    clearContext();

    let next;
    let prev;

    buttonBlocks.insertAdjacentHTML('beforeend', `
        <button class="btn btn-primary disabled" id='prev' >PREVIOUS PAGE</button>
        <button class="btn btn-primary disabled" id='next' >NEXT PAGE</button>
                        `)

    const prevPage = document.getElementById('prev');
    const nextPage = document.getElementById('next');
    prevPage.addEventListener('click', () => {
        page = res.previous[0];
        getAllPlanets();
    });
    nextPage.addEventListener('click', () => {
        page = res.next[0];
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
    const res = await fetch(`${_apiBase}/planets/?format=wookiee&page=${page}`)
        .then(res => { return res.text() })
    let results = res;
    next = wookiee ? res.whwokao : res.next;
    prev = wookiee ? res.akrcwohoahoohuc : res.previous;
    console.log(res.rcwochuanaoc)

    for (let i = 0; i < 10; i++) {

        let planetInfo = _transformPlanet(results);
        let id = planetInfo.id;
        /* console.log(planetInfo) */

        container.insertAdjacentHTML('beforeend', `
                    <div class="planet card">
                        <img class="img" src=${getPlanetImage({ id })} id="planet${id}"/>
                        <div class="card-body d-flex flex-column justify-content-end align-items-center">
                            <h3 class='card-title'>${wookiee ? 'Whrascwo' : 'Name'}: ${planetInfo.name}</h3 >
                            <h5 class='card-subtitle'>${wookiee ? 'Akooakhuanraaoahoowh' : 'Population'}: ${planetInfo.population}</h5>
                            <h5 class='card-subtitle'>${wookiee ? 'Waahrascwoaoworc' : 'Diameter'}: ${planetInfo.diameter}</h5>
                        </div >
                    </div >
                        `)
        document.getElementById(`planet${id}`).onerror = function (e) {
            this.src = `${_imgBase}/big-placeholder.jpg`;
        }
    };
}

getPlanet = async (id) => {
    const planet = await getResourse(`/planets/${id}`);
    return _transformPlanet(planet)
}

getPlanetImage = ({ id }) => {
    return `${_imgBase}/planets/${id}.jpg`
}

_transformPlanet = (planet) => {
    return wookiee ? {
        id: _extractId(planet),
        name: planet.whrascwo,
        diameter: planet.waahrascwoaoworc,
        population: planet.akooakhuanraaoahoowh,
    } : {
        id: _extractId(planet),
        name: planet.name,
        diameter: planet.diameter,
        population: planet.population,
    };
}

getFilm = async (id) => {
    const film = await getResourse(`/films/${id}`);
    return _transformFilm(film);
}

getFilmImage = (id) => {
    return `${_imgBase}/films/${id}.jpg`
}

_transformFilm = (film) => {
    const arrIdPeople = [];
    for (let i = 0; i < film.characters.length; i++) {
        arrIdPeople.push(film.characters[i].match(idReaExp)[1])
    }
    return wookiee ? {
        id: film.woakahcoowawo_ahwa,
        title: film.aoahaoanwo,
        release_date: film.rcwoanworacwo_waraaowo,
        director: film.waahrcwooaaooorc,
        peopleId: arrIdPeople,
    } : {
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

    /* const res = await getResourse(`/films/`); */
    const res = await fetch(`${_apiBase}/films/?format=wookiee`).then(res => { return res.json() });
    console.log(res)
    let results = await (wookiee ? res.rcwochuanaoc : res.results).sort(function (a, b) {
        if (wookiee ? a.woakahcoowawo_ahwa > b.woakahcoowawo_ahwa : a.episode_id > b.episode_id) {
            return 1;
        }
        if (wookiee ? a.woakahcoowawo_ahwa > b.woakahcoowawo_ahwa : a.episode_id < b.episode_id) {
            return -1;
        }
        return 0;
    }); // Сортую для корректного відобюраження хронології;

    for (let i = 0; i < 6; i++) {
        let imgId;
        if (wookiee) {
            results[i].woakahcoowawo_ahwa > 3 ? imgId = results[i].woakahcoowawo_ahwa - 3 : imgId = results[i].woakahcoowawo_ahwa + 3
        } else {
            results[i].episode_id > 3 ? imgId = results[i].episode_id - 3 : imgId = results[i].episode_id + 3
        }

        container.insertAdjacentHTML('beforeend', `
                    <div class="film card" id=${imgId}>
                        <img class="img" src='${getFilmImage(imgId)}' alt="'Image not found'" id=${imgId}/>
                        <div class="card-body d-flex-wrap align" id=${imgId}>
                            <h4 class="card-title" id=${imgId}> ${wookiee ? 'Whrascwo' : 'Name'}: ${results[i].title} </h4>
                            <h5 class="card-subtitle" id=${imgId}> ${wookiee ? 'Rcwoanworacwo waraaowo' : 'Release date'}: ${results[i].release_date} </h5>
                            <h5 class="card-subtitle" id=${imgId}> ${wookiee ? 'Waahrcwooaaooorc' : 'Director'}: ${results[i].director} </h5>
                        </div >
                    </div>`);

        const film = document.getElementById(imgId);

        film.addEventListener('click', (e) =>
            getFilm(e.target.id).then(data => {
                clearContext();
                data.peopleId.forEach(id => searchPerson(id))
            })
        );
    };
};

const searchPerson = async function (id) {
    getPerson(id).then(person => {
        container.insertAdjacentHTML('beforeend', `
        <div class="person card">
            <img class="img" src='${getPersonImage({ id })}'>
            <div class="card-body d-flex-wrap align">
                <h3 >${wookiee ? 'Whrascwo' : 'Name'}: ${person.name}</h3 >
                <h5 class="card-subtitle">${wookiee ? 'Rhahrcaoac roworarc' : 'Birth Year'}: ${person.birthYear}</h5>
                <h5 class="card-subtitle">${wookiee ? 'Rrwowhwaworc' : 'Gender'}: ${person.gender}</h5>
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

