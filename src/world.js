class World {
    constructor() {
        this.sprites = [];
        this.spriteData = {};
        this.width = 80;
        this.height = 24;
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
        const lines = data.split('\n').filter(line => line.trim() !== '');
        return {
            name,
            data: lines,
            x: Math.floor(Math.random() * this.width),
            y: Math.floor(Math.random() * this.height)
        };
    }

    update() {
        // Update the world state
        this.sprites.forEach(sprite => {
            sprite.x += 1;
            if (sprite.x > this.width) sprite.x = 0;
        });
    }
}

module.exports = { World };
