"use strict";
var a = [1, 2, 3, 4, 5, 3, 4, 2, 1];
a.forEach(function(val){c(val);});

a.forEach((val, ind, arr) => c("В массиве", arr, "в позиции", ind, "расположен элемент", val));

c(a.includes(3));
c(a.includes(3, 4));




c(a.join());
c(a.join(""));
c(a.join("-"));

var iterator = a.keys();
for(var i = 0; i <= a.length; i++)
{
  c(iterator.next().value); 
}

var iteratorE = a.entries();
for(var j = 0; j <= a.length; j++)
{
  c(iteratorE.next().value); 
}


c(a.indexOf(3));
c(a.indexOf(3, 4));

c(a.lastIndexOf(3));
c(a.lastIndexOf(3, 4));

c("pop", a.pop(), a);
c("push", a.push(10), a);
c("shift", a.shift(), a);
c("unshift", a.unshift(11), a);

var result = 
      a.reduce(function(prevVal, curVal)
               {
                c("prev", prevVal, "cur", curVal);
                return String(prevVal) + "," + String(curVal);
               });
c("a.reduce", result);


var result = 
      a.reduceRight(
               function(prevVal, curVal)
               {
                c("prev", prevVal, "cur", curVal);
                return String(prevVal) + "," + String(curVal);
               });
c("a.reduceRight", result);

c("a", a);
var b = a.reverse();
c("a", a, "b", b, "a = b", a == b);
/*
c("a", a);
var b = a.map((val) => val * 2));
c("a", a, "b", b, "a = b", a == b);
*/
//c(a.reverse().map((val) => val * 2));
c("a", a);
/*
var b = a.reverse().map((val) => val * 2);
c("b", b);
c(b.reverse());
*/
c(a.reverse().map((val) => val * 2).reverse());

c("a", a);
c("slice()", a.slice());
c("slice(2)", a.slice(2));
c("slice(2, 3)", a.slice(2, 3));
c("slice(2, 4)", a.slice(2, 4));

c("a", a);
b = [...a];
c("splice(5)", a.splice(5), "a", a);
a = [...b];
c("a", a);
c("splice(5, 1)", a.splice(5, 1), "a", a);
a = [...b];
c("a", a);
c("splice(5, 3)", a.splice(5, 3), "a", a);
a = [...b];
c("a", a);
c("splice(5, 3, 'x', 'y', [1, 2], 999)", a.splice(5, 3, 'x', 'y', [1, 2], 999), "a", a);

a = [...b];
c("a", a);
c("splice(5, 0, 'x', 'y', [1, 2], 999)", a.splice(5, 0, 'x', 'y', [1, 2], 999), "a", a);

c("every ", a.every(val => val == 5));
c("some ", a.some(val => val == 5));



a = [...b];
c("a", a);
var b = a.sort();
c("a", a, "b", b, "a = b", a == b);
a = [1, 3, 2];
c("a", a);
c("sort()", 
  a.sort(function(v1, v2)
         {
           c("v1", v1, "v2", v2);
           if(v1 > v2)
           {
             return -1;
           }
           else if(v1 < v2)
           {
             return 1;
           }
           return 0
         }));

c("toString", a.toString());
c("toLocaleString", a.toLocaleString());




var iterator = a.keys();
for(var i = 0; i <= a.length; i++)
{
  c(iterator.next().value); 
}

var iterator = a.entries();
for(var j = 0; j <= a.length; j++)
{
  c(iterator.next().value); 
}

var iterator = a.values();
for(var j = 0; j <= a.length; j++)
{
  c(iterator.next().value); 
}

var iterator = a[Symbol.iterator]();

c(iterator, typeof(iterator));
for(var j = 0; j <= a.length; j++)
{
  c(iterator.next().value); 
}



































