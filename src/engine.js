class Engine {
    constructor(world) {
        this.world = world;
        this.paused = false;
    }

    start(io) {
        this.io = io;
    }

    update(delta) {
        if (!this.paused) {
            this.world.update(delta);
            this.io.update();
        }
    }
}

module.exports = { Engine };
