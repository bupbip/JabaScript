/*
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

c("a", a);
var b = a.map((val) => val * 2));
c("a", a, "b", b, "a = b", a == b);

//c(a.reverse().map((val) => val * 2));
c("a", a);

var b = a.reverse().map((val) => val * 2);
c("b", b);
c(b.reverse());

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

*/
"use strict"
/*
var o = {p1:1, p2:2, p3:3}
var p1 = 11;
c("o.p1 =", o.p1, "p1 =", p1);
with(o)
{
  c("o.p1 =", o.p1, "p1 =", p1);
  c("p1 =", p1, "p2 =", p2, "p3 =", p3);
}

o[Symbol.unscopables] = 
{
  p1:true,
  p2:false,
  p3:false
}

with(o)
{
  c("o.p1 =", o.p1, "p1 =", p1);
  c("p1 =", p1, "p2 =", p2, "p3 =", p3);
}
*/


var o = new Object();
var p1 = new Object();
var p2 = new Object();
o[1] = 1;
o["Hello, world!!!"] = 2;
o[true] = 3;
o[p1] = 4;
o[p2] = 5;
c("o", o);

var m = new Map();
m.set(1, 1);
m.set("Hello, world!!!", 2);
m.set(true, 3);
m.set(p1, 4);
m.set(p2, 5);
c("m", m, "m.p1", m.get(p1));
//m.clear();
m.delete(p1);
c("m", m);
a = m;
var iterator = a.keys();
for(var i = 0; i <= a.size; i++)
{
  c(iterator.next().value); 
}

var iterator = a.entries();
for(var j = 0; j <= a.size; j++)
{
  c(iterator.next().value); 
}

var iterator = a.values();
for(var j = 0; j <= a.size; j++)
{
  c(iterator.next().value); 
}

a.forEach(function(val, ind, mp){c(val * 2, ind, mp); mp.set(ind, 1);});
c("m", m);

c(m.has(p2));
c(m.has("Hello, world!!!"));
c(m.has(777));
//m[Symbol.toStringTag] = "QQQ";
c("Symbol(Symbol.toStringTag)", m[Symbol.toStringTag]);
c("ToString", m.toString());


var a = new Array();
a.push(1);
a.push(1);
a.push(1);
a.push("Hello, world!!!");
a.push(true);
a.push(p1);
a.push(p2);
c("a", a);

var s = new Set();
s.add(1);
s.add(1);
s.add(1);
s.add("Hello, world!!!");
s.add(true);
s.add(p1);
s.add(p2);
c("s", s);
s.delete(1);
c("s", s);
s.delete("Hello, world!!!");
c("s", s);

var wm = new WeakMap();
wm.set(p1, 4);
wm.set(p2, 5);
var p3 = new Object({x:1});
wm.set(p3, 7);
var p4 = new Object({z:2});
m.set(p4, 9);
c("m", m);
c("wm", wm);
p3 = null;
p4 = null;
c("m", m);
c("wm", wm);


var ws = new WeakSet();
ws.add(p1);
ws.add(p2);
ws.add(new Object());
c("ws", ws);
c("has(p1)", ws.has(p1));
c("has(p2)", ws.has(p2));




































