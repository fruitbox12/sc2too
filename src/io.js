const readline = require('readline');
const { Keyboard } = require('./utils');

class IO {
    constructor() {
        this.keyboard = new Keyboard();
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    setup(world) {
        this.world = world;
        this.keyboard.setup();
        this.rl.on('line', (input) => {
            if (input === 'q') {
                process.exit(0);
            }
        });
    }

    update() {
        console.clear();
        this.world.sprites.forEach(sprite => {
            console.log(`Sprite ${sprite.name} at (${sprite.x}, ${sprite.y}):`);
            sprite.data.forEach(line => {
                console.log(line);
            });
        });
    }
}

module.exports = { IO };
