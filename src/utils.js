class Keyboard {
    constructor() {
        this.keys = {};
    }

    setup() {
        process.stdin.setRawMode(true);
        process.stdin.resume();
        process.stdin.on('data', (key) => {
            if (key[0] === 3) process.exit(); // Ctrl+C
            this.keys[key] = true;
        });
    }

    isPressed(key) {
        return this.keys[key] || false;
    }
}

module.exports = { Keyboard };
