class Unit {
  constructor(type, position) {
    this.type = type;
    this.position = position;
    // Additional unit properties
  }

  render() {
    // Render the unit as a string for console output
    return `${this.type} at (${this.position.x}, ${this.position.y})`;
  }
}

module.exports = Unit;
