var game = new Phaser.Game('100', '100', Phaser.AUTO, '', {preload: preload, create: create});
function preload () {
    game.load.image('floor', 'images/floor.jpg');
    game.load.image('sky', 'images/sky.jpg');
    game.load.spritesheet('bird', 'images/bird.png', 50, 50);
}
function create () {
    var sky = game.add.tileSprite(0, 0, 750, 350, 'sky');
    sky.scale.y = (game.height-130)/350;
    sky.autoScroll(-50, 0);
    var floor = game.add.tileSprite(0, game.height-130, game.width, 130, 'floor');
    floor.autoScroll(-150, 0);
    
    bird = game.add.sprite(game.width/4, game.world.height/2, 'bird');
    bird.anchor.setTo(.5, .5);
    bird.animations.add('fly', [0, 1, 2], 10, true);
    bird.play('fly');
}