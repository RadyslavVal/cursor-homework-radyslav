import '../styles/index.css';

import { sum } from '../functions/hw1.js';
import { getRandomPasswords } from '../functions/hw3.js';
import { getMarks } from '../functions/hw4.js';
import { replaceBadWords } from '../functions/hw7.js';
import { getSubjects } from '../functions/hw8.js';
import { getMiddleTaxes } from '../functions/hw9.js';
import { Student } from '../functions/hw10.js';

console.log(`HW1 => function sum([11, 12, 13]) => result ${sum([11, 12, 13])}`);
console.log(`HW3 => function getRandomPasswords(8) => result ${getRandomPasswords(8)}`);
console.log(`HW4 => function getMarks(["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"], [4, 5, 5, 3, 4, 5]) => result ${getMarks(["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"], [4, 5, 5, 3, 4, 5])}`);
console.log(`HW7 => function replaceBadWords("Oh fuck, this is fuck!", "fuck") => result ${replaceBadWords("Oh fuck, this is fuck!", "fuck")}`);
const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}]
console.log(`HW8 => function getSubjects(students[0]) => result ${getSubjects(students[0])}`);
console.log(`HW9 => function getMiddleTaxes({ tax: 0.2, middleSalary: 2000}) => result ${getMiddleTaxes.call({ tax: 0.2, middleSalary: 2000 })}`);
const newStudent = new Student('Тверда Голова', 'Технічний ВУЗ Копання Печер, м. Гномськ', 1, [5, 4, 4, 4]);
console.log(`HW10 => function Student.studentMarks => result ${newStudent.studentMarks}`);
