# Entry 4
##### 3/9/26

### Context
My game is a first person, flat 2D cooking level game. My goal is to teach players to cook Chinese recipes such as dumplings. For the MVP, I focused on setting up the kitchen environment, like adding the main ingredients as assets, and seeing where players would interact with them. The art style is simple but has a relaxing feeling to it, which is inspired by casual cooking games, so players can easily identify ingredients and tools.

I started by breaking the game into small pieces:
* Scene: I created a basic kitchen layout as the main scene in Phaser. This could include counters, stoves, and/or ingredient areas.
* Player interaction: I plan to have clickable areas for ingredients and cooking tools so players could pick up items or use them.
* Game assets : Images for ingredients like vegetables, meat, and utensils, and perhaps a simple animations for picking up or using them.

My MVP Progress
---
To start off my project, I began working on the Html and Javascript side of my game before jumping into Phaser. I wanted to get a basic version of the page working first, just a background, some clickable elements, and a layout before figuring out how all the Phaser stuff fit in. Even while building the MVP, I knew I still had a lot to learn about Phaser, so I tried to go back and forth between making progress on the game and actually understanding the tool I was using.
Here's a progress check of my MVP so far:


Learning Phaser
---
I started learning Phaser by watching some basic tutorials and reading through the Phaser 3 docs. The first thing I got used to was the idea of a [Scene](https://docs.phaser.io/phaser/concepts/scenes). In Phaser, everything in your game lives inside a scene and it's basically like a room that holds all your objects. You have to use `create()` to set things up and preload if you need to load images or sounds first.
For example, here's the basic scene structure I started with:
```java
class GameScene extends Phaser. Scene {
constructor() { super ('Game'); }
create () {
// everything gets built here
  }
}
```

One thing that tripped me up early on was how Phaser draws things. Instead of just writing HTML elements, you call methods like `this.add.rectangle()` or `this.add.text()` and Phaser puts them on a canvas for you. It felt weird at first since I was used to HTML, but it started to click once I saw the results.
I also learned how to make things interactive. To let the player click on an object, you first call `setInteractive()` on it, then attach an event with `.on('pointerdown', function)`.

Here's what that looked like in my game:
```java
var circle = this.add.circle(step.x, step.y, 40, 0xffffff);
circle.setInteractive({ cursor: 'pointer' });
circle.on('pointerdown', function() {
circle.setFillStyle(0x44bb44); // turn green when clicked emoji.setText ('checkmark');
}) ;
```
This was probably the most useful thing I learned because it's what makes the whole game actually work and without it, clicking an ingredient does nothing.


What I Built for My MVP
---
My game is called Dumpling Kitchen. The idea is that you click through each ingredient in a dumpling recipe, and each click shows you a fun fact about that step. 

Here's what I plan my MVP would include or already have:
* A dark wood themed background built with Phaser's rectangle tool
* A cutting board in the middle that shows which step you just clicked
* A clickable ingredient circle around the board
* A fun fact at the bottom that updates every time you click something
* A win screen that appears once all ingredients are clicked
* A Play Again button that resets the game

The code is split across three files: index.html sets up the page, style.css handles the checklist on the side, and main.js is where all the Phaser code lives.

Here's how the ingredients are stored as data:
```java
var steps = [
{emoji: 'flour', name: 'Flour', fact: 'Dough is just flour + hot water!' , x: 100, y: 150},
{emoji: 'water', name: 'Hot Water', fact: 'Hot water makes the dough stretchy.' , x: 250, y: 150},
// ... more steps
];
```
Having all the data in one array made it easy to loop through and create all 8 buttons without copying and pasting the same code 8 times.



Skills
---
Below are some skills I picked up while working on this:
* Debugging - I kept running into issues where Phaser would try to run code before the scene was ready. I learned to put setup code inside `create()` and not outside of it.
* Reading docs - The Phaser 3 docs are pretty detailed but not always beginner friendly. I had to Google a lot of things to find examples that actually made sense to me.
* Keeping code simple - My first version had a lot of repeated code and long chains of Phaser methods. I went back and cleaned it up so each ingredient only needs one `makeButton` call instead of 8 separate blocks



Next Steps
---
For my next steps, I want to finish the MVP. I also want to do something beyond MVP if i have time, like adding a timer and maybe a score so there's more of a challenge. Right now the game almost works, but it doesn't really feel like a game yet.




[Previous](entry03.md) | [Next](entry05.md)

[Home](../README.md)



