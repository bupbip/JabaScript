// i = 5;
// console.log("i =", i);
// console.log(window.i);

// function qqq() {
//   var i;
//   i = 7;
//   console.log("i =", i);
//   console.log(window.i);
// }
// qqq();

// if(i>5){
//     console.log("i > 5");
// } else {
//     console.log("i <= 5");
// }

// console.log("i =", i);
// console.log(window.i);

// i = 1;
// var j = 2;
// let k = 3;
// const c = 7;

// {
//     var j = 7;
//     let k = 5;
//     console.log(k);
//     console.log("j =",j);
// }

// console.log(k=k);
// console.log("j =",j);

// function qqq() {
//     i = 10, j = 20;
//     window.console.log(i,j);
//     var i,j;
// }

// qqq();



// console.log("Hello world!");
// console.error("неверно");
// console.group("1");
// console.log("first");
// console.log("second");
// console.groupEnd("1");







// for(let i = 1;i<=10;i++){
//     console.log(i);
// }
// i = 1;
// while(i < 10){
//     console.log(i);
//     i++;
// }


// var i = new Number(5);
// // console.log(i.toString()+6);
// i.toString = function(){return "qqq"}
// console.log(i.toString());

// var s = new String("Hello");
// console.log(s.length);

// var b = new Boolean(true);
// console.log(b);

// var d = new Date();
// console.log(d.getDate());
// console.log(d.getDay());
// console.log(d.getYear());
// console.log(d.getFullYear());

// var a = new Array(1,2,3,4);
// console.log(a);
// var a = new Array(10);
// a.length = 100;
// console.log(a);

// var a = new Array([1]);
// console.log(a);



// var o = new Object();
// console.log(o.__proto__);
// o.qqq=10;
// var b = new Object();
// b.__proto__ = o;
// b.qqq = 27;
// console.log(b.qqq,b.__proto__.qqq); // PROTOTYPE CHAIN - ЦЕПОЧКА ПРОТОТИПОВ

// var a = new Array([1,2,3]);


// var man = {
//     name: "Андрей",
//     lastName: "Кустиков",
//     age: 19,
//     fullName: function() {
//         return this.name + " " + this.lastName;
//     },
// }
// console.log(man.fullName());

var m = { // объект - прототип
    fullName: function() {
        return this.name + " " + this.lastName;
    },
}

function Man(name,lastName,age) {
    var man = {};
    man.name = name;
    man.lastName = lastName;
    man.age = age;
    man.__proto__ = Man.prototype;
    return man;
}

Man.prototype = m;

var o = new Man("Andrey","Kustikov",10);
console.log(new Man("Vasya","Борзый",12).fullName());