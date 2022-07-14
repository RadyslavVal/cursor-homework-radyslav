"use strict";

const UKRAINE = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const LATVIA = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const LITVA = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };
const COUNTRYS = [UKRAINE, LATVIA, LITVA];
const countrys = ['Україні', 'Латвії', 'Литві']

export function getMyTaxes(salary) {
    return (this.tax * salary).toFixed(2);
};

export function getMiddleTaxes() {
    return (this.middleSalary * this.tax).toFixed(2);
};

export function getTotalTaxes() {
    return (this.middleSalary * this.tax * this.vacancies).toFixed(2);
};

export function getMySalary() {
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

