//функция факториал(число)
function factorial(num) {
  // Объъявление переменных
  var result;
  var index;
  var isEmpty = true;
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
    result = 1;
    // Цикл: от 1 до число
    for (var i = 1; i <= num; i++) {
      // Результат = Результат * Переменная цикла
      result *= i;
    }
  }

    factorial.resultList[num] = result;
    console.log("Поместили данные в кэш", num, result, factorial.resultList);
    // Возврат результат
  return result;
}

factorial(3);
factorial(6);