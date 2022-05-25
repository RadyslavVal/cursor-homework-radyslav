

const getMaxDigit = number => {
    let arr = number.toString().split('');
    let resArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i])) {
            resArr.push(Number(arr[i]))
        }
    };

    return Math.max(...resArr);
}


const degreeOf = (base, exponent) => {
    let result = base;

    for (let i = 2; i <= Math.abs(exponent); i++) {
        result *= base;
    };
    if (exponent === 0) {
        return 1;
    }
    else if (exponent < 0) {
        return 1 / result;
    }

    return result;
}


const nameFormater = name => {
    let formatedName = name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();

    return formatedName;
};


const netSalary = number => {
    const TAX = (18 + 1.5) / 100;
    let salary = Number(number);

    if (isNaN(salary)) {
        return ("Enter salary (numbers only)")
    } else if (Number(salary) < 0) {
        return ("Your salary can't be lower than 0")
    }

    return (salary * (1 - TAX)).toFixed(2)
}


const getRandomNumberFromRange = (N, M) => {
    if (isNaN(N) || isNaN(M)) {
        return "Enter only numbers"
    }

    let min = Math.ceil(Math.min(N, M));
    let max = Math.floor(Math.max(N, M));

    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const numberOfRepetitions = (letter, string) => {
    if (letter.toString().length > 1) {
        return "Enter one letter"
    };
    if (string.toString().length < 1) {
        return "Please enter a valid string (at least 1 character)"
    };

    let result = {};
    let transformString = string.toString().toLowerCase();
    let letterKey = letter.toString().toLowerCase();
    result[`${letterKey}`] = 0;

    for (let i = 0; i < transformString.length; i++) {
        if (transformString[i] === letterKey) {
            result[`${letterKey}`] += 1;
        }
    };

    return result[`${letterKey}`];
}


const convertCurency = curency => {
    let sumForConv = parseInt(curency);
    let coin = curency.slice(sumForConv.toString().length);

    if (sumForConv <= 0) {
        return 'Please enter a value greater than 0'
    }

    switch (coin.toUpperCase()) {
        case '$':
            return `${sumForConv * 25}грн`
        case 'UAH':
            return `${sumForConv / 25}$`
        case '':
            return 'Select the currency you want to convert'
        default:
            return 'Converter work only with UAH and $'
    }
}


const getRandomPasswords = (passLength = 8) => {
    if (passLength <= 0 || isNaN(passLength)) {
        return 'Please enter a valid value( number greater than 0)'
    }

    let result = []

    for (let i = 1; i <= passLength; i++) {
        result.push(getRandomNumberFromRange(0, 9))
    }

    return result.join('')
}



const deleteLetters = (letter, string) => {
    if (letter.toString().length > 1) {
        return "Enter one letter"
    };
    if (string.toString().length < 1) {
        return "Please enter a valid string (at least 1 character)"
    };

    let transformString = string.toString();
    let transformLetter = letter.toString().toLowerCase();

    let result = '';
    for (let i = 0; i < transformString.length; i++) {
        if (transformString[i].toLowerCase() != transformLetter) {
            result += transformString[i];
        };
    };

    return result;
}


const isPalyndrom = string => {
    if (string.toString().length < 1) {
        return "Please enter a valid string (at least 1 character)"
    };

    let transformString = string.toString().toLowerCase().split(' ').join('');
    let reverseString = transformString.split('').reverse().join('');

    return transformString == reverseString
}


const deleteDuplicateLetters = string => {
    if (string.toString().trim().length < 1 ) {
        return "Please enter a valid string (at least 1 character)"
    };

    let result = '';
    let obj = new Object();
    let transformString = string.toString().toLowerCase().split(' ').join('');

    for (let i = 0; i < transformString.length; i++) {
        let key = transformString[i];
        if (!obj.hasOwnProperty(key)) {
            obj[key] = 1;
        }
        else {
            obj[key] += 1;
        };
    };

    for (var key in obj) {
        if(obj[key] == 1) {
            result += key;
        };
    };

    return result;
}


console.log(getMaxDigit('-fs,dfmjn534-5o2-3kn3jn09'));
console.log(degreeOf(7, 3));
console.log(nameFormater('nAmE'));
console.log(netSalary('1000'));
console.log(getRandomNumberFromRange(3, '-3'));
console.log(numberOfRepetitions('а', 'Абабагаламага'));
console.log(convertCurency('100UAH'));
console.log(getRandomPasswords());
console.log(deleteLetters('a', 'BlAbLaBLA'));
console.log(isPalyndrom('      Я н      Е  с У гУСЕНя    '));
console.log(deleteDuplicateLetters('Бісквіт був дуже ніжним'));

