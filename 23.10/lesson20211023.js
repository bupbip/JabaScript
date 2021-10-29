var cnvs,
  cntxt,
  w,
  brshWdth = 7,
  brshClr = "white";
blckClr = "black";
cnvs = document.getElementById("cnvs");
c(cnvs);
cntxt = cnvs.getContext("2d");
c(cntxt);

const blocksNum = 15;
/*
w = 200;
x = 100;
y = 100;

cntxt.beginPath();
cntxt.moveTo(x, y);
cntxt.lineTo(x, y + w);
cntxt.lineTo(x + w, y + w);
cntxt.lineTo(x + w, y);
cntxt.lineTo(x, y);
//cntxt.lineTo(w, 0);
cntxt.lineWidth = "5";
cntxt.stroke();
cntxt.closePath();

cntxt.beginPath();
x = 400;
y = 100;
cntxt.strokeStyle = "red";
cntxt.moveTo(x, y);
cntxt.lineTo(x, y + w);
cntxt.lineTo(x + w, y + w);
cntxt.lineTo(x + w, y);
cntxt.lineTo(x, y);
//cntxt.lineTo(w, 0);
cntxt.lineWidth = "5";
cntxt.stroke();
cntxt.fillStyle = "maroon";
cntxt.fill();
cntxt.closePath();

cntxt.beginPath();
cntxt.lineWidth = "3";
cntxt.strokeStyle = "yellow";
cntxt.rect(300, 350, 40, 30);
cntxt.stroke();


cntxt.beginPath();
cntxt.lineWidth = "3";
cntxt.strokeStyle = "yellow";
cntxt.fillStyle = "white";
cntxt.fillRect(350, 400, 40, 30);
cntxt.stroke();
*/

