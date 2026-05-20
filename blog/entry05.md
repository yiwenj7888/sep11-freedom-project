# Entry 5
##### 4/13/2026

### MVP product
---

For the MVP of my dumpling game, I focused on using the Phaser game framework along with core JavaScript concepts like arrays, loops, event listeners, and DOM manipulation. Because unlike a typical website project, this game combines both game logic and interactive UI, which made it more challenging but also more interesting.
One of the main concepts I used was creating a data structure to store all the dumpling steps. For example, I made an array called steps, where each object represents an ingredient or action like flour, water, or folding the dumplings. Each step includes properties like emoji, name, position, and a fun fact. This made it easy to loop through and generate everything dynamically instead of hardcoding each item.

To finish the MVP of my project, I learned how to use Phaser concepts like `this.add.graphics()`, `setInteractive`, and `scene.time.delayedCall0`. Outside of Phaser specifically, I also used Html and Css for the checklist sidebar on the right side of the page, and regular Js things like for loops, arrays, and functions that I already knew. The way I used all of these varied depending on what part of the game I was working on.


##### How I Finished My MVP
Once I felt okay with the basics, I focused on getting the core game loop working. The goal of the MVP was simple: the player clicks 8 ingredients in any order, each one shows a fun fact, and a win screen appears at the end. Here's how the main pieces came together:


All the ingredient data is stored in one array at the top of main.js. Each object in the array holds the id, emoji, name, fun fact, and x/y position on screen. This made it more easy to loop through and build all 8 buttons without repeating code:

```java
var steps = [
  { id: 'flour',   emoji: '🌾', name: 'Flour', fact: 'Dough is just flour + hot water!', x: 80,  y: 150 },
  { id: 'water', emoji: '🫖', name: 'Hot Water', fact: 'Hot water makes the dough stretchy.', x: 190, y: 150 },
//... 6 more steps
];
```
I used `this.add.graphics()` to draw the cutting board in the middle of the screen. What `graphics()` lets you do is draw shapes directly onto the Phaser canvas without needing an image file. Here's that part of the code:

```java
var board = this.add.graphics();
board.fillStyle(0xc8883a);
board.fillRoundedRect(250, 80, 300, 340, 16);
```

`fillStyle()` sets the colour and `fillRoundedRect()` draws a rounded rectangle. The last number (16) controls how rounded the corners are. I used this instead of a plain rectangle because it looked more like an actual wooden cutting board.

[Screenshot of cutting board in game]

For `setInteractive()`, I used it on every ingredient circle so the player can click them. Without it, clicking does nothing at all. 

Here's the full click code inside my `makeButton()` function:

```java
var circle = this.add.circle(step.x, step.y, 34, 0xfdf6ec);
circle.setInteractive({ cursor: 'pointer' }) ;

circle.on('pointerdown', function () {
  if (!circle.input.enabled) return; // ignore if already clicked
  circle.input.enabled = false;

  circle.setFillStyle(0x44bb44); // turn green
  emoji.setText ('checkmark');
  scene.boardMsg.setText(step. name + 'done!');
  scene.factMsg.setText('info ' + step. fact);
  document.getElementById('item-' + step.id).classlist.add('done');
});
```

The circle.input.enabled = false line is important as it stops the player from clicking the same ingredient multiple times and messing up the done counter. Without it, clicking the same circle twice would count as two completed steps.


<img src="blob:chrome-untrusted://media-app/6a7033dd-7a66-48f4-b7df-564958c97222" alt="Screenshot of ingredient circle turned green after clicking.png"/>



The checklist on the right side of the page is actually built with plain Html and Css, not Phaser. In main.js I loop through the steps array and create an `<li>` element for each one, then add it to the `<ul>` in the Html. When an ingredient is clicked, I use `classList.add('done')` to cross it through:

```java
for (var i = 0; i < steps. length; i++) {
  var li = document.createElement('li');
  li.id = 'item-' + steps[i].id;
  li.textContent = steps[il.emoji + ' ' + steps[i].name;
  list.appendChild(li);
```

In the Css, the .done class just applies a line through and greys out the text:

```java
#checklist li.done {
  text-decoration: line-through;
  color: #aaa;
}
```

[Screenshot of checklist with some items cross through]


I used `scene.time.delayedCall()` to wait a short moment before showing the win screen after the last ingredient is clicked. Here's that snippet inside `makeButton:`

```java
scene. done++;
if (scene. done == steps. length) {
  scene.time.delayedCall(500, function () {
    scene.showWin();
  });
}
```

Without this delay, the win screen would pop up at the exact same time as the last click animation, which felt too sudden. The 500ms gap gives it a bit of breathing room before the overlay appears.

[screenshot of win screen overlay]

Everything comes together in the full version of my MVP, which you can preview below or at the link:

[my live project link here](https://jsbin.com/cavetuceni/1/edit?html,css,js,output)


<img src="blob:chrome-untrusted://media-app/8733def1-5280-41db-8c03-dfba18346238" alt="Screenshot of the full finished game.png"/><img width="416" height="292" alt="image" src="https://github.com/user-attachments/assets/7966cb2a-c706-42be-a625-637b0a96e4da" />



### Engineering Design Process
---

In my previous blog, I was on steps 3 and 4 of the Engineering Design Process (EDP).
Throughout this blog, I'm on steps 5 and 6, creating a prototype and testing and evaluating it. I finished building the MVP and tested it by clicking through every ingredient to make sure each one turns green, updates the fact bar, ticks off the checklist, and also eventually triggers the win screen. Everything worked as expected. By my next blog, I hope to move on to step 7 of the EDP, which is to improve as needed, and start working on the beyond MVP features.



### Skills
---

* Reading documentation
  * The Phaser docs are detailed but not always easy to follow. For things like `setInteractive()` and `delayedCall()`, I had to look at the official docs and also search for examples online to understand how to actually use them. I couldn't always find what I needed in one place, so learned to piece together info from a few different sources.
  
* Simplifying code
  * My earlier version had a lot of repeated code with a separate block for each ingredient. I rewrote it so all 8 ingredients live in one array and a single `makeButton()` function handles all of them. This made the code way shorter and easier to read.

* Debugging
  * At one point, clicking an ingredient multiple times was breaking the done counter because the click event kept firing. I fixed it by setting
circle.input.enabled = false right after the first click so it can only register
once. It was a small fix but it took me a while to figure out why the counter was going higher than it should.



### Next Steps
For my next steps, I want to move on to step 7 of the EDP and improve the game beyond the MVP. The biggest thing I want to add is an order requirement so the player has to click the ingredients in the correct recipe order. If they click the wrong one, I want to show a message like "That's not next!" to make it feel more like an actual game. I also want to look into adding a timer and a score system if I have time.

[Previous](entry04.md) | [Next](entry06.md)

[Home](../README.md)


