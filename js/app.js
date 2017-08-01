// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // The image/sprite for our enemies
    this.sprite = 'images/enemy-bug.png';

    //setting enemy location
    this.x = x;
    this.y = y;
    //setting enemy speed
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
  this.sprite = 'images/char-boy.png';
  this.x = x;
  this.y = y;
};

Player.prototype.update = function() {

};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function() {

};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(0, 55, 2);
var enemy2 = new Enemy(0, 140, 2);
var enemy3 = new Enemy(-100, 140, 2);
var enemy4 = new Enemy(-100, 220, 2);
var enemy5 = new Enemy(0, 220, 2);

var player = new Player(200, 380);

var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
