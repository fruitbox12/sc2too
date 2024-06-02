const { Keyboard } = require('./utils');

class IO {
    constructor(app) {
        this.app = app;
        this.keyboard = new Keyboard();
    }

    setup(world) {
        this.world = world;
        this.world.sprites.forEach(sprite => {
            this.app.stage.addChild(sprite);
        });

        this.keyboard.setup();
    }

    update() {
        // Handle rendering and user input
        if (this.keyboard.isPressed('ArrowRight')) {
            this.world.sprites.forEach(sprite => {
                sprite.x += 5;
                if (sprite.x > 800) sprite.x = 0;
            });
        }
        if (this.keyboard.isPressed('ArrowLeft')) {
            this.world.sprites.forEach(sprite => {
                sprite.x -= 5;
                if (sprite.x < 0) sprite.x = 800;
            });
        }
    }
}

module.exports = { IO };
