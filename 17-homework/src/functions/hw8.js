export const getSubjects = (student) => {
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

export const getAverageMark = (student) => {
    if (!student) {
        return "Select a student"
    }
    const marksArr = Object.values(student.subjects).flat();
    const avarageMark = marksArr.reduce((a, b) => a + b, 0) / marksArr.length;

    return Number(avarageMark.toFixed(2));
};

export const getStudentInfo = (student) => {
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

export const getStudentsNames = (students) => {
    if (!students) {
        return "Select a student"
    }

    const names = students.map(student => student.name).sort();

    return names;
};

export const getBestStudent = (students) => {
    if (!students) {
        return "Select a student"
    }

    const listStud = {}
    students.forEach(element => listStud[element.name] = getAverageMark(element));

    return Object.entries(listStud).reduce((acc, curr) => acc[1] > curr[1] ? acc : curr)[0];
};

export const calculateWordLetters = (word) => {
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


