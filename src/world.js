class World {
    constructor() {
        this.sprites = [];
        this.spriteData = {};
    }

    addSpriteData(name, data) {
        this.spriteData[name] = data;
    }

    setup() {
        // Parse the sprite data and create text-based sprites
        Object.keys(this.spriteData).forEach(name => {
            const data = this.spriteData[name];
            const sprite = this.createSpriteFromData(name, data);
            this.sprites.push(sprite);
        });
    }

    createSpriteFromData(name, data) {
        const lines = data.split('\n');
        return {
            name,
            data: lines,
            x: Math.floor(Math.random() * 80),
            y: Math.floor(Math.random() * 24)
        };
    }

    update() {
        // Update the world state
        this.sprites.forEach(sprite => {
            sprite.x += 1;
            if (sprite.x > 80) sprite.x = 0;
        });
    }
}

module.exports = { World };
