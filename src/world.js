class World {
    constructor() {
        this.sprites = [];
    }

    setup() {
        // Create and add sprites to the world
        const texture = PIXI.Loader.shared.resources['spritesheet'].textures['sprite.png'];
        for (let i = 0; i < 10; i++) {
            const sprite = new PIXI.Sprite(texture);
            sprite.x = Math.random() * 800;
            sprite.y = Math.random() * 600;
            this.sprites.push(sprite);
        }
    }

    update(delta) {
        // Update the world state
        this.sprites.forEach(sprite => {
            sprite.x += 1 * delta;
            if (sprite.x > 800) sprite.x = 0;
        });
    }
}

module.exports = { World };
