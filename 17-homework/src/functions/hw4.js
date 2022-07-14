const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

export const getRandomNumberFromRange = (N, M) => {
    if (isNaN(N) || isNaN(M)) {
        return "Enter only numbers"
    }

    let min = Math.ceil(Math.min(N, M));
    let max = Math.floor(Math.max(N, M));

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const getPairs = arrStudents => {
    let girls = [];
    let boys = [];
    let resPairs = [];

    for (let i = 0; i < arrStudents.length; i++) {
        let nameLength = arrStudents[i].length;
        if (arrStudents[i].charAt(nameLength - 1) == 'а') {
            girls.push(arrStudents[i])
        }
        else boys.push(arrStudents[i])
    };

    for (let i = 0; i < boys.length; i++) {
        resPairs.push([boys[i], girls[i]])
    };

    return resPairs;
};

export const getPairsThemes = (arrPairs, arrThemes) => {
    let pairsThemes = [];

    for (let i = 0; i < arrThemes.length; i++) {
        pairsThemes.push([`${arrPairs[i][0]} і ${arrPairs[i][1]}`, arrThemes[i]])
    };

    return pairsThemes;
};

export const getMarks = (arrStudents, arrMarks) => {
    let studentsMarks = [];

    for (let i = 0; i < arrStudents.length; i++) {
        studentsMarks.push([arrStudents[i], arrMarks[i]])
    };

    return studentsMarks;
};

export const getPairsMarks = (arrPairsThemes) => {
    let pairsMarks = [];

    for (let i = 0; i < arrPairsThemes.length; i++) {
        pairsMarks.push([...arrPairsThemes[i], getRandomNumberFromRange(1, 5)])
    };

    return pairsMarks;
};

