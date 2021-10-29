// // var a1 = [1,2,3];
// // var a2 = a1;
// // cl(a1,a2);
// // a2[0] = 7;
// // cl(a1,a2);
// // var a3 = [...a1];
// // cl(a1,a2,a3);
// // a3[0] = 10;
// // cl(a1,a2,a3);

// //factorial(10,cl);
// var o = {value:5,f:factorial}
// o.f(undefined,cl)

// f10 = factorial.bind(window,10);

// f10(cl);

// var oo = {value: 8n} // записываем в оо цифру 8

// fOO = o.f.bind(oo, undefined); // bind создает новую функцию

// // UNDEFINED нужно чтобы параметр ввода был равен нулю для обращения к параметру value

// fOO(cl); // От изменения оо будет менятся результат

// var f = (x,y) => (x+y);
// cl(f(1,2))

// var g = () => {
//     var s = prompt();
//     return "вы ввели: " + s;
// }
// cl(g())

// cl("5" + 5);
// cl(5 + "5");
// cl(5 + Number("5"));
// cl(5+'5'*1)

// cl(!!5)
// cl(!!'')

// cl(String({}))
// cl(String(cl))

// var o = new Object(5); // вывод выводит метод toString объекта
// cl(String(o))
// o.toString = () => 'hello world' // явно прописали toString, выводит его
// cl(String(o))

// cl(String([1,2,3]))
// cl(String([]))

// cl(r(1,4));
// cl(r("asjhdfhj",2))
// cl(r(4,4))
// cl(r(-10,6));
// cl(r(4,1));
// cl(str(1/2));

//var s = new String("hello world");
// cl(s.constructor);
// cl(s.__proto__);
// cl(String.prototype);
// cl(s.__proto__ === String.prototype);
// cl(s.constructor === String);
// cl(s.__proto__ === s.constructor.prototype)

// var s = new String("dima");
// cl(s instanceof String); // s сделана через String?
// cl(s.toLowerCase);
// s.__proto__ = Number.prototype;
// cl(s instanceof String);
// cl(s.toLowerCase);

// cl(s)


// var p1 = new Person("dima",23);
// var p2 = new Person("sasha",12);
// cl(p1.sayName());


// var s1 = new Student("misha",13,"Mai",3);
// cl(s1.sayVuz(),s1.sayName(),s1.sayAge(),s1.sayCourse());

// cl(s1 instanceof Person);


function a(val){
    alert(val);
    return val;
}
// cl()


// cl(b("hi"))

// function c(...val){
//     console.log(...val);
//     return val;
// }

// cl(a(c("hi")));
// cl(c(a("hi")));

var s1 = new str('123','456');

b(s1);
