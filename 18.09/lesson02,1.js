var o1 = {};
var o2 = {};

// console.log(o1 == o2); // false
// console.log(o1 < o2); // false
// console.log(o1 <= o2); // true ТК <= это отрицание от больше, поулчаем !false

//функция факториал(число)
function factorial(num) {
  // Объъявление переменных
  var result;
  if (typeof factorial.count != "number") {
    factorial.count = 0;
  }
  factorial.count++;
  // Если у объекта есть свойство value, то рассчитываем его факториал
  if (num == undefined && typeof this.value == "number") {
    num = this.value;
  }
  // Проверка: Тип Число = число
  if (typeof num != "number") {
    result = undefined;
  }
  // Проверка: Число больше или равно 0
  else if (num < 0) {
    result = undefined;
  }
  // Проверка: Максимальное значение не выше допустимого
  else if (num > Number.MAX_SAFE_INTEGER) {
    // 2^53 - 1
    result = undefined;
  }
  // Проверка: Число должно быть целым
  else if (num % 1 != 0) {
    result = undefined;
  }

  // Если число == 0 то, возврат 1
  else if (num == 0) {
    result = 1;
  }
  if (typeof factorial.resultList != "object") {
    factorial.resultList = new Object();
  }
  if (typeof factorial.resultList[num] == "number") {
    result = factorial.resultList[num];
  } else {
    // Результат = 1
    result = 1;
    // Цикл: от 1 до число
    for (var i = 1; i <= num; i++) {
      // Результат = Результат * Переменная цикла
      result *= i;
    }
    factorial.resultList[num] = result;
    console.log("Поместили данные в кэш", num, result, factorial.resultList);
    // Возврат результат
  }
  if (this.constructor == factorial) {
    this.value = num;
    this.factorial = result;
  }
  //   console.log(typeof factorial.resultList);
  //   console.log(factorial.resultList);
  return result;
}

console.log(factorial(3));
console.time();
console.log(factorial(100));
console.timeEnd();
console.time();
console.log(factorial(100));
console.timeEnd();
console.time();
console.log(factorial(100));
console.timeEnd();

// // Метод функция
// var o = {f: factorial, value:7}
// console.log(o.f(3))
// console.log(o.f())

// Лог типы:

// console.log(1 && 2); // 2
// console.log(1 && 0); // 0
// console.log(0 && 1); // 0

// console.log(1 || 2); // 1
// console.log(1 || 0); // 1
// console.log(0 || 1); // 1

// // попробуем запустить метод как функцию
// var obj = {f: function(x,y) {return x + y}}
// console.log(obj.f(5,7));

// var fff = obj.f;
// console.log(fff(4,6));

// var num1 = new factorial(10);
// console.log(num1);

// var n = new Number(5);
// console.log(n.constructor == Number);

// console.log(factorial(10));
// factorial.count = "qqq";
// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial.count);
