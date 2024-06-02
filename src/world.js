class World {
    constructor() {
        this.sprites = [];
        this.spriteData = {};
    }

    addSpriteData(name, data) {
        this.spriteData[name] = data;
    }

    setup() {
        // Parse the sprite data and create PIXI sprites
        Object.keys(this.spriteData).forEach(name => {
            const data = this.spriteData[name];
            const sprite = this.createSpriteFromData(data);
            this.sprites.push(sprite);
        });
    }

    createSpriteFromData(data) {
        const lines = data.split('\n');
        const height = lines.length;
        const width = lines[0].length;
        const graphics = new PIXI.Graphics();

        lines.forEach((line, y) => {
            [...line].forEach((char, x) => {
                if (char !== ' ') {
                    graphics.beginFill(0xFFFFFF);
                    graphics.drawRect(x * 10, y * 10, 10, 10);
                    graphics.endFill();
                }
            });
        });

        const texture = this.app.renderer.generateTexture(graphics);
        return new PIXI.Sprite(texture);
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
