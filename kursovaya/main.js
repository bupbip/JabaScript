const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');


class Player{
    constructor (x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
    }

    Draw () {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.closePath();
      }
}


player = new Player(25, 0, 50, 50, '#FF5858');
player.Draw()


window.onload = function() {
	Gifffer();
}


