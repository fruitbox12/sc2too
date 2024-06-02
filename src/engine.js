class Engine {
    constructor(world) {
        this.world = world;
        this.paused = false;
    }

    start(io) {
        this.io = io;
    }

    run() {
        setInterval(() => {
            if (!this.paused) {
                this.world.update();
                this.io.update();
            }
        }, 1000 / 60); // 60 FPS
    }
}

module.exports = { Engine };
