// var s1 = new String("QQQ");
// var s2 = "KKK";
// print(typeof s1, typeof s2);
// print(s1.length, s2.length);

// print(s1.length, new String(s2).length);

// print(typeof("QQQ"));
// print(typeof(5));
// print(typeof(true));
// print(typeof(5n));
// print(typeof(null));
// print(typeof(undefined));
// print(typeof(Symbol("QQQ")));
// print(typeof({}));
// print(typeof(function() {}));


// var s1 = new MagicString(["Привет","Hi","Hello","BONJORNO","prevet"]);
// var s2 = new MagicString(["World","мир","земля","человечество","планета","все люди мира"]);
// for (var i = 0; i < 10; i++){
//     b(s1 + ", " + s2 + "!!!<br>");
// }


// var s1 = Symbol("s");
// print(s1);
// print(s1.description);
// var s2 = Symbol("s");
// print(s1,s2,s1==s2);

// var o = {};
// o.qqq = 1;
// o["kkk"] = 2;
// c(o,o["qqq"],o.kkk); // есть отличие:
// o["hello world"] = true; // разделитель пробелом
// c(o["hello world"]);
// // другое отличие в том что для внесения переменной в названия свойств - надо использовать скобки



// var s = new MagicString([123,456,789]);
// print(s.valueOf());
// s.stringList = ["Вас взломали"];
// b(s);
// print(s);



// var mp = new MagicPhrase(
//     [
//         ["Hello","hi","privet","Привет","Здарова","Салам алейкум"],
//         [", "],
//         ["World","мир","земля","человечество","планета","все люди мира"],
//         ["!"]
//     ]);
// print(mp); TODO ДЗ

// var a = ["e1","e2","e3"];

// for (var i in a){ // индексы
//     print(i);
// }

// for (var i of a){ // значения
//     print(i); 
// }

// var o = {a:"p1",b:"p2",c:"p3"};


// // for (var i in o) { // ошибка (нет перебора значений)
// //     print(i,"=",o[i]); 
// // }

// for (var i of Object.values(o)){
//     print(i);
// }


var module = {};

defineGetterAndSetter(module,"version");
module.version = "1.1";
module.author = "MAI";
print(module.version);
print(module.author);

defineGetterAndSetter(module,"date");
module.date = "02.20.2021";
print(module.date);

// var moduleNew = {};
// moduleNew.__defineGetter__("version", module.__lookupGetter__("version"));
// moduleNew.__defineSetter__("version", module.__lookupSetter__("version"));
// moduleNew.version = "10";
// print(moduleNew.version);


// // print(module.date); взлом жопы


// Object.defineProperty(module, "date",
// {
//     configurable: false, // защита от удаления
// })

// delete(module.date);
// print(module.date)

// Object.defineProperty(module, "comment",
// {
//     configurable: false, // дескриптор свойства х3
//     //writable: true, 
//     enumerable: false, //отвечает за возможность просмотра свойств
//     set: function(x) {
//         this.__comment__ = x;
//     },
//     get: function() {
//         return this.__comment__;
//     }
// }
// )
// module.comment = "Комментарий к модулю";
// print(module.comment)
// delete module.comment;
// print(module.comment)

// // module.__defineGetter__("comment", function(){
// //     return "Вас взломали";
// // })
// print(module.comment)

// for (var i in module){
//     print(i,"=",module[i]);
// }

var moduleSuperNew = Object.create(module, // модуль - прототип для нового модуля (__proto)
    {
        dependencies:
        {
            configurable: false,
            enumerable: false,
            set: function(x){
                this.__dependencies = x;
            },
            get: function(){
                return this.__dependencies;
            }
        },
        name:
        {
            configurable: false,
            enumerable: false,
            get: function() {
                return "SUPER NEW MODULE";
            }
        }
    });
moduleSuperNew.dependencies = "Module";
moduleSuperNew.name = "Name";
print(moduleSuperNew.dependencies, moduleSuperNew.name);