_apiBase = 'https://swapi.dev/api';
_imgBase = 'https://starwars-visualguide.com/assets/img';
let controller = new AbortController();

const toggler = document.querySelector('.navbar-toggler');
const collapse = document.querySelector('.collapse');
function toogle() {
    collapse.classList.toggle('show')
    toggler.classList.toggle('collapsed')
};
toggler.addEventListener('click', toogle);

const container = document.getElementById('container');
const buttonBlocks = document.getElementById('buttonBlock');

let wookiee = false;
const wookieeButton = document.getElementById('wookieeButton');

let peopleListId = [];
const BAD_PERSON_ID = ['35', '39', '61', '66']

const preloader = document.getElementById('preloader');
container.onload = () => {
    showPreloader()
}
function showPreloader() {
    if (!preloader.classList.contains('show')) {
        preloader.classList.add('show');
    }
}
function hidePreloader() {
    setTimeout(function () {
        if (preloader.classList.contains('show')) {
            preloader.classList.remove('show');
        }
    }, 1500)
}

const reload = async function () {
    const blockClassName = document.querySelector('.card');
    const mainClass = blockClassName.className.replace(' card', '');
    wookiee = !wookiee;
    switch (mainClass) {
        case 'film':
            getFilms();
            break;
        case 'person':
            clearContext();
            Promise.all(peopleListId.filter(id => wookiee ? !BAD_PERSON_ID.includes(id) : id).map(id => searchPerson(id)))
                .then(() => hidePreloader());
            break;
        case 'planet':
            getAllPlanets();
            break;
    }
}
wookieeButton.addEventListener('click', reload);

clearContext = function () {
    if (container.hasChildNodes) {
        container.replaceChildren();
    };
    if (buttonBlocks.hasChildNodes) {
        buttonBlocks.replaceChildren();
    };
}

