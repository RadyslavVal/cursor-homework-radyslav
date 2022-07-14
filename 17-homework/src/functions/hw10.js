"use strict";

export class Student {
    constructor(fullName, university, course, marks = [], status = true) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.status = status;
    }

    get info() {
        return this.status ?
            `Студент ${this.course}го курсу ${this.university}, ${this.fullName}.` :
            `${this.fullName} був виключений.`;
    }

    get studentMarks() {
        if (!this.status) {
            return null;
        };
        return this.marks.length > 0 ?
            this.marks :
            `${this.fullName} ще не отримував оцінок.`;
    }

    set studentMarks(mark) {
        if (!this.status) {
            console.log(null);
        }
        else if (Number(mark) > 0 && Number(mark) < 6) {
            this.marks.push(Number(mark));
            console.log(this.marks);
        }
        else console.log('Поставте оцінку від 1 до 5')
    }

    getAverageMark() {
        if (!this.status) {
            return null;
        };
        return this.marks.length > 0 ?
            (this.marks.reduce((a, b) => Number(a) + Number(b), 0) / this.marks.length).toFixed(2) :
            `${this.fullName} ще не отримував оцінок.`;
    }

    dismiss() {
        this.status = false;
        return `${this.fullName} був виключений.`;
    }

    recover() {
        this.status = true;
        return `${this.fullName} був поновлений.`;
    }
}

const student1 = new Student('Остап Бендер', 'Вищої Школи Психотерапії м. Одеса', 1, [5, 4, 4, 5]);

class BudgetStudent extends Student {
    constructor(fullName, university, course, marks = [], status = true) {
        super(fullName, university, course, marks, status);
        setInterval(() => this.getScholarship, 30000);
    }

    getScholarship() {
        if (!this.status) {
            return console.log(`${this.fullName} був виключений.`);
        }
        else if (this.getAverageMark() < 4) {
            return console.log('Треба підняти середній бал вище 4.0')
        }
        console.log('Ви отримали 1400грн. стипендії');
    }
}

const budgetStudent = new BudgetStudent('Тверда Голова', 'Технічний ВУЗ Копання Печер, м. Гномськ', 1, [5, 4, 4, 4]);

