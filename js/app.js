// Enemies our player must avoid
var Enemy = function(locY) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started


    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png'; // setting the Enemy image
    this.x = 0;
    this.y = 85* locY + 60;
    this.speed = this.getSpeed()*25;
    return this;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + (this.speed * dt);
    if(this.x > 600){
        this.x = 0;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Get Speed Fucntion 
// Generate binary numbers and make it condition to speed
Enemy.prototype.getSpeed = function(){
    var random = Math.random() + 0.5; // Random numbers from (0 to 1)+.5
    if (Math.floor(random) < 1){      // Random binary no (0 or 1)
        this.speed = 2.5;
    }
    else {
        this.speed = 5;
    }
    return this.speed;
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (locX, locY){
    this.sprite = 'images/char-boy.png';  //setting Player's image
    this.x = locX;
    this.y = locY;

    return this;
};

Player.prototype.update = function(){
    if (this.x < 10){
        this.x = 10;
    }
    else if (this.x > 400){
        this.x = 400;
    }
    else if (this.y < 5){
        this.y = 5;
    }
    else if (this.y > 410){
        this.y = 410;
    }
    else if (this.y < 10 && this.x <= 450){
        this.resetPlayer();
    }
    else if (this.collision()== true){
        this.resetPlayer();
    }

};

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key){
    switch (key){
        case 'left':
            this.x = this.x - 40;
            break;
        case 'right':
            this.x = this.x + 40;
            break;
        case 'up':
            this.y = this.y - 40;
            break;
        case 'down':
            this.y = this.y + 40;
            break;
    };
};



Player.prototype.collision = function(){
    for(var i=0; i < allEnemies.length; i++) {
        if (this.x < allEnemies[i].x + 50 && this.x + 50 > allEnemies[i].x && this.y < allEnemies[i].y + 30 && this.y + 30 > allEnemies[i].y) {
           console.log("fail");
           return true;
        }
    }
};

Player.prototype.resetPlayer = function(){
    this.x = 200;
    this.y = 400;
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var enemyCount = 3;
var allEnemies = [];

for (var i = 0; i < enemyCount; i++) {
    allEnemies.push(new Enemy(i));
}

var player = new Player(200,500);
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
