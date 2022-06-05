const getRandomArray = (length, min, max) => {
    const getRandomNumberFromRange = (min, max) => {
        return Math.floor(Math.random() * (Math.floor(Math.max(min, max)) - Math.ceil(Math.min(min, max)) + 1)) + min;
    };
    let resultArr = [];
    for (let i = 0; i < length; i++) {
        resultArr.push(getRandomNumberFromRange(min, max))
    };
    return resultArr;
};

const getModa = (...numbers) => {
    let obj = {};

    for (let i = 0; i < numbers.length; i++) {
        if (Number.isInteger(numbers[i])) {
            let key = numbers[i];
            if (!obj.hasOwnProperty(key)) {
                obj[key] = 1;
            }
            else {
                obj[key] += 1;
            };
        }
    };

    const result = []
    const arrFromObj = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    result.push(arrFromObj[0][0]);
    for (let i = 1; i < arrFromObj.length; i++) {
        if (arrFromObj[i][1] == arrFromObj[0][1]) {
            result.push(arrFromObj[i][0]);
        }
    }

    return result.map(Number);
};

const getAverage = (numbers) => {
    let array = numbers.filter(elem => Number.isInteger(elem));

    const average = array.reduce(
        (previousValue, currentValue) =>
            previousValue + currentValue,
        0) / array.length;

    return average;
};

const getMedian = (numbers) => {
    let array = numbers
        .filter(elem => Number.isInteger(elem))
        .sort(function (a, b) { return a - b });
    if (array.length % 2 === 1) {
        return array[(array.length - 1) / 2]
    }

    return (array[(array.length) / 2] + array[(array.length) / 2 - 1]) / 2;
};

const filterEvenNumbers = (numbers) => {
    let array = numbers
        .filter(elem => Number.isInteger(elem))
        .filter(elem => elem % 2 == 1);

    return array;
};

const countPositiveNumbers = (numbers) => {
    const counter = numbers.filter(elem => elem > 0).length;

    return counter;
};

const getDividedByFive = (numbers) => {
    const dividedByFive = numbers.filter(elem => elem % 5 == 0);

    return dividedByFive;
};

const replaceBadWords = (string, ...badWords) => {
    const words = string.split(" ");
    const badWorlds = [...badWords];

    words.forEach((word) => {
        for (let i = 0; i < badWorlds.length; i++) {
            if (word.includes(badWorlds[i])) {
                words.splice(
                    words.indexOf(word), 1, word.replace(badWorlds[i], '*'.repeat(badWorlds[i].length))
                );
                break;
            };
        };
    });

    return words.join(" ");
}

const divideByThree = (word) => {
    const transfWord = word
        .trim()
        .split(" ")
        .filter(elem => elem.length > 0)
        .join("")
        .toLowerCase();
    const result = [];
    const integerLength = transfWord.length - transfWord.length % 3;
    if (transfWord.length <= 3) {
        result.push(transfWord)
    }
    else if (transfWord.length > 3) {
        for (let i = 0; i < integerLength; i += 3) {
            result.push(transfWord.slice(i, i + 3))
        }
    }
    result.push(transfWord.slice(integerLength, transfWord.length));

    return [...result].filter(elem => elem.length > 0);
};

const generateCombinations = (word) => {
    if (word.length > 10) {
        return "Enter a word less than 10 characters"
    }

    const result = [];
    for (let i = 0; i < word.length; i++) {
        let combinationChar = generateCombinations(word.slice(0, i) + word.slice(i + 1, word.length));
        for (let j = 0; j < combinationChar.length; j++) {
            result.push(word[i] + combinationChar[j]);
        }
        if (word.length < 2) return [word];
    }

    let resWithoutDupl = new Set(result)
    return [...resWithoutDupl];
};


const randomArray = getRandomArray(15, 1, 100);
console.log(`getRandomArray:  ${randomArray}`);
console.log(`getModa: ${getModa(...randomArray)}`);
console.log(`getAverage: ${getAverage(randomArray)}`);
console.log(`getMedian: ${getMedian(randomArray)}`);
console.log(`filterEvenNumbers: ${filterEvenNumbers(randomArray)}`);
console.log(`countPositiveNumbers: ${countPositiveNumbers([1, -2, 3, -4, -5, 6])}`);
console.log(`getDividedByFive: ${getDividedByFive(randomArray)}`);
console.log(`replaceBadWords: ${replaceBadWords("It's bullshit!", 'shit', 'fuck')}`);
console.log(`divideByThree: ${divideByThree("   C   omm  an  d e r   ")}`);
console.log(`generateCombinations: ${generateCombinations('anagrama')}`);

