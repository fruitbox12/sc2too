const fs = require('fs');
const path = require('path');
const Map = require('./Map');
const Minimap = require('./Minimap');
const Unit = require('./Unit');

class World {
  static async create() {
    const world = new World();
    await world.loadAssets();
    world.init();
    return world;
  }

  async loadAssets() {
    this.sprites = {};
    const files = fs.readdirSync(path.join(__dirname, '../assets'));
    for (const file of files) {
      const data = fs.readFileSync(path.join(__dirname, '../assets', file), 'utf8');
      this.sprites[file] = data;
    }
  }

  init() {
    this.map = new Map();
    this.minimap = new Minimap();
    this.units = [];
    this.loadUnits();
    // Additional initialization logic
  }

  loadUnits() {
    // Load initial units for the game
    this.units.push(new Unit('probe', { x: 1, y: 1 }));
  }

  executeCommand(command) {
    // Parse and execute the command
    console.log(`Executing command: ${command}`);
  }

  update() {
    // Update world state
    console.log('Updating world state');
  }
}

module.exports = World;
