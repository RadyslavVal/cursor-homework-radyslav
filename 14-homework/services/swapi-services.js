export default class SwapiService {
    _apiBase = 'https://swapi.dev/api'
    _imgBase = 'https://starwars-visualguide.com/assets/img'

    getResourse = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        };
        return await res.json();
    }

    getAllPeople = async () => {
        const res = await this.getResourse(`/people/`)
        return res.results.map(this._transformPeople);
    }

    getPerson = async (id) => {
        const people = await this.getResourse(`/people/${id}`);
        return this._transformPeople(people);
    }

    getPersonImage = ({ id }) => {
        return `${this._imgBase}/characters/${id}.jpg`
    }

    getAllPlanets = async () => {
        const res = await this.getResourse(`/planets/`);
        return res.results.map(this._transformPlanet);
    }

    getPlanet = async (id) => {
        const planet = await this.getResourse(`/planets/${id}`);
        return this._transformPlanet(planet)
    }

    getPlanetImage = ({ id }) => {
        return `${this._imgBase}/planets/${id}.jpg`
    }

    getAllStarships = async () => {
        const res = await this.getResourse(`/starships/`)
        return res.results.map(this._transformStarship);
    }

    getStarship = async (id) => {
        const starship = await this.getResourse(`/starships/${id}`);
        return this._transformStarship(starship);
    }

    getStarshipImage = ({ id }) => {
        return `${this._imgBase}/starships/${id}.jpg`
    }

    _extractId = (item) => {
        const idReaExp = /\/([0-9]*)\/$/;
        return item.url.match(idReaExp)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            diameter: planet.diameter,
            population: planet.population,
        };
    }

    _transformPeople = (people) => {
        return {
            id: this._extractId(people),
            name: people.name,
            gender: people.gender,
            birthYear: people.birth_year,
        };
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            length: starship.length
        };
    }
};
