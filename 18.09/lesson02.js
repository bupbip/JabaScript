//функция факториал(число)
function factorial(num, callBackFunction) {
  // Объъявление переменных
  //console.log(callBackFunction);
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

  // Проверка переменной калл БЕК
  if (typeof callBackFunction == "function") {
    callBackFunction(result);
  }

  return result;
}

// console.log(factorial(4));

// factorial(4,alert);
// Напишем функцию вывода на экран, познакомимся с DOM-ом

// function msg(str){     не работает
//     var a = document.getElementsByTagName("p");
//     console.log(a.length);
//     a[0].innerHTML = str;
// }

// factorial(4,msg);

// function f(_delta = 1){
//     var _count = 0;
//     return function(delta = _delta){
//         return _count += delta;
//     }
// }

// var medium = f();

// console.log(medium());
// console.log(medium());
// console.log(medium(100));

// var medium100 = f(100);

// console.log(medium100());
// console.log(medium100());
// console.log(medium100(200));

// (function (x, y) {
//   console.log(x + y);
// })(1, 2);


// var add = function()
// {
//     var _count = 0;
//     var f =
//     function (x,y)
//         {
//             _count++;
//             return x + y;
//         }
//     f.count = function() {return _count;};
//     return f;
// }();

// console.log(add(1,2));
// console.log(add(3,4));
// console.log(add.count());


// var factorial = function(_f)
// {
//     var _count = 0;
//     var f =
//     function (n)
//         {
//             _count++;
//             return _f(n);
//         }
//     f.getCount = function() {return _count;};
//     return f;
// }(factorial);

console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial.getCount());

