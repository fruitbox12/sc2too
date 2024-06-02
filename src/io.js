const readlineSync = require('readline-sync');
const { Keyboard } = require('./utils');

class IO {
    constructor() {
        this.keyboard = new Keyboard();
    }

    setup(world) {
        this.world = world;
        this.keyboard.setup();
    }

    update() {
        console.clear();
        this.world.sprites.forEach(sprite => {
            console.log(`Sprite ${sprite.name} at (${sprite.x}, ${sprite.y}):`);
            sprite.data.forEach(line => {
                console.log(line);
            });
        });

        // Handle user input
        if (this.keyboard.isPressed('d')) {
            this.world.sprites.forEach(sprite => {
                sprite.x += 1;
                if (sprite.x > 80) sprite.x = 0;
            });
        }
        if (this.keyboard.isPressed('a')) {
            this.world.sprites.forEach(sprite => {
                sprite.x -= 1;
                if (sprite.x < 0) sprite.x = 80;
            });
        }
    }
}

module.exports = { IO };
