// All the ingredients the player needs to click
var steps = [
  { id: 'flour',   emoji: '🌾', name: 'Flour',      fact: 'Dough is just flour + hot water!',       x: 80,  y: 150 },
  { id: 'water',   emoji: '🫖', name: 'Hot Water',  fact: 'Hot water makes the dough stretchy.',     x: 190, y: 150 },
  { id: 'pork',    emoji: '🥩', name: 'Pork',       fact: 'Mix with soy sauce and ginger.',          x: 80,  y: 270 },
  { id: 'cabbage', emoji: '🥬', name: 'Cabbage',    fact: 'Salt it first to remove extra water.',    x: 190, y: 270 },
  { id: 'roll',    emoji: '🪵', name: 'Roll Dough', fact: 'Keep the centre a little thicker.',       x: 80,  y: 390 },
  { id: 'wrap',    emoji: '🥟', name: 'Fold',       fact: 'Over 30 ways to fold a dumpling!',        x: 640, y: 150 },
  { id: 'boil',    emoji: '🍲', name: 'Boil',       fact: 'Add cold water 3 times while boiling.',   x: 640, y: 270 },
  { id: 'sauce',   emoji: '🥣', name: 'Dip Sauce',  fact: 'Vinegar + chilli oil + soy sauce.',       x: 640, y: 390 },
];

// Add each step to the checklist on the right side of the page
var list = document.getElementById('checklist');
for (var i = 0; i < steps.length; i++) {
  var li = document.createElement('li');
  li.id = 'item-' + steps[i].id;
  li.textContent = steps[i].emoji + ' ' + steps[i].name;
  list.appendChild(li);
}

// The main Phaser scene
class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    // Track how many ingredients have been clicked
    this.done = 0;

    // Wood background
    this.add.rectangle(400, 280, 800, 560, 0x5c3a1e);

    // Cutting board in the middle
    var board = this.add.graphics();
    board.fillStyle(0xc8883a);
    board.fillRoundedRect(250, 80, 300, 340, 16);

    // Title
    this.add.text(400, 22, '🥟 Dumpling Kitchen', {
      fontFamily: 'Arial',
      fontSize: '20px',
      fontStyle: 'bold',
      color: '#ffe066',
    }).setOrigin(0.5);

    // Message on the cutting board
    this.boardMsg = this.add.text(400, 260, 'Click an ingredient!', {
      fontFamily: 'Arial',
      fontSize: '14px',
      fontStyle: 'bold',
      color: '#fff8e0',
      align: 'center',
    }).setOrigin(0.5);

    // Fun fact at the bottom
    this.factMsg = this.add.text(12, 510, '📖 Dumplings have been eaten in China for 1,800 years!', {
      fontFamily: 'Arial',
      fontSize: '13px',
      color: '#ffe066',
      wordWrap: { width: 590 },
    });

    // Create all the ingredient buttons
    for (var i = 0; i < steps.length; i++) {
      this.makeButton(steps[i]);
    }
  }

  // Creates one clickable ingredient
  makeButton(step) {
    var scene = this;

    // White circle
    var circle = this.add.circle(step.x, step.y, 34, 0xfdf6ec);
    circle.setInteractive({ cursor: 'pointer' });

    // Emoji inside the circle
    var emoji = this.add.text(step.x, step.y - 4, step.emoji, {
      fontSize: '30px',
    }).setOrigin(0.5);

    // Name label below the circle
    this.add.text(step.x, step.y + 42, step.name, {
      fontFamily: 'Arial',
      fontSize: '11px',
      fontStyle: 'bold',
      color: '#ffffff',
    }).setOrigin(0.5);

    // What happens when the player clicks
    circle.on('pointerdown', function () {
      // ignore if already clicked
      if (!circle.input.enabled) return;
      circle.input.enabled = false;

      // turn circle green and hide the emoji
      circle.setFillStyle(0x44bb44);
      emoji.setText('✓');

      // update the board message and fact
      scene.boardMsg.setText(step.name + ' done!');
      scene.factMsg.setText('📖 ' + step.fact);

      // tick off the checklist
      document.getElementById('item-' + step.id).classList.add('done');

      // Check if all done
      scene.done++;
      if (scene.done == steps.length) {
        scene.time.delayedCall(500, function () {
          scene.showWin();
        });
      }
    });
  }

  // Win screen
  showWin() {
    var scene = this;

    // dark overlay
    this.add.rectangle(400, 280, 800, 560, 0, 0.7);

    // Win text
    this.add.text(400, 240, '🎉 You did it!', {
      fontFamily: 'Arial',
      fontSize: '30px',
      fontStyle: 'bold',
      color: '#ffe066',
    }).setOrigin(0.5);

    this.add.text(400, 290, 'Dumplings are ready! 🥟', {
      fontFamily: 'Arial',
      fontSize: '16px',
      color: '#ffffff',
    }).setOrigin(0.5);

    // Play again button
    var btn = this.add.text(400, 350, 'Play Again', {
      fontFamily: 'Arial',
      fontSize: '16px',
      fontStyle: 'bold',
      color: '#ffe066',
    }).setOrigin(0.5);

    btn.setInteractive({ cursor: 'pointer' });
    btn.on('pointerdown', function () {
      // Reset checklist ticks
      for (var i = 0; i < steps.length; i++) {
        document.getElementById('item-' + steps[i].id).classList.remove('done');
      }
      scene.scene.restart();
    });
  }
}

// start the game
new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'game-container',
  width: 800,
  height: 560,
  scene: GameScene,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
});
