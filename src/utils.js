class Keyboard {
    constructor() {
        this.keys = {};
    }

    setup() {
        window.addEventListener('keydown', (e) => this.onKeyDown(e));
        window.addEventListener('keyup', (e) => this.onKeyUp(e));
    }

    onKeyDown(event) {
        this.keys[event.key] = true;
    }

    onKeyUp(event) {
        this.keys[event.key] = false;
    }

    isPressed(key) {
        return this.keys[key] || false;
    }
}

module.exports = { Keyboard };
