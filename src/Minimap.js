class Minimap {
  constructor() {
    // Initialize the minimap
    this.size = { width: 10, height: 5 };
    this.map = Array.from({ length: this.size.height }, () => Array(this.size.width).fill('.'));
  }

  render() {
    // Render the minimap as a string for console output
    return this.map.map(row => row.join('')).join('\n');
  }
}

module.exports = Minimap;
