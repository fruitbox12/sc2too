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
        this.renderWorld();

        // Handle user input
        if (this.keyboard.isPressed('d')) {
            this.world.sprites.forEach(sprite => {
                sprite.x += 1;
                if (sprite.x > this.world.width) sprite.x = 0;
            });
        }
        if (this.keyboard.isPressed('a')) {
            this.world.sprites.forEach(sprite => {
                sprite.x -= 1;
                if (sprite.x < 0) sprite.x = this.world.width;
            });
        }
    }

    renderWorld() {
        const screen = Array(this.world.height).fill('').map(() => Array(this.world.width).fill(' '));
        this.world.sprites.forEach(sprite => {
            sprite.data.forEach((line, y) => {
                for (let x = 0; x < line.length; x++) {
                    if (sprite.y + y < this.world.height && sprite.x + x < this.world.width) {
                        screen[sprite.y + y][sprite.x + x] = line[x];
                    }
                }
            });
        });
        console.log(screen.map(line => line.join('')).join('\n'));
    }
}

module.exports = { IO };
