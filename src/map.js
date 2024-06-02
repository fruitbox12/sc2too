class Map {
  constructor() {
    // Initialize the map
    this.grid = Array.from({ length: 20 }, () => Array(20).fill(' '));
  }

  render() {
    // Render the map as a string for console output
    return this.grid.map(row => row.join('')).join('\n');
  }
}

module.exports = Map;
