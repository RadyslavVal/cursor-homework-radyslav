const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

const getSubjects = (students) => {
    if (!students) {
        return "Select a student"
    }

    const result = []
    const studentSubj = Object.keys(students.subjects);
    studentSubj
        .forEach(elem => result.push(
            elem.replaceAll("_", " ").slice(0, 1).toUpperCase()
            + elem.replaceAll("_", " ").slice(1)
        ))

    return result
};

const getAverageMark = (students) => {
    if (!students) {
        return "Select a student"
    }
    const marksArr = Object.values(students.subjects).flat();
    const avarageMark = marksArr.reduce((a, b) => a + b, 0) / marksArr.length;

    return Number(avarageMark.toFixed(2));
};

const getStudentInfo = (students, getAverageMark) => {
    if (!students) {
        return "Select a student"
    }

    const studentInfo = Object.entries(students)
    const res = {}
    for (const [key, value] of studentInfo) {
        if (key != 'subjects') {
            res[key] = value;
        }
    }
    res['avarageMark'] = getAverageMark(students);

    return res;
};

const getStudentsNames = (students) => {
    if (!students) {
        return "Select a student"
    }

    const names = []
    students.forEach(element => names.push(element.name));

    return names.sort();
};

const getBestStudent = (students) => {
    if (!students) {
        return "Select a student"
    }

    const listStud = {}
    students.forEach(element => listStud[element.name] = getAverageMark(element));

    return Object.entries(listStud).reduce((acc, curr) => acc[1] > curr[1] ? acc : curr)[0];
};

const calculateWordLetters = (word) => {
    if (!word || typeof (word) !== 'string') {
        return "Enter some string"
    }

    const transfWord = word.trim().replace(/\s+/g, '').toLowerCase();
    const result = {};

    for (let i = 0; i < transfWord.length; i++) {
        let letter = transfWord[i];
        if (!result.hasOwnProperty(letter)) {
            result[letter] = 1;
        }
        else {
            result[letter] += 1;
        };
    };

    return result;
};

console.log(`Список предметів :`, getSubjects(students[0]));
console.log(`Середню оцінку по усім предметам :`, getAverageMark(students[0]));
console.log('Інформація по студенту:', getStudentInfo(students[2], getAverageMark));
console.log(`Імена студентів у алфавітному порядку:`, getStudentsNames(students));
console.log(`Кращий студент:`, getBestStudent(students, getAverageMark));
console.log(`Об'єкт з кількістю входжень літер у слові:`, calculateWordLetters("  A b ab  a Ga lAm   aga   "));