getResourse = async (url) => {
    showPreloader();
    const res = await fetch(`${_apiBase}${url}`)
    if (!res.ok) {
        throw new Error(`API error`)
    };
    return await res.json();
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

getAllPlanetsWookiee = async () => {
    showPreloader();
    const res = await fetch(`${_apiBase}/planets/?format=wookiee&page=${page}`).then((response) => {
        return response.text()
    }).then(response => { return JSON.parse(response.replaceAll(`whhuanan`, `"whhuanan"`)) })
    hidePreloader()
    return res;
}

getAllPlanets = async () => {
    clearContext();

    let next;
    let prev;
    const res = wookiee ?
        await getAllPlanetsWookiee() :
        await getResourse(`/planets/?page=${page}`);
    let results = wookiee ? res.rcwochuanaoc : res.results;

    buttonBlocks.insertAdjacentHTML('beforeend', `
        <button class="btn btn-primary disabled" id='prev' >PREVIOUS PAGE</button>
        <button class="btn btn-primary disabled" id='next' >NEXT PAGE</button>
                        `)

    const prevPage = document.getElementById('prev');
    const nextPage = document.getElementById('next');
    prevPage.addEventListener('click', () => {
        page = wookiee ? _extractPage(res.akrcwohoahoohuc) : _extractPage(res.previous);
        getAllPlanets();
    });
    nextPage.addEventListener('click', () => {
        page = wookiee ? _extractPage(res.whwokao) : _extractPage(res.next);
        getAllPlanets();
    });

    next = wookiee ? res.whwokao : res.next;
    prev = wookiee ? res.akrcwohoahoohuc : res.previous;
    if (next != null && next != 'whhuanan') {
        next = _extractPage(next);
        nextPage.classList.remove('disabled');
    }
    if (prev != null && prev != 'whhuanan') {
        prev = _extractPage(prev);
        prevPage.classList.remove('disabled');
    };

    for (let i = 0; i < 10; i++) {
        let planetInfo = await _transformPlanet(results[i]);
        let id = planetInfo.id;
        let url = await getPlanetImage({ id });
        container.insertAdjacentHTML('beforeend', `
                    <div class="planet card">
                        <img class="img" src=${url} id="planet${id}" />
                        <div class="card-body d-flex flex-column justify-content-end align-items-center">
                            <h3 class='card-title'>${wookiee ? 'Whrascwo' : 'Name'}: ${planetInfo.name}</h3 >
                            <h5 class='card-subtitle'>${wookiee ? 'Akooakhuanraaoahoowh' : 'Population'}: ${planetInfo.population}</h5>
                            <h5 class='card-subtitle'>${wookiee ? 'Waahrascwoaoworc' : 'Diameter'}: ${planetInfo.diameter}</h5>
                        </div >
                    </div >
                        `)
    };
    hidePreloader();
}

getPlanet = async ({ id }) => {
    const planet = await getResourse(`/planets/${id}`);
    return _transformPlanet(planet)
}

getPlanetImage = async ({ id }) => {
    let imgData = await fetch(`${_imgBase}/planets/${id}.jpg`)
    if (!imgData.ok) {
        return `${_imgBase}/big-placeholder.jpg`
    }
    return imgData.url;
}

_transformPlanet = async (planet) => {
    return wookiee ? {
        id: await _extractId(planet),
        name: planet.whrascwo,
        diameter: planet.waahrascwoaoworc,
        population: planet.akooakhuanraaoahoowh,
    } : {
        id: await _extractId(planet),
        name: planet.name,
        diameter: planet.diameter,
        population: planet.population,
    };
}

getFilm = async (id) => {
    const film = await getResourse(`/films/${id}`);
    return _transformFilm(film);
}

getWookieeFilm = async (id) => {
    const film = await getWookieeAllFilms(id);
    return _transformFilm(film);
}

getWookieeAllFilms = async (id = '') => {
    showPreloader();
    const res = await fetch(`https://swapi.dev/api/films/${id}?format=wookiee`)
        .then((response) => {
            return response.text()
        }).then((response) => { return JSON.parse(response.replaceAll(`whhuanan`, `"whhuanan"`).replaceAll(`\\`, "")) })
    return res;
}


getFilmImage = (id) => {
    return `${_imgBase}/films/${id}.jpg`
}

_transformFilm = (film) => {
    const arrIdPeople = [];
    const length = wookiee ? film.oaacrarcraoaaoworcc.length : film.characters.length;
    for (let i = 0; i < length; i++) {
        arrIdPeople.push((wookiee ? film.oaacrarcraoaaoworcc[i] : film.characters[i]).match(idReaExp)[1])
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

let filmsCount;
getFilms = async () => {
    clearContext();

    const res = wookiee ?
        await getWookieeAllFilms() :
        await getResourse(`/films/`)

    filmsCount = wookiee ? res.oaoohuwhao : res.count;

    let results = await (wookiee ? res.rcwochuanaoc : res.results).sort(function (a, b) {
        if (wookiee ? a.woakahcoowawo_ahwa > b.woakahcoowawo_ahwa : a.episode_id > b.episode_id) {
            return 1;
        }
        if (wookiee ? a.woakahcoowawo_ahwa < b.woakahcoowawo_ahwa : a.episode_id < b.episode_id) {
            return -1;
        }
        return 0;
    }); // Сортую для корректного відобюраження хронології;

    for (let i = 0; i < filmsCount; i++) {
        const filmInfo = _transformFilm(results[i]);
        let imgId;
        if (wookiee) {
            results[i].woakahcoowawo_ahwa > 3 ? imgId = results[i].woakahcoowawo_ahwa - 3 : imgId = results[i].woakahcoowawo_ahwa + 3
        } else {
            results[i].episode_id > 3 ? imgId = results[i].episode_id - 3 : imgId = results[i].episode_id + 3
        }
        container.insertAdjacentHTML('beforeend', `
                    <div class="film card" id=${imgId}>
                        <img class="img" src='${getFilmImage(imgId)}' alt="'Image not found'" id=${imgId}/>
                        <div class="card-body d-flex flex-column justify-content-end align-items-center" id=${imgId}>
                            <h4 class="card-title" id=${imgId}> ${wookiee ? 'Whrascwo' : 'Name'}: ${filmInfo.title} </h4>
                            <h5 class="card-subtitle" id=${imgId}> ${wookiee ? 'Rcwoanworacwo waraaowo' : 'Release date'}: ${filmInfo.release_date} </h5>
                            <h5 class="card-subtitle" id=${imgId}> ${wookiee ? 'Waahrcwooaaooorc' : 'Director'}: ${filmInfo.director} </h5>
                        </div >
                    </div>`);
        const film = document.getElementById(imgId);
        film.addEventListener('click', (e) => {
            (wookiee ? getWookieeFilm(e.target.id) : getFilm(e.target.id))
                .then(data => {
                    clearContext();
                    peopleListId = data.peopleId;
                    Promise.all(peopleListId.filter(id => wookiee ? !BAD_PERSON_ID.includes(id) : id).map(id => searchPerson(id)))
                        .then(() => hidePreloader());
                })
        });
    };
    hidePreloader()
};

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

getPerson = async (id) => {
    const people = wookiee ?
        await getResourse(`/people/${id}/?format=wookiee`) :
        await getResourse(`/people/${id}`);
    return _transformPeople(people);
}

getPersonImage = ({ id }) => {
    return `${_imgBase}/characters/${id}.jpg`
}


const searchPerson = async function (id) {
    await getPerson(id).then(person => {
        container.insertAdjacentHTML('beforeend', `
        <div class="person card">
            <img class="img" src='${getPersonImage({ id })}'>
            <div class="card-body d-flex flex-column justify-content-end align-items-center">
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
planets.addEventListener('click', () => {
    page = 1;
    getAllPlanets()
});

const form = document.querySelector('#searchForm');
const input = document.querySelector('#searchInput');
const button = document.querySelector('#searchButton');

const searchByForm = () => {
    const inputId = Math.floor(input.value);
    if (!inputId || inputId < 0 || inputId > filmsCount || !Number(inputId)) {
        console.log('Enter a movie number no larger than their number')
    }
    else {
        (wookiee ? getWookieeFilm(inputId) : getFilm(inputId)).then(data => {
            clearContext();
            peopleListId = data.peopleId;
            Promise.all(peopleListId.filter(id => wookiee ? !BAD_PERSON_ID.includes(id) : id).map(id => searchPerson(id)))
                .then(() => hidePreloader());
        })
    };
};

const onFormSubmit = (e) => {
    e.preventDefault();
    searchByForm();
    form.reset();
};

form.addEventListener('submit', onFormSubmit);

