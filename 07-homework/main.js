const getRandomArray = (length, min, max) => {
    const getRandomNumberFromRange = (min, max) => {
        return Math.floor(Math.random() * (Math.floor(Math.max(min, max)) - Math.ceil(Math.min(min, max)) + 1)) + min;
    };
    let = resultArr = [];
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

    let result = Object.entries(obj).reduce((max, n) => n[1] > max[1] ? n : max)
    return Number(result[0]);
};

const getAverage = (...numbers) => {

};

const getMedian = (...numbers) => {

};

const filterEvenNumbers = (...numbers) => {

};

const countPositiveNumbers = (...numbers) => {

};

const getDividedByFive = (...numbers) => {

};

const replaceBadWords = (string) => {

};

const divideByThree = (word) => {

};

const generateCombinations = (word) => {

};

console.log(getRandomArray(15, 1, 100));
console.log(getModa(...getRandomArray(15, 1, 100)));
console.log(getAverage(...numbers));
console.log(getMedian(...numbers));
console.log(filterEvenNumbers(...numbers));
console.log(countPositiveNumbers(...numbers));
console.log(getDividedByFive(...numbers));
console.log(replaceBadWords(string));
console.log(divideByThree(word));
console.log(generateCombinations(word));

