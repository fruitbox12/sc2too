const chalk = require('chalk');
const inquirer = require('inquirer');

class UI {
  constructor(world) {
    this.world = world;
  }

  startGameLoop() {
    this.render();
    this.handleInput();
  }

  render() {
    console.clear();
    console.log(chalk.green('=== SC2Too ==='));
    console.log(this.world.map.render());
    console.log(this.world.minimap.render());
    this.world.units.forEach(unit => {
      console.log(unit.render());
    });
    // Additional render logic for buildings, resources, etc.
  }

  async handleInput() {
    const answer = await inquirer.prompt([
      {
        type: 'input',
        name: 'command',
        message: 'Enter command:',
      }
    ]);

    this.world.executeCommand(answer.command);
    this.startGameLoop();
  }
}

module.exports = UI;
