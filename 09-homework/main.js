"use strict";

const UKRAINE = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const LATVIA = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const LITVA = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };
const COUNTRYS = [UKRAINE, LATVIA, LITVA];
const countrys = ['Україні', 'Латвії', 'Литві']

function getMyTaxes(salary) {
    return (this.tax * salary).toFixed(2);
};

function getMiddleTaxes() {
    return (this.middleSalary * this.tax).toFixed(2);
};

function getTotalTaxes() {
    return (this.middleSalary * this.tax * this.vacancies).toFixed(2);
};

function getMySalary() {
    let tranormCountry = '';
    countrys[randomCountry].endsWith('і') ?
        tranormCountry = countrys[randomCountry].slice(0, countrys[randomCountry].length - 1) + 'а' :
        tranormCountry = countrys[randomCountry].slice(0, countrys[randomCountry].length - 1) + 'я';

    const loggerInfo = () => {
        const salary = getRandomValues(1500, 2000);
        const taxes = +(getMyTaxes.call(this, salary));
        console.log(tranormCountry, {
            salary: salary,
            taxes: taxes,
            profit: salary - taxes
        });
    }
    loggerInfo()

    setInterval(loggerInfo, 10000);
}


const getRandomValues = (min, max) => {
    return Math.floor(Math.random() * (Math.floor(Math.max(min, max)) - Math.ceil(Math.min(min, max)) + 1)) + min;
};

const salary = 2000;
const randomCountry = getRandomValues(0, 2);
const country = COUNTRYS[randomCountry];


console.log(`Податок в ${countrys[randomCountry]} складає ${country.tax * 100}%, з ЗП ${salary} $ доведеться заплатити:`, getMyTaxes.call(country, salary) + '$');
console.log(`Середній податок в ${countrys[randomCountry]} складає: `, getMiddleTaxes.call(country) + '$');
console.log(`Всього заплатили податків в ${countrys[randomCountry]}: `, getTotalTaxes.call(country) + '$');
getMySalary.call(country);


