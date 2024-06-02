const PIXI = require('pixi.js');
const { Engine } = require('./engine');
const { World } = require('./world');
const { IO } = require('./io');

class Game {
    constructor() {
        this.app = new PIXI.Application({ width: 800, height: 600 });
        document.body.appendChild(this.app.view);

        this.world = new World();
        this.engine = new Engine(this.world);
        this.io = new IO(this.app);

        this.loadAssets();
    }

    loadAssets() {
        PIXI.Loader.shared
            .add('spritesheet', 'data/sprites/spritesheet.json')
            .load(() => this.setup());
    }

    setup() {
        this.world.setup();
        this.io.setup(this.world);
        this.engine.start(this.io);
    }

    start() {
        this.app.ticker.add((delta) => {
            this.engine.update(delta);
        });
    }
}

module.exports = { Game };
