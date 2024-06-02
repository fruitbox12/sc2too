class Keyboard {
    constructor() {
        this.keys = {};
        this.stdin = process.stdin;
    }

    setup() {
        this.stdin.setRawMode(true);
        this.stdin.resume();
        this.stdin.setEncoding('utf8');
        this.stdin.on('data', key => {
            if (key === '\u0003') { // Ctrl+C
                process.exit();
            }
            this.keys[key] = true;
        });
    }

    isPressed(key) {
        const pressed = this.keys[key] || false;
        delete this.keys[key];
        return pressed;
    }
}

module.exports = { Keyboard };
