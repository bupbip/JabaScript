let canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');

var keys = [];

const cellSize = 60;
var containers = [];

let mapX = 22;
let mapY = 11;

var map =
    `    XXXXX             
    X   X             
    X   X             
  XXX  *XXX           
  X  *  * X           
XXX X XXX X     XXXXXX
X   X XXX XXXXXXX  ..X
X *  *            *..X
XXXXX XXXX X@XXXX  ..X
    X      XXX  XXXXXX
    XXXXXXXX          `

var matrix = [];
let symCount = 0;

document.addEventListener('keydown', function (e) {
    if (!e.repeat) {
        keys.push(e.code);
    }
})

class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = cellSize / 2 - 5;
    }

    Up() {
        if (this.checkMove('u')) {
            this.y--;
        }
    }
    Down() {
        if (this.checkMove('d')) {
            this.y++;
        }
    }
    Left() {
        if (this.checkMove('l')) {
            this.x--;
        }
    }
    Right() {
        if (this.checkMove('r')) {
            this.x++;
        }
    }

    Draw() {
        ctx.beginPath();
        ctx.lineWidth = 4;
        ctx.strokeStyle = "black";
        ctx.fillStyle = "lightblue";
        ctx.arc(this.x * cellSize + cellSize/2, this.y * cellSize+cellSize/2, this.r, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }

    Animate() {
        if (keys.includes("KeyW")) {
            this.Up();
            keys.pop("KeyW");
        } else if (keys.includes("KeyA")) {
            this.Left();
            keys.pop("KeyA");
        } else if (keys.includes("KeyS")) {
            this.Down();
            keys.pop("KeyS");
        } else if (keys.includes("KeyD")) {
            this.Right();
            keys.pop("KeyD");
        }
        this.Draw();
    }

    checkMove(dir) {
        if (dir == 'u' && matrix[this.y - 1][this.x] != 'X') {
            for (let i = 0; i < containers.length; i++) {
                if (containers[i].CheckMove(this.y - 1, this.x, dir)) {
                    return true;
                }
                if(containers[i].x == this.x && containers[i].y == this.y - 1) return false
            }
            return true;
        }
        if (dir == 'd' && matrix[this.y + 1][this.x] != 'X') {
            for (let i = 0; i < containers.length; i++) {
                if (containers[i].CheckMove(this.y + 1, this.x, dir)) {
                    return true;
                }
                if(containers[i].x == this.x && containers[i].y == this.y + 1) return false
            }
            return true;
        }
        if (dir == 'l' && matrix[this.y][this.x - 1] != 'X') {
            for (let i = 0; i < containers.length; i++) {
                if (containers[i].CheckMove(this.y, this.x - 1, dir)) {
                    return true;
                }
                if(containers[i].x == this.x - 1 && containers[i].y == this.y) return false
            }
            return true;
        }
        if (dir == 'r' && matrix[this.y][this.x + 1] != 'X') {
            for (let i = 0; i < containers.length; i++) {
                if (containers[i].CheckMove(this.y, this.x + 1, dir)) {
                    return true;
                }
                if(containers[i].x == this.x + 1 && containers[i].y == this.y) return false
            }
            return true;
        }
        return false;
    }
}

class Container {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    Draw() {
        let img = document.createElement("img");
        img.src = "images/container.png";
        ctx.drawImage(img, this.x * cellSize, this.y * cellSize, cellSize, cellSize);
    }

    CheckMove(y, x, dir) {
        let check = true;
        if (dir == "l" && matrix[y][x - 1] != 'X' && this.x == x && this.y == y) {
            for (let i = 0; i < containers.length; i++) {
                if (containers[i].x == x - 1 && containers[i].y == y) {
                    check = false;
                }
            }
            if (check) {
                this.x--;
                return true;
            }
        }
        if (dir == "r" && matrix[y][x + 1] != 'X' && this.x == x && this.y == y) {
            for (let i = 0; i < containers.length; i++) {
                if (containers[i].x == x + 1 && containers[i].y == y) {
                    check = false;
                }
            }
            if (check) {
                this.x++;
                return true;
            }
        }
        if (dir == "u" && matrix[y - 1][x] != 'X' && this.x == x && this.y == y) {
            for (let i = 0; i < containers.length; i++) {
                if (containers[i].x == x && containers[i].y == y - 1) {
                    check = false;
                }
            }
            if (check) {
                this.y--;
                return true;
            }
        }
        if (dir == "d" && matrix[y + 1][x] != 'X' && this.x == x && this.y == y) {
            for (let i = 0; i < containers.length; i++) {
                if (containers[i].x == x && containers[i].y == y + 1) {
                    check = false;
                }
            }
            if (check) {
                this.y++;
                return true;
            }
        }
        return false;
    }

    checkDone() { // проверяем, стоит ли коробка на одном из нужных мест
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == "." && this.x == j && this.y == i) {
                    return true;
                }
            }
        }
        return false;
    }
}

for (var i = 0; i < mapY; i++) { // проходим по циклу чтобы узнать корды игрока и создать контейнера
    matrix[i] = [];
    for (var j = 0; j < mapX; j++) {
        if (map[symCount] == "\n") {
            symCount++;
        }
        if (map[symCount] == '@') {
            player = new Player(j, i);
        }
        if (map[symCount] == '*') {
            containers.push(new Container(j, i));
        }
        matrix[i].push(map[symCount]);
        symCount++;
    }
}

class Storage {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }

    Draw() {
        ctx.strokeStyle = "grey";
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == "X") {
                    let img = document.createElement("img");
                    img.src = "images/wall.png";
                    ctx.drawImage(img, j * cellSize, i * cellSize, cellSize, cellSize);
                } else if (matrix[i][j] == ".") {
                    let img = document.createElement("img");
                    img.src = "images/dagger.png";
                    ctx.drawImage(img, j * cellSize, i * cellSize, cellSize, cellSize);
                }
            }
        }
    }
}

var win;

function Start() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 30;

    storage = new Storage(mapX * cellSize, mapY * cellSize);
    storage.Draw();

    player.Draw();
    requestAnimationFrame(Update);
}

function Update() {
    if (win) alert("Ты победил")
    else requestAnimationFrame(Update);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    storage.Draw();
    for (let i = 0; i < containers.length; i++) {
        containers[i].Draw();
    }
    win = true;
    for (let i = 0; i < containers.length; i++){
        if (!containers[i].checkDone()) {
            win = false;
        }
    }
    player.Animate();
}

Start()