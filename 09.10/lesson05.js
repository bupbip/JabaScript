// function add10(x){
//     x += 10;
// }

// var y = 1
// print(y);
// add10(y);
// print("стало")
// print(y);


var o = {p1:1,p2:2}

print(o)
function changeObj(obj){
    obj.p1 = 100
    obj.p2 = 200 // поменяло
    obj = {p3:3}
}

changeObj(o)
print(o)