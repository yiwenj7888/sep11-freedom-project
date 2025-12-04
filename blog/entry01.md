# Entry 1
##### 11/5/2025

### Choosing the tool
I chose [Phaser](https://phaser.io/) to make my cooking game because I’ve always loved cooking, and over the years, my friends and I have had fun trying out new recipes. I thought it would be cool to make a game that captures that cozy, fun feeling of cooking.
I looked at other tools like Kaboom, but Phaser made more sense because it’s simple to learn, runs in the browser, and uses JavaScript, which I’m already familiar with. I also liked how Phaser’s animations and sprite systems made it easy to create the kind of characters and actions I wanted in my game.

### Some things of what I've learned so far

#### Animation system 
I learned about Phaser's animation system, focusing on how animations are created using frame-based sequences. 

For example, I created a walking animation using frames from a sprite sheet:

```java
// Creating a walking animation using frames 1–4 from the sprite sheet
this.anims.create({
  key: 'walk',
  frames: this.anims.generateFrameNumbers('mySpriteSheet', { start: 1, end: 4 }),
  frameRate: 10,
  repeat: -1
});
```

Then, I created a running animation using frames 1–8 with a faster frame rate:

```java
// Creates a running animation with more frames
this.anims.create({
  key: 'run',
  frames: this.anims.generateFrameNumbers('mySpriteSheet', { start: 1, end: 8 }),
  frameRate: 15,
  repeat: -1
});
```

#### Phaser Actions
I learned about Phaser's Actions, which allow you to manipulate groups of game objects. I experimented with `SetAlpha()` to make a group of sprites semi-transparent:

```java
// Setting the alpha of all sprites in a group to 0.5
Phaser.Actions.SetAlpha(myGroup.getChildren(), 0.5);
```

Next, I used `SetX()` to move each sprite along the x-axis with an increasing offset:

```java
// This moves sprites along the x-axis with increasing offsets (step = 50)
Phaser.Actions.SetX(myGroup.getChildren(), (sprite, index) => 100 + (index * 50));
```

---

### Engineering Design Process
I’m currently in the initial stages of the engineering design process, where I’m [learning](https://github.com/yiwenj7888/sep11-freedom-project/blob/main/tool/learning-log.md) and experimenting with how to build the game I want. This part is me figuring out how Phaser works and getting the basics of the game running. During this stage, the goal isn’t to start building the game, but to understand Phaser’s animation system, action system, and other important features that will help bring my game to life. I need to learn how to animate objects (such as ingredients and kitchen tools), manage interactions, and build a relaxing, immersive experience. By the end of this stage, I hope to have a good understanding of how to manipulate game objects and manage animations within Phaser.


---

### Skills
Phaser Animation System: I learned how to create and control animations using sprite sheets, like adjusting frame rates and controlling the duration of the animation to make movements feel more natural.

Actions API: I explored Phaser's Actions system, learning how to manipulate groups of sprites at once. For example, ability to set alpha transparency, move objects along axes, and scale them for managing multiple objects in a game, especially with my cooking game where you'll have various items and characters on screen at once.

Problem Solving: When I ran into challenges, like managing multiple animations using the same sprite sheet or aligning objects in a grid, I was able to look back into [Phaser’s documentation](https://docs.phaser.io/phaser/getting-started/what-is-phaser) to find solutions. These problem solving moments really helped my understanding of Phaser more better.

---

### Next Steps
For my next steps, I'm planning to dive deeper into learning my tool to use it more effectively. I'll also be reviewing cooking concepts to determine what I will be including into my project.

[Next](entry02.md)

[Home](../README.md)
