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
        const spriteFiles = [
            'assimilator.txt', 'assimilator_empty.txt', 'boost3x3.txt', 'boost5x5.txt',
            'building2x2.txt', 'building3x3.txt', 'building5x5.txt', 'cyber_core.txt',
            'cyber_core_researching.txt', 'gateway.txt', 'gateway_producing.txt', 'geyser.txt',
            'geyser_empty.txt', 'mineral.txt', 'nexus.txt', 'nexus_producing.txt', 'probe.txt',
            'probe_gas.txt', 'probe_gather.txt', 'probe_mineral.txt', 'pylon.txt', 'rock.txt',
            'rock2x2.txt', 'stalker.txt', 'zealot.txt'
        ];

        let loadCount = 0;
        spriteFiles.forEach(file => {
            fetch(`data/sprites/${file}`)
                .then(response => response.text())
                .then(text => {
                    this.world.addSpriteData(file, text);
                    if (++loadCount === spriteFiles.length) {
                        this.setup();
                    }
                });
        });
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
