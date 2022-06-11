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

const getSubjects = () => {
    if (!student) {
        return "Select a student"
    }

    const result = []
    const studentSubj = Object.keys(student.subjects);
    studentSubj
        .forEach(elem => result.push(
            elem.slice(0, 1).replaceAll("_", " ").toUpperCase()
            + elem.slice(1).replaceAll("_", " ")
        ));

    return result
};

const getAverageMark = () => {
    if (!student) {
        return "Select a student"
    }
    const marksArr = Object.values(student.subjects).flat();
    const avarageMark = marksArr.reduce((a, b) => a + b, 0) / marksArr.length;

    return Number(avarageMark.toFixed(2));
};

const getStudentInfo = () => {
    if (!student) {
        return "Select a student"
    }

    const studentInfo = Object.entries(student)
    const res = {}
    for (const [key, value] of studentInfo) {
        if (key != 'subjects') {
            res[key] = value;
        }
    }
    res['avarageMark'] = getAverageMark(student);

    return res;
};

const getStudentsNames = () => {
    if (!students) {
        return "Select a student"
    }

    const names = students.map(student => student.name).sort();

    return names;
};

const getBestStudent = () => {
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
        result.hasOwnProperty(letter) ? result[letter] += 1 : result[letter] = 1;
    };

    return result;
};


const getRandomStudent = (min, max) => {
    return Math.floor(Math.random() * (Math.floor(Math.max(min, max)) - Math.ceil(Math.min(min, max)) + 1)) + min;
};
const student = students[getRandomStudent(0, 2)];

console.log(`Список предметів :`, getSubjects());
console.log(`Середню оцінку по усім предметам :`, getAverageMark());
console.log('Інформація по студенту:', getStudentInfo());
console.log(`Імена студентів у алфавітному порядку:`, getStudentsNames());
console.log(`Кращий студент:`, getBestStudent());
console.log(`Об'єкт з кількістю входжень літер у слові:`, calculateWordLetters("  AAB fbsdf sABBF EFB FDS    "));
