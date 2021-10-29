const rabbit = document.getElementById('rabbit');
const cactus = document.getElementById('tree');

document.addEventListener("keydown", function(e) {//обработка событий
    console.log("jump")
    jump();
});

function jump() {
    if(rabbit.classList != "jump"){
        rabbit.classList.add("jump"); //добавляем класс jump из css 
    }
    setTimeout(function(){
        rabbit.classList.remove("jump");
    },300);
    //classList - псевдомассив
}

let isAlive = setInterval(function(){
    let rabbitTop = parseInt(window.getComputedStyle(rabbit).getPropertyValue("top"));
    let treeLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if(treeLeft < 50 && treeLeft > 0 && rabbitTop >= 140){
        alert("game over");
    }
},10) //setInterval вызывает раз в 10 миллисек