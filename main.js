var game = new Phaser.Game('100', '100', Phaser.AUTO, '', { preload: preload, create: create, update: update});
var bird, webs, floor;
function preload() {
    game.load.image('floor', 'images/floor.jpg');
    game.load.image('sky', 'images/sky.jpg');
    game.load.image('web', 'images/web.png');
    game.load.spritesheet('bird', 'images/bird.png', 50, 40);
}
function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);

    var sky = game.add.tileSprite(0, 0, 750, 350, 'sky');
    sky.scale.y = (game.height - 130) / 350;
    sky.autoScroll(-50, 0);

    bird = game.add.sprite(game.width / 4, game.height / 2, 'bird');
    bird.anchor.setTo(.5, .5);
    bird.animations.add('fly', [0, 1, 2], 10, true);
    bird.play('fly');
    game.physics.arcade.enable(bird);
    bird.body.gravity.y = 800;
    bird.body.collideWorldBounds = true;

    game.input.onDown.add(clickFly, this);

    webs = game.add.group();
    webs.enableBody = true;
    webs.createMultiple(10, 'web');
    webs.setAll('outOfBoundsKill', true);
    webs.setAll('checkWorldBounds', true);
    game.time.events.loop(1200, createWeb, this);

    floor = game.add.tileSprite(0, game.height - 130, game.width, 130, 'floor');
    floor.autoScroll(-150, 0);
    game.physics.arcade.enable(floor);
    floor.body.immovable = true;
}
function clickFly() {
    bird.body.velocity.y = -320;
}
function createWeb() {
    var offsetY = 50 + Math.random() * (game.height - 130 - 150 -100) | 0;
    var web = webs.getFirstExists(false);
    if (web) {
        web.body.immovable = true;
        web.anchor.y = 1;
        web.reset(game.width,
            offsetY
        );
        web.body.velocity.x = -150;
    }
    web = webs.getFirstExists(false);
    if (web) {
        web.body.immovable = true;
        web.anchor.y = 0;
        web.reset(game.width,
            offsetY + 150
        );
        web.body.velocity.x = -150;
    }
}
function update () {
    game.physics.arcade.collide(bird, floor, gameOver, null, this);
    game.physics.arcade.collide(bird, webs, gameOver, null, this);
}
function gameOver (bird, killer) {
    bird.kill();
}