class Block {
  constructor(w, h, x, y) {
    this._w = w;
    this._h = h;
    this._x = x;
    this._y = y;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  get w() {
    return this._w;
  }
  get h() {
    return this._h;
  }
}
var blockList = new Array();
function generateSquares() {
  for (let i = 0; i < blocksNum - 1; i++) {
    // создадим блоки которые не наезжают друг на друга
    let tmpW = rand(1, 100);
    let tmpH = rand(1, 100);
    if (blockList.length == 0) {
      tmpX = 0;
      tmpY = 0;
    } else {
      tmpX = blockList[i - 1].x + blockList[i - 1].w + brshWdth * 2;
      tmpY = blockList[i - 1].y + blockList[i - 1].h + brshWdth * 2;
      //newBlock = new Block(tmpW = rand(1, 100), tmpH = rand(1, 100), blockList[i - 1].y + tmpH, blockList[i-1].x + tmpW);
    }
    blockList.push(new Block(tmpW, tmpH, tmpX, tmpY));
  } // зарисуем блоки
  for (var i = 0; i < blockList.length; i++) {
    cntxt.fillStyle = blckClr;
    cntxt.fillRect(
      blockList[i].x,
      blockList[i].y,
      blockList[i].w,
      blockList[i].h
    );
    cntxt.rect(blockList[i].x, blockList.y, blockList[i].w, blockList[i].h);
    cntxt.stroke();
  }
}
generateSquares();

cnvs.onmousedown = function () {
  cnvs.onmousemove = function (event) {
    var x, y;
    x = event.offsetX;
    y = event.offsetY;
    cntxt.fillStyle = brshClr;
    cntxt.fillRect(x, y, brshWdth, brshWdth);

    for (var i = 0; i < blockList.length; i++) {
      blckX = blockList[i].x; // поменял местами чтобы x y зависели от W H
      blckY = blockList[i].y;
      blckW = blockList[i].w;
      blckH = blockList[i].h;

      if (
        x > blckX - brshWdth &&
        x <= blckX + blckW &&
        y >= blckY - brshWdth &&
        y <= blckY + blckH
      ) {
        alert("Вы проиграли");
      }

      //c(blckX, blckY, blckWdth, blckHght);
    }

    //c("x = ", x, "y = ", y);
  };
  cnvs.onmouseup = function () {
    cnvs.onmousemove = null;
  };
};

document.getElementById("brushWidth").oninput = function () {
  brshWdth = this.value;
  blockList = [];
  cntxt.clearRect(0, 0, 800, 600);
  generateSquares(brshWdth);
  //c("brshWdth = ", brshWdth);
};

document.getElementById("brushColor").oninput = function () {
  brshClr = this.value;
  //c("brshClr = ", brshClr);
};

document.getElementById("blockColor").oninput = function () {
  blckClr = this.value;
  //c("brshClr = ", brshClr);
};

/*
var elem, elemList;
var p2 = "";
//p2.style.background = "red";
//window["id-p1"].style.background = "red";

elem = document.getElementById("p2");
elem.style.backgroundColor = "red";
elem.style["font-size"] = "24px";
//elem.style.fontSize = "32px";
c("elem", elem, typeof(elem));
//elem.style.color = "#777777";


elemList = document.getElementsByTagName("div");
c(typeof(elemList), elemList);
for(var i = 0; i < elemList.length; i++)
{
  elem = elemList.item(i);
  elem.style.borderColor = "maroon";  
}

elemList = document.getElementsByClassName("d2");
c(typeof(elemList), elemList);
for(var i = 0; i < elemList.length; i++)
{
  elem = elemList.item(i);
  elem.style.backgroundColor = "blue";  
}

elemList = document.getElementsByName("h");
c(typeof(elemList), elemList);
for(var i = 0; i < elemList.length; i++)
{
  elem = elemList.item(i);
  c(elem.tagName);
  //elem.style.backgroundColor = "aque";  
}

elemList = document.querySelectorAll("div div li");
c(typeof(elemList), elemList);
for(var i = 0; i < elemList.length; i++)
{
  elem = elemList.item(i);
  //c(elem.tagName);
  //elem.style.backgroundColor = "aque";  
}

elemList = document.querySelector("div div li");
c(typeof(elemList), elemList);
*/
/*
var elemDivNew, elemText;
elemDivNew = document.createElement("div");
c("elemDivNew =", elemDivNew, "type = ", typeof(elemDivNew));
elemDivNew.innerHTML = "<p>НОВЫЙ ЭЛЕМЕНТ DIV</p>";
elemDivNew.style.borderColor = "maroon";

elemText = document.createTextNode("Hello, World!!!");
c("elem =", elemText, "type = ", typeof(elemText));

var elemDiv, elemList;
elemDiv = document.getElementById("container");
elemDiv.style.borderColor = "red";
c("elemDiv", elemDiv, typeof(elemDiv));
elemDiv.append(elemDivNew);
elemDiv.prepend(elemText);

var elemPNew;
elemPNew = document.createElement("p");
elemPNew.innerHTML = "New Paragraph";
elemDiv.before(elemPNew);

var elemANew;
elemANew = document.createElement("a");
elemANew.innerHTML = "New Anchor";
elemDiv.after(elemANew);


var elemDivNew;
elemDivNew = document.createElement("div");
elemDivNew.innerHTML = "Я заменил старый DIV";
elemDiv.replaceWith(elemDivNew);

var elemSpan;
elemSpan = document.createElement("span");
elemSpan.innerHTML = "<span>QQQ</span>";
//beforebegin - перед открывающим тегом
//afterbegin - после открывающего тега
//beforeend - перед закрывающим тегом
//afterend - после закрывающего тега
//"<span>QQQ</span>"
elemDivNew.insertAdjacentHTML("beforebegin", "<span>QQQ</span>");
elemDivNew.insertAdjacentText("beforebegin", "<span>QQQ</span>");
elemDivNew.insertAdjacentElement("beforebegin", elemSpan);

elemText = document.createTextNode("");
elemDivNew.replaceWith(elemText);
//elemDivNew.remove();

*/
