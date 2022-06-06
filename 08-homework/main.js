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

};

const getAverageMark = (students) => {

};

const getStudentInfo = (students) => {

};

const getStudentsNames = (students) => {

};

const getBestStudent = (students) => {

};

const calculateWordLetters = (word) => {

};

console.log(`Список предметів ${students[x].name}: ${getSubjects(students[x])}`);
console.log(`Середню оцінку по усім предметам ${students[x].name}: ${getAverageMark(students[x])}`);
console.log(`Інформація по студенту ${students[x].name}: ${getStudentInfo(students[x])}`);
console.log(`Імена студентів у алфавітному порядку: ${getStudentsNames(students)}`);
console.log(`Кращий студент: ${getBestStudent(students)}`);
console.log(`Об'єкт з кількістю входжень літер у слові: ${calculateWordLetters(word)}`);
