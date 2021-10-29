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



