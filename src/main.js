const World = require('./World');
const UI = require('./UI');

(async () => {
  const world = await World.create();
  const ui = new UI(world);
  
  ui.startGameLoop();
})();
