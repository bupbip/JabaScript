/** 
  * Функция для вычисления факториала
  * принимает число
  * выводит его факториал
  @param integer
  @returns integer
*/
function factorial(num,callBackFunction) {
  // Объъявление переменных
  var result;
  var index;
  var isEmpty = true;
  if (typeof factorial.count != "number") {
    factorial.count = 0;
  }
  factorial.count++;

  if (typeof num == "number") {
    num = BigInt(num);
  } else if (typeof this.value == "number") {
    this.value = BigInt(this.value);
  }
  // Если у объекта есть свойство value, то рассчитываем его факториал
  if (num == undefined && typeof this.value == "bigint") {
    num = this.value;
  }

  // Проверка: Число больше или равно 0
  if (num < 0) {
    result = undefined;
  }
  // Проверка: Максимальное значение не выше допустимого
//   else if (num > Number.MAX_SAFE_INTEGER) {
//     // 2^53 - 1
//     result = undefined;
//   }
  // Проверка: Число должно быть целым
//   else if (num % 1 != 0) {
//     result = undefined;  УСТАРЕЛО С BIGINT
//   }

  // Если число == 0 то, возврат 1
  else if (num == 0) {
    result = 1;
  }
  if (typeof factorial.resultList != "object") {
    factorial.resultList = {};
  }
  if (typeof factorial.resultList[num] == "number") {
    result = factorial.resultList[num];
  } else {
    for (var i = num; i > 0; i--) {
      if (typeof factorial.resultList[i] == "number") {
        result = factorial.resultList[i];
        index = i;
        isEmpty = false;
        break;
      }
    }
  }

  if (!isEmpty) {
    for (var i = index; i < num; i++) {
      result *= i + 1;
    }
  } else {
    // Результат = 1
    result = 1n;
    // Цикл: от 1 до число
    for (var i = 1n; i <= num; i++) {
      // Результат = Результат * Переменная цикла
      result *= i;
    }
  }

  factorial.resultList[num] = result;
  //console.log("Поместили данные в кэш", num, result, factorial.resultList);


  // Возврат результат
  if(typeof callBackFunction == 'function'){
      callBackFunction(result);
  } else{
    return result;
  }

}

/* Фукнция обертка для вызова консоль лог
*/
function cl(print,...anotherPrint) { // оператор rest
  console.log(print,...anotherPrint); // оператор spread
}

/** 
  * Функция для вычисления случайного целого числа в заданном диапазоне
  * Принимает первое и последнее число диапазона
  @param integer
  @param integer
  @returns integer
*/

function r(min,max){
    if(typeof min !== 'number' || typeof max !== 'number'){
        return undefined;
    }
    if(min % 1 != 0 || max % 1 != 0){
        min = Math.floor(min);
        max = Math.floor(max);
    }
    if(min > max){
        [min,max] = [max,min];
    }

    return Math.floor(Math.random() * (max - min + 1) + min);
}


function Person(name, age){
    this.name = name;
    this.age = age;
}

var _Person = {
    sayName: function(){
        return this.name;
    },
    sayAge: function() {
        return this.age;
    }
}

Person.prototype = _Person;
_Person.constructor = Person;

// function Student(name, age,vuz,course) {
//     this.name = name;
//     this.age = age;
//     this.vuz = vuz;
//     this.course = course;
// }

function Student(name, age, vuz, course) {
    Person.call(this, name, age);
    this.vuz = vuz;
    this.course = course;
}

var _Student = {
    sayVuz: function() {
        return this.vuz;
    },
    sayCourse: function() {
        return this.course;
    }
}

Student.prototype = _Student;
_Student.constructor = Student;
Student.prototype.__proto__ = Person.prototype;

// есть обджект,у  него есть объект обджект
// есть 3д принтер персон который мы сделали, у него в качестве прототипа _person
// есть объекты p1 и p2. Они оба ссылаются на person через proto



function str(...value){
    this.contain = value; 
    this.size = this.contain.length;
}

var _str = {
    printRandom: function(contain) {
        return this.contain[r(0,this.size-1)];
    },
    toString: function(contain) {
        return this.contain[r(0,this.size-1)];
    }
}

//str.prototype = String.prototype; // функция-близнец стринга         не расширить нормально
str.prototype = _str;
_str.constructor = str; 
str.prototype.__proto__ = new String(); // создаем какой-то объект и его помещаем в прототип

// console.log(s1.printRandom());
function b(val){
    document.getElementsByTagName("body")[0].innerHTML = val;
    return val;
}