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
    return Object.keys(students.subjects)
};

const getAverageMark = (students) => {
    const marksArr = Object.values(students.subjects).flat();
    const avarageMark = marksArr.reduce((a, b) => a + b, 0) / marksArr.length;

    return Number(avarageMark.toFixed(2));
};

const getStudentInfo = (students, getAverageMark) => {
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
    const names = []
    students.forEach(element => names.push(element.name));

    return names.sort((a, b) => a !== b ? a < b ? -1 : 1 : 0);
};

//const getBestStudent = (students) => {
//    const listStud = []
//
//};

//const calculateWordLetters = (word) => {
//
//};

console.log(`Список предметів ${students[0].name}:`, getSubjects(students[0]));
console.log(`Середню оцінку по усім предметам ${students[0].name}:`, getAverageMark(students[0]));
console.log('Інформація по студенту:', getStudentInfo(students[0], getAverageMark));
console.log(`Імена студентів у алфавітному порядку:`, getStudentsNames(students));
//console.log(`Кращий студент: ${getBestStudent(students, getAverageMark)}`);
//console.log(`Об'єкт з кількістю входжень літер у слові: ${calculateWordLetters(word)}`);
