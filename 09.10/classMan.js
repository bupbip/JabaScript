// class Man {
//   className = "Класс Человек";
//   classDescription =
//     "Класс предназначен для создания объектов Человек, позволяющих хранить ФИО и дату рождения конкретных людей";

//   constructor(name, lastName) {
//     this.name = name;
//     this.lastName = lastName;
//   }

//   get birthDate() {
//     return this._birthDate;
//   }
//   set birthDate(val) {
//     return (this._birthDate = val);
//   }
//   fullName() {
//     return this.lastName + " " + this.name;
//   }
//   age() {
//     var birthDate = new Date(this._birthDate);
//     var currDate = new Date();
//     var diff = currDate.getTime() - birthDate.getTime();
//     var diffYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
//     return diffYears;
//   }
// }

// var man1 = new Man("Ivan", "Muravev");
// print(man1);
// man1.birthDate = "06.07.2002";
// print(man1.age());

// class Teacher extends Man {
//   constructor(name, lastName, department) {
//     super(name, lastName);
//     this.department = department;
//   }
// }

// var teacher1 = new Teacher("Петр", "Петров", "кафедра физики");
// print(teacher1